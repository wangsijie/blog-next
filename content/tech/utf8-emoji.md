# 以JS处理emoji表情为例简介UTF-8编码

Emoji 表情符号是直接保存在字符中的标签，不是一张图片，而是可以理解为和一个汉字同类的东西。因此在绝大多数可以打字的地方，就能放Emoji。但是某些地方会出现表情变成问号或者一个框框的情况，其中一个可能的原因是使用了自定义的，或者过时的UTF-8解码形式。

首先简单说明一下文字在计算机中是如何被存储的。毫无疑义的是，文字最终一定是以二进制的形式存储的。其中最简单的是著名的ASCII码，他是早期由美国指定的一个编码标准，建立了一个二进制数到字母和符号的映射关系，其中共有128个符号，包括了英文大小写字母和标点符号等。二进制范围从`0000 0000`到`0111 1111`，具体范围可以查看[维基百科](https://zh.wikipedia.org/wiki/ASCII)。后来互联网时代这套标准延续了下来，一直用于英语文字的存储，通常直接用8位二进制，即一个字节（Byte）存储。

可是问题来了，世界并不只有英文，欧洲有法语、德语等语言不全是有26个英文字母组成的，亚洲又有众多的象形文字，比如中文字符的数量就多了去了。所以继续拓展，一开始，欧洲国家使用一个字节中剩下的128个空间各自表示自己语言的符号，而中文则是以`GB2312`为主（如Windows系统），用两个字节来存储常用的6万多个汉字。由于各种编码之间并不是遵循同样的标准，所以有些时候我们会看到各种乱码，比如著名的`手持两把锟斤拷，口中直呼烫烫烫`。

<!--more-->

## Unicode 与 UTF-8

Unicode的出现，正是为了解决文字编码问题，它建立了一张超大的映射关系表，存储各国文字符号，可以看作是ASCII的国际版，其数量已经远远超过了2个字节的范围。其中Emoji表情就在其中占有一段位置。

那么为什么有了Unicode还会出现乱码和Emoji的不正常显示呢？因为Unicode只是规定了映射关系，具体存储并不一定按照这个顺序直接对应到二进制码。除了历史原因外，还有一个问题就是长度过长引起的浪费，假设用3个字节作为一个文字符号，那么英语（ASCII）的存储就会出现两个字节的浪费。因此通常采用一种可以兼容ASCII的存储方式，使得字节数不需要固定到最大位数。

著名的`UTF-8`便是Unicode的一种实现方式，解决了上面提到的长度浪费问题。除去ASCII的范围，一个字节中还存在1开头的各种情况，UTF-8充分利用了这部分空间，规定了一些标识位，实现了变长的编码方式，即一个字符可能由1-4个字节组成。这样ASCII继续保持精简，而其他丰富的符号则自行拓展更多的字节保存。编码规则十分简单，见下表

Unicode符号（顺序、16进制表示）| UTF-8编码（变长、2进制表示）
---------------------------|-----------
0000 0000 - 0000 007F | 0xxxxxxx
0000 0080 - 0000 07FF | 110xxxxx 10xxxxxx
0000 0800 - 0000 FFFF | 1110xxxx 10xxxxxx 10xxxxxx
0001 0000 - 0010 FFFF | 11110xxx 10xxxxxx 10xxxxxx 10xxxxxx

解码规则总结：对于每一个字节

1. 如果第一位为0，则为单字节码，后面7位表示ASCII
2. 如果开头为110，则表示双字节码的第一个字节，其后5位及下一个字节的后6位共同组成一个Unicode符号
3. 如果开头位1110，则表示三字节码的第一个字节
4. 如果开头位11110，则表示三字节码的第一个字节

## Emoji编解码

Emoji在Unicode的位置比较靠后，通常需要4个字节码。因此如果解码方案里面没有考虑4个字节的情况（11110开头），则会出现一些混乱，但是混乱不会影响太多，因为假设只解析了3个字节，那么最后一个字节是10开头，通常会被忽略。

下面以JS为例，进行Emoji的编码。

```js
function stringEncode(str) {
    const bytes = new Uint8Array(str.length * 4); // 先都假设最长
    let offset = 0;
    for (let i = 0; i < str.length; i++) {
        const charCode = str.codePointAt(i);
        let codes;
        if (charCode <= 0x7f) { // 0111 1111 单字节
            codes = [charCode];
        } else if (charCode <= 0x7ff) { // 双字节 11000000 -> 0xc0, 00111111 -> 0x3f, 0x80 -> 10000000
            codes = [0xc0 | (charCode >> 6), 0x80 | (charCode & 0x3f)];
        } else if (charCode <= 0xffff) { // 三字节 1111 1100 0000 -> 0xfc0
            codes = [0xe0 | (charCode >> 12), 0x80 | ((charCode & 0xfc0) >> 6), 0x80 | (charCode & 0x3f)];
        } else { // 四字节 11 1111 0000 0000 0000 -> 3f000
            codes = [
                0xf0 | (charCode >> 18),
                0x80 | ((charCode & 0x3f000) >> 12),
                0x80 | ((charCode & 0xfc0) >> 6),
                0x80 | (charCode & 0x3f)
            ];
        }
        for (let j = 0; j < codes.length; j++){
            bytes[offset] = codes[j];
            ++offset;
        }
    }
    // 根据实际位数调整
    const finalBytes = new Uint8Array(offset);
    for (let i = 0; i < offset; i++) {
        finalBytes[i] = bytes[i];
    }
    return finalBytes;
}

function stringDecode(bytes) {
    const unicodeArray = []; // 存储解码后的实际unicode
    let string = '';
    let offset = 0;
    while (offset < bytes.length) {
        const byte = bytes[offset];
        if (byte < 0x80) { // 单字节 0000 0000
            unicodeArray.push(byte);
            offset += 1;
        } else if (byte < 0xe0) { // 双字节 1100 0000
            unicodeArray.push(
                ((byte & 0x1f)<<6)
                + (bytes[offset+1] & 0x3f)
            );
            offset += 2;
        } else if (byte < 0xf0) { // 三字节 1110 0000
            unicodeArray.push(
                ((byte & 0x0f)<<12)
                + ((bytes[offset+1] & 0x3f)<<6)
                + (bytes[offset+2] & 0x3f)
            );
            offset += 3;
        } else { // 四字节 1111 0000
            unicodeArray.push(
                ((byte & 0x07)<<12)
                + ((bytes[offset+1] & 0x3f)<<12)
                + ((bytes[offset+2] & 0x3f)<<6)
                + (bytes[offset+3] & 0x3f)
            );
            offset += 4;
        }
    }
    for (i = 0; i < unicodeArray.length; i++) {
        string += String.fromCodePoint(unicodeArray[i]);
    }
    return string;
}

const str = '😊大家好👏';
const bytes = stringEncode(str);
console.log(stringDecode(bytes));
```

## 锟斤拷问题

锟斤拷总的来说，是因为utf-8的兼容处理产生的临时编码，被当作真实编码，并到了GBK解码方式，导致出现了锟（0xefbf）斤（0xbdef）拷（0xbfbd）。具体过程如下：

1. 新的未识别的unicode编码，导致出现问号

😊的utf8编码为：11110000, 10011111, 10011000，10001001，解析为unicode编码为128522，这是一个比较大的数字，某些早期环境可能还不支持，比如较早版本的win10或者安卓，那么无法从unicode映射表找到字符，会使用一个特殊的符号代替，符号的unicode代码为0xfffd，显示为一个问号。（可以试一下用手机发一个Emoji给较老的电脑）。

2. 特殊问号的utf8编码

这个特殊问号，也需要临时存储为utf8，编码后为11101111 , 10111111, 10111101，16进制0xef 0xbf 0xbd

3. 解析为双字节编码

如果把这个特殊问好，直接复制或者输出到一个使用GBK等双字节编码的环境，会被直接解析（这类编码是定长的，没有像utf一样的标识位）。假设连续发了两个😊，那么得到的是0xefbfbdefbfbd，解析为3个字符，0xefbf, 0xbdef, 0xbfbd，正好是锟（0xefbf）斤（0xbdef）拷（0xbfbd）。
