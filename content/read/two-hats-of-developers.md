# Two Hats of Developers

原文: [https://mp.weixin.qq.com/s/iBIpgidSt1a78M4V4_7GzQ](https://mp.weixin.qq.com/s/iBIpgidSt1a78M4V4_7GzQ)

今天要讲的话题是我在不同场合下提及过这个概念多次的话题。Two Hats of Developers 即开源社区的 contributor 在参与过程中拥有多重身份，既是开源社区当中的志愿者，又是商业公司的员工或自由职业者等等。这个观点对如何运行一个开源社区的方方面面都有深远的影响。

可以说，这个概念在我的脑海中有着很丰富的含义，以至于此前一直无法用简单的文字描述出来。近几天反思 KPI 导向的衡量指标带来的种种问题的时候突然找到了灵感。

以下正文。

## 开源项目和商业公司

在讨论如何衡量开源社区的指标之前，我们需要了解开源项目和商业公司之间的关系[1]。因为大部分 KPI 导向的衡量指标，实际上指的是商业公司里的员工被摊派的指标。

今天，不少新兴的科技公司声称自己是“开源技术公司”，并创造了“主导公司”“背后的商业公司”和“社区用户”等等词汇。我要讲的开源项目和商业公司的关系，就是和这类公司之间的关系。

开源社区通用的行为准则之一是“赢得权威”，即 contributor 通过 contribution 创造价值赢得其他社区成员的信任和尊重，积累社会资本，而不是通过在商业公司当中的地位获得权力。开源社区的公平性是基于 contribution 赢得权威的精英领导制。因此强调社区当中有一家“主导公司”进而暗示这家公司及其雇员的主导地位是荒唐的。

Contributor 可以通过自己的 contribution 积累社会资本，公司也可以通过公司层面的 contribution 来赢得声望，包括主办社区活动，支持员工参与社区，赞助社区日常支出等等。社区成员都会知道哪家公司为社区的发展做出了重大贡献。公司的这种 soft influence 在[夜天之书 #5](https://mp.weixin.qq.com/s?__biz=MzIzMDEwODM5OQ==&mid=2647851761&idx=1&sn=ed42fcc1c1cb3695d4161a9b48c16410&chksm=f09fdf71c7e856673d37520dfac3fe05a5183ace965f91e90de9b24faf81adabc548461afb39&scene=21#wechat_redirect)当中也有介绍。

然而，近年来不少打着“开源技术公司”名号的企业，却在 open-source 的旗帜下行 source available 专有软件之实。在上一篇文章[夜天之书 #28 What is Open Source](https://mp.weixin.qq.com/s?__biz=MzIzMDEwODM5OQ==&mid=2647851908&idx=1&sn=e57a31bf21bac4a5ab1f3c077b258aca&chksm=f09fde04c7e857123d3f934e9bcd61d6e5e8e5f563152d31f0f9d29276c86fda00fe1056994d&scene=21#wechat_redirect) 当中提到

> Contribute 这些项目，并不能保证自己的努力始终以开源的形式存在，乃至于自己都不能享受到自己努力工作带来的改善。这种源码可得的专有软件的开发模式，实际上仍未摆脱一个组织一家公司雇一拨人写一个软件本身就是产品拿来盈利的思路。随着 contributor 逐渐发现这类软件协议上的不平等以及时不时出现的改换协议的案例，最终源码可得的专有软件会像传统专有软件一样无法获得开源协同带来的生产力提升。

对此类软件的批评都不是要求 copyleft 式的自由软件保证，而是 contribute 这个项目本身就是可疑的。如果是 contribute ASF 项目，你不必担心自己做的工作自己不可以用，顶多别人拿去商用。这种 source available 的专有软件，为它做 contribution 以后又被 CLA 掠夺了权利，自己想从自己的 contribution 中受益都要受到种种限制。

在讨论开源项目和商业公司应该有的关系之前，我们先来看由于项目和公司定位杂糅带来的问题。

核心问题在于开源项目的天性与商业公司的需求的割裂。

这看起来有些不可思议，明明是把项目和公司定位杂糅了，为什么问题却是两者之间的割裂呢？其实这也不奇怪，因为开源项目和商业公司天生有着不同的关注点，强行糅合在一起，会出现的自然是相互排斥带来的割裂。

这种割裂的典型特征就是商业公司为了保证绝对的控制，在开源项目的开发流水线以外，搭建了“主导公司”控制的第二流水线，并逐渐控制不住第二流水线对开源流水线的侵袭。

我们来看两个例子。

第一个是经典问题“应该在开源社区上投入多少时间”。这可以说是当下“大厂开源”背景下，被摊派指标的员工被问得最痛苦的问题了。导致这个问题的根源，就是存在第二流水线。

不管是否实践开源项目当中公平参与的原则，哪怕是 GitHub 等形式的托管，都足以挑动商业公司遵循传统控制理论指导下的神经。换句话说，只要做到“开放源代码”这个基本动作，许多商业公司就快受不了了。为什么不是公司内可见？读写权限管控呢？依赖库有没有经过安全专家审计？如果 A/B/C/D/E 情况发生，如何保证公司的利益？

这样的担忧下，基于 GitHub Issue + Pull Request 或其他形式的开发流水线就会被排斥。要么彻底弃用，就做镜像代码仓库，倒也是彻头彻尾的 source available 专有软件。但是商业公司又想蹭个开源的热度，就会保留一些入口。同时出于上面提到控制论作祟，这个开源流水线是受到歧视的，商业公司必然会在“内部”搭建起第二流水线。

![](/content/two-hats-of-developers/640.webp)

如上图所示，community 部分有一套流水线，company 部分也有一套流水线。软件代码很相似，但又略微有所不同，稍有经验的程序员都知道这种情况下不同版本出现的问题定位调试起来是最折磨的。另外持续集成等流水线要么是重复的，要么有不同关注点。community 部分关注的是社区成员之间的协同和项目的质量，company 部分关注的是产品的应用和线上问题。

这两套流水线很容易产生冗余和不同关注点相互侵入。要么是保障软件质量的测试套件和测试样例一直纠结到底应该放在哪，重复实现的持续集成逻辑，经典问题“测试要开放给社区吗”。要么是 OnCall 乃至公司绩效指标相关的统计信息侵入到 community 当中，强行添加只有商业公司关心的 label 等等。

推崇敏捷开发的同学也许注意到我用 silo 来描述这种模式，community 一个职能竖井，company 一个职能竖井。这种情况下指望两个实体之间互相提供价值是不切实际的。而这，却是当下大部分商业公司的做法，成立一个“社区部门”，一锅乱炖把用户社区、应用开发者社区和内核开发者社区全都丢给这个孤立无援的团队。实际上，一个开源项目真正要在这几点上都取得成功，所面临的的挑战不亚于经营一家创业公司，而传统的管理者仍然认为这是几个工程师或者加上运营人员就能搞定的问题。

应对这个问题的方法并不复杂。Community 应该是一个横向基石的概念，而非纵向的职能竖井。商业公司的产品应该基于开源软件设计生产，而非软件本身就是产品。这样，商业公司的员工开发产品时依赖开源软件，对其修改贡献回上游也即参与开源项目，因此同时也是开源项目社区的贡献者。

![](/content/two-hats-of-developers/2.webp)

如上图所示，在这个结构下，commercial 部分只做商业必须的流水线，同时该作为专有软件开发的插件或服务作为专有软件开发。“应该在社区上投入多少时间”的问题也不攻自破，因为根本不需要额外在“社区上投入时间”，你的产品就是基于开源项目做的，遇到问题该投入时间就投入时间。同时，community 也成为整个产品线上的员工都会关注的实体，而不是单靠一个“社区部门”大声疾呼。

第二个例子是流程管控。这一点在上面的例子里也有所提及，我们以一个具体的例子展开。

开源社区当中需要适当的流程来帮助 contributor 创造价值。如何加入这个社区，如何提交贡献，如何合作和处理冲突，这些信息对于 contributor 来说都是有益的。然而，社区当中的流程只有简单才能持久，流程应当是从社区成员的共识中归纳出来的，绝不会是预设空想的流程管控。

“主导公司”很容易在公司之内形成一个产品经理、项目经理和开发者的开发结构。要求任何需求的开发都经过经理乃至公司之内的某种委员会评审之后才能实施。一旦加上这种规矩，如果公司还把持着开源社区实际上的控制权，一个自然而然的可怕念头就诞生了，“外部贡献者”也应该遵守相同的流程。否则，经理和委员会及其代表的商业公司就会感受到强烈的冲击，认定“外部贡献者”是失控的，是有毒的。

这是完全错误的想法。

开源社区当中任何 contributor 都是公平的参与，遵守 earn authority by contribution, not by position 的原则。反观这些经理和委员会成员，在商业公司中往往从未参与过 community 的任何活动，甚至都没露过面，毫无 contribution 可言，仅仅按照传统的控制理论以 position 强行占有权力发号施令。其发号施令的对象不过是兼具公司员工身份的社区成员，但却因为数量的优势造成了实际的影响。

这在信奉控制论的组织中看似有道理，过去的几十年间也都是这样运作的。但是开源软件社区是跨越组织边界的协同支撑起来的，contributor 不会买商业公司的账。我凭着自己的技术实力做出 contribution 努力改善软件，为什么要向你这家商业公司里一个没有 contribution 的管理人员汇报？我给你打白工？这种冲突愈发加剧了管理人员的危机感，再次认定“外部贡献者”是失控的，是有毒的。

另一方面，我曾在一个分享上提过，contributor 能够开始 contribute 开源软件，尤其是持之以恒地创造价值，其核心动力来自于对项目愿景、技术能力和社区人际关系的认可，是完全自驱全力以赴的。这跟打工人的思路是不一样的。因此 contributor 有更强的动力去遵守简单有效的流程，哪怕商业公司的打工人觉得这跟我的本职工作无关，好麻烦啊不如直接提交代码算了别的都毁灭吧。因此 contributor 有更强的动力去推动 contribution 落地，虽然不愿意向一个莫名的管理人员汇报，不愿意被奇怪的时间排期限制（当然，项目层面的 code freeze 是可以理解的），哪怕商业公司的打工人认为能不做就不做，混一天是一天。

这并不是说商业公司的员工都是打工人，我只是在对比两种不同的心态。实际上，根据《企业的人性面》[2]等著作中的论述，打工人心态并不是本性，而是出于管理者的假设。

> 采用 X 理论的观点，就免不了会重视各项控制的技巧，包括以下步骤和方法：告诉人们该做什么、确定人们是否在做，以及给予奖励和惩罚，等等。由于 X 理论的假设是人只有被指使才会为组织的成功效力，因此我们会很自然地关注指挥和控制的技巧。
> 
> 与此相比，Y 理论更关注“关系的特征”，期待由此建立一种环境，鼓励我们对组织目标作出承诺；同时也提供机会，使我们发挥最大的主动性、天赋以及自我指导力等，以达到组织的目标。
> 
> 最重要的是，Y理论的假设说明了一个事实：组织中，人们互相合作的限制并非来自人类本性，而是源于管理方法不当，不知道该如何充分利用人力资源的潜力。X理论为管理者提供了很好的理由，可以解释组织绩效低下的原因，即人类本性所致。而Y理论则将问题归于管理本身：如果员工表现懒散、态度冷漠、逃避责任、拒绝合作、缺乏创新，那一定是因为管理者没有采取适当的组织与控制方法。

在强个体的价值崛起的今天，如果不能了解新的组织认知方式，在组织中激发人的自我指导和自我激励，那么组织一定是失败的。只不过在商业公司当中员工或许只会沉默地对抗，而开源项目当中 contributor 会直接质疑或用脚投票。

从敏捷宣言的角度来说，个体和互动高于流程和工具这个原则也是反对流程管控的理论依据。可以说，开源的理念和敏捷的理念在软件开发的认识上是相通的。

两个例子讲完，我们抛出开源项目和商业公司应有的关系的结论。其实在上面的讨论中已经蕴含了这个结论，那就是开源项目和商业公司是两个独立的实体，商业公司基于开源软件构建起自己的商业产品或服务，并持续投入回馈开源社区。

抛开上面字里行间讲过的原因，我们来聊聊要做到这一点的方法。我们需要刻意地分开开源项目和商业公司，这是因为大环境下控制论的力量太过强大，一旦定位不清有所重合，第二流水线侵入开源流水线，以及社区成员对开源项目和商业公司之间的差异的模糊化认知都不可避免。比如，提起 MongoDB 和 ElasticSearch 这两个项目，你是不是只能想到同名的产品和公司？

要想分开开源项目和商业公司，可以从以下三点入手。

第一点是起一个不同的名字，千万不要图简单对着 Xxx 项目起一个 XxxLabs 的公司名。这恰恰暴露了你的思维惯性命中了上面大部分的坏例子，并且公司员工一定分不清开源项目和商业公司。客观上存在不会参与开源项目的公司员工，对外宣称自己是 XxxLabs 的人，也会引起社区成员的混乱。XxxLabs 的财务人员跟我这个 Xxx 项目的 contributor 为什么会共享同一个组织名字？归属感在这种情况下非常难以建立。

第二点是避免商业公司攫取过度的权力，包括上面讲到的第二流水线入侵，流程管控限制，以及潜在的修改协议的威胁。如果将开源项目从一开始就以独立项目的形式运行，license 选择正确，阻止暗藏杀机的 CLA 落地，在多样化的社区力量发展之后，商业公司也就无法攫取过度的权力了。

第三点是商业公司应该 fork 独立项目，以独立项目为上游，归属商业公司的 fork 为下游。即使对于可被认知为在项目层面，而非商业产品特有的变化，员工作为 contributor 可以直接在上游开源项目开发，这种存在一个下游商业公司 fork 的模式，也将很大程度保护商业压力和客户需求侵入到上游开源社区。

比如 Apache Pulsar 项目，StreamNative 公司就制作了一个公司层面的 fork 并以 mirror issue 等形式建立起商业公司关注的内容的一个在开源项目信息之上的视图。

商业公司必须为客户提供价值，因此产品或服务的 hotfix 和 hacking 不可避免。但是如果像某些公司一样产品即软件，那么这种需求就会变成必须往开源项目倾倒服务于“主导公司”的客户，但是从开源项目本身看无意义，或者不够好的变更。如果是一个公平的 earn authority by contribution 的社区，这种提案很容易通不过，或者延期。于是商业公司又判断“外部贡献者”是失控的，是有毒的，必须建立起一套控制机制来贯彻自己的商业利益。

反过来看，如果有一个下游商业公司 fork 来缓冲这些需求，紧急处理之后再思考如何 contributing back 等等，就变成一个经过研究的 upstream first 原则的理解和落实的问题。不需要创造出一个新的问题来解决，甚至根本就是无解。

区分开了开源项目和商业公司，杂糅项目和产品以及公司的 KPI 指标也就没了意义。我们从 2C 运营模式和开发者社区的传统 KPI 指标两个方面切入，讨论衡量开源社区的指标的误区和应该如何做。

## 2C 运营模式

2C 运营模式即面向消费者的运营模式，这里指的是在“社区运营”这个概念火起来以后，装在这个袋子里泥沙俱下的运营人员的实践。

2C 运营模式一脉相承自当年遍地黄金如今增长缓慢的消费者市场营销，其基本假设是运营对象都是傻瓜（无贬义，即对人的智能的最少假设），通过直接利益交换营销指标，尤其是人头数，点击数一类的氛围型指标。换句话说，搞出气氛，数字好看就算成功。

这种模式下典型的两个案例是集赞和捉虫计划。

前一个例子不展开了，很典型的是把运营对象当成傻瓜，凑人头刷一个数据搞气氛，但是做出来的数字跟社区当中创造价值毫无关联。近期有不少文章分析过，例如[别逗了，同学！开源不是点赞送礼](https://mp.weixin.qq.com/s?__biz=MzkxNTI2NzMwNw==&mid=2247488753&idx=1&sn=f3c798418161b5f572235a14d5055f35&chksm=c1609f75f61716637b0131c12aead9509d7e39dbc3aabe6a60f896612abde294c90935179481&scene=21#wechat_redirect)。

后一个例子其实就是故意留 BUG 凑人头“修复”。而且还是那种加个 linter 写个脚本就能持续集成解掉的问题。为了运营，就不这么干了，而是故意留下几个没写过代码的人也能照猫画虎搞个“贡献”的坑，看见了也不去修，就等着交给运营人员去“放虫”，甚至我亲自写低级 BUG 给人修。

这种活动真的异常尴尬，不要解释是为了降低门槛还是鼓励参与，开源软件社区的目的是制造出好的软件，不是闹哄哄的来一堆人假模假样的“参与”。如果为了运营能背弃软件工程的最佳实践，那么毫无疑问这是为了运营而运营。这样吸引来的 contributor 也不会是真正有热情参与 community 的，而大概率是干一票跑路的投机者。

关注开源软件的开发者群体基本是完全看不起这种混一个 PR 换一个马克杯或者某种周边的公司的。如此运营，恐怕还有负面效果。唱赞歌的人也不过是为了忽悠运营接着撒币罢了。

我在 COSCon'21 的主题《Why Contributors Stay and Grow》[3]上提到过 2C 运营模式的运用姿势。这是一种调动 contributor 直接激励的参与动机的手段。

类似 GSoC 或 Hacktoberfest 这种活动，在不侵入项目正常开发的情况下，鼓励参与者投入到开源软件社区正常的价值创造中。活动只是提供了一个引子连接起新成员与其他社区成员的关系。这种通过直接激励引导入门，在参与和价值创造中积累起社会资本并逐渐深入的模式，对社区是有益的。尽管我还是认为活动的数量应该控制，一旦不加控制势必引来投机者。

这种好的直接激励模式和上面提到的 PR 或 star 换周边的根本区别就在于动机和行为。好的直接激励是以社区的价值创造为本，活动用于加速及支持这个过程。投机的方式从活动参与者，到运营人员，到被迫参与的此时不戴社区成员的帽子的公司员工，都是为了这个利益交换而行动，彼此看不起还要假装融洽相处。一旦利益交换完成，关系立即分崩离析。不是说结果都是 contribute 了，吸引到人来了就是好的。这种动机的差别会营造出截然不同的社区氛围，身处其中的人能够明显的感觉到其中的差别，并在诸多细节上体现出来。

总结来说，2C 运营模式在 2D (developer) 的环境下，只能以直接激励的模式落实，并且在实践中需要恪守辅助的角色，不应该喧宾夺主。新成员进入社区后，需要强大的社区引力吸引他到某个领域继续深入。当然，也有老成员参与活动的情况，只是因为活动本身基于开源社区正常的价值创造过程，这并不需要额外注意。最后，2C 运营模式下的直接激励一般价值不高，不应该过度包装，否则会掉进低估 contribution 的陷阱，起反作用。对这种模式能够为社区发展创造的价值，也不用抱太大希望。

2C 运营模式我实际上并没有做深入的研究，但是其显而易见的问题太多，也是近期的“引爆点”，所以单独讨论一小段。

## 传统 KPI 指标

传统 KPI 指标讲的是落到商业公司的开发人员头上的“开源工程效能”和“社区活跃程度”类指标。这类指标的问题，一言以蔽之，是没有理解商业公司想在开源社区当中寻求什么。

我们先看几个典型的传统 KPI 指标。

- Contributor 人数
- Committer 人数
- Feature 数量

这几个指标作为指标的时候就是有问题的。

Contributor 人数这个指标是典型的线性思维。这个季度 200 人，下个季度 500 人，明年 1000 人，甚至直接来个十倍增长计划。这种线性思维的底层逻辑是 contributor 是标准化资源，直接进行一个小学算术乘法就能够增长上去。

当商业公司的开发人员被摊派了这样的 KPI 之后，他必然会做的是简单解释 contributor 的意义，然后通过真正能够标准化的手段来落实。典型地包括报告 issue 或提交代码，下一步就是转入前面提到的 2C 运营模式，开始凑人头。

Committer 人数这个指标看起来要高端一点，但是本质上还是线性思维。这个季度新增 5 个，哦，还要来自“外部”哦，下个季度新增 10 个，如此递增甚至加速递增，不然怎么能表现出你的社区在增长呢？

当商业公司的开发人员被摊派了这样的 KPI 之后，他必然会做的是降低 committer 的标准，求着 contributor 来配合演出，甚至自己先完成 contribution 再签上别人的名字，然后按照被降低的标准立刻提名完成指标。

如果是个健康的多元化社区，这种降准的行为不被不同背景的维护者所接受，将无法推行。如果能够推行，那就证明公司的意志已经侵入到社区当中了。前文讲过，这种控制论在 community 当中是行不通的。优秀资深的参与者会唾弃这种行为，将这样做的人驱逐出去。如果没有这样的力量，那么他们会自行离开。

同时，这种指标吸引来的又是投机的人。反正你是那个被 KPI 压得喘不过气的人，我开恩来配合你演戏，你把 contribution 和 title 都准备好，我出个“外部”人头。这种氛围下的商业公司的开发人员，一方面不得不求着这些投机客帮忙解决指标，另一方面又发自内心的瞧不起这帮人，“协作”气氛是非常诡异的。Community 当中期待的富有责任心，积极进取能力强劲的 committer 群体被腐化，从而商业公司进一步坚定了“外部贡献者”是低能的，是有毒的，另外创建一个公司内部的小团体来掌控社区。Committer 反而成了大家都避之不及的头衔。这种就是典型的道在迩而求诸远，事在易而求诸难。

Feature 数量这个指标看起来应该靠谱一些了吧？毕竟不用再凑人头了，而是实实在在的看社区创造的价值本身。其实也不然。只要数字本身就是结果，数字背后缺少价值创造的假设，再加上线性思维的推波助澜，所有这类指标都会变成一场闹剧。

Feature 数量这个指标的一个问题是统计手段，实话说没看到之前我都想不到还有这种问题。一般来说，开源社区是个开放式的协作空间，社区成员自我驱动 contribute 力所能及的内容。不论是在技术设计等各种讨论上提供意见建议，参与协调决策，还是提交代码，撰写博客，或者推广演讲，都应该是有价值的 contribution 才对。

但是 feature 数量成为指标以后，流程管控的形式主义又开始冒头了。明明是根据自己的兴趣接手 issue 提交代码或者 review 变更，现在一定要加入一个叫 feature 开发小组的形式化组织，加入小组才算你参与到 feature 开发里。这个小组里面迅速分成了小组长，主力人员，辅助人员等等角色，而且还要求要每周汇报，这个工作必须在某天之内完成。相信你也看得出来，这又是商业公司流程管控的荼毒。我作为一个 contributor 为什么要受一个商业公司控制，向公司的管理人员汇报，还要做出时间保证？给自己找不痛快，给你打白工？

并且，实际上 contributor 只是厌恶硬性的时间承诺和向不是社区成员的公司管理人员汇报，大部分的 contributor 是有自驱力的。Contribution 可是他的社会资本。如果有这样的假设，那么从商业公司的员工角度出发，所需要做的就是兜底公司对开源软件的期待。不管是直接 take over 工作自己完成，还是 shepherd 开发进度并做开源项目层面的风险管理，都是可以商量着来的。我所接触的 contributor 并不吝啬给出一定的时间承诺，只是形式上会更宽松一些。

另一个问题是 feature 数量很容易跟“外部贡献者”占比开始挂钩，这跟前面提到的凑 committer 人数就是同样的问题了。

强调 feature 数量还会误导对 contribution 认识。一方面，feature 本身也不是完全等价的，每一个 feature 的难易程度就是那个 feature 的难易程度，不同模块，不同代码复杂度，尤其是基础软件乍一看的复杂度跟深入分析之后实际的复杂度，几乎是无法量化的。简单地分成几个等级，永远是分不清楚的。另一方面，contribution 的形式如前文提到，是多种多样的，是创造性工作。不是拍个数字变成计件工作制。

最后，传统 KPI 指标还有一个典型的形式，也是“大厂开源”背景下，商业公司的员工被摊派的最痛苦的指标。那就是商业公司向开源基金会捐献的项目的毕业。

不同的开源基金会的孵化器的目标是不一样的。有的重在提供一个递进阶段，利用基金会的经验和力量构建社区。有的重在区分顶级项目、孵化项目和沙箱项目，提供不同程度的品牌宣传。但是无论如何，以“毕业”为目的的指标很容易走向形式主义的弯路。

无论是有着多么好的出发点的指标，都会被压力山大的员工简单的解释成某个数字或者某个人的保证。尤其是带有确定性逻辑惯性的开发人员，把自己错误地摆到了纯粹运营人员的位置上，经典复刻控制论试图遥控开源社区达成数字指标。典型地，需要人员多样性是吧？前员工也不算我这家公司了吧，虽然离职了也不搞这个项目了，人头还在，算上几个。这都不够？随便找一个别家公司的，安排上 title 凑数。需要用户多样性是吧？找个兄弟公司给点钱假装上线，给我站站台完事。

脱离 build community 的目标，变成“毕业”本身是目标，加上巨大的“今年毕业”一类的压力，无怪乎被摊派指标的员工操作变形。当然，根据开源基金会对孵化阶段的定位和实际指导判断人员的关注重点不同，这一指标某种程度上是提供了一个 build community 的机会。只是承受压力的员工不停地问，“求求了，怎么才能快点毕业啊。不要那些理论和道理，给我一点现在就能做马上就见效的指标吧。”我想也已经偏离目标甚远了。

## 开源社区的衡量方式

上面讲了两种不同角度下若干个具体指标的误区，那么到底应该如何衡量评价一个开源社区呢？

### 基本原则

首先要做的是回答商业公司想在开源社区当中寻求什么这个问题。

这个问题的一个前置问题是商业公司如何认知自己和开源社区的关系。如果一开始就觉得这是“我的”项目，“我的”社区，商业产品就是开源软件本身或者无法分割，那么其实商业公司就是把这个名为“开源社区”的东西当成自己的一个子公司或者一个部门，“开源软件”只不过是源代码公开的专有软件。这种情况实际上没有开源社区，衡量开源社区也就无从谈起。

如果按照上面的讨论，把商业公司和开源项目区分开来，我们就能理清楚对于开源社区本身应该如何衡量，对于同时是商业公司员工的社区成员，如何桥接社区的价值创造和公司的诉求，如何回答为什么商业公司要支持开源项目的问题。

我们先看后者。由于商业公司和开源项目区分开了，商业公司要支持开源项目就不是在开源的环境下听起来有些异味的“这是我的项目，我当然要支持”，或者“这是我直接的核心竞争力，我控制社区，社区好就是公司好”这样的理由。虽然听得多，但是从前文可以看到，这其实是不对的。

所以，商业公司要支持开源项目的原因是，商业产品建立在开源软件的基础上，需要保证对开源软件的人才储备，支持自己商业产品采用的开源软件标准的传播，以及在开源社区当中的话语权和开源社区本身发展带来的软件行业的技术影响力和品牌效应。这跟大公司参与 Linux 开源社区的理由是一样的。

好，现在我们回答了为什么的问题，进一步的问题就是如何衡量评价一个开源社区，以及商业公司如何看待这些衡量和评价，建立起自己关注的指标视图。

在讨论具体的分析模型之前，关于指标衡量本身，有两个基本原则。

其之一，生产力是不可衡量的[4]。这也是前面传统 KPI 指标关注数字没有道理的原因之一。这个观点由 Martin Fowler 在 2003 年提出，旨在对抗当时关于软件开发效率的诸如代码行数和功能点一类的指标。结合当下开源社区的衡量指标，这跟 star 数和 feature 数量是多么的相似。

其之二，指标的目的是验证假设。运行社区的目标有相应的假设及背后的理论，指标或数字是辅助验证假设的手段，理论不应该依附于数据。这个原则跟上一个原则是相通的。Martin Fowler 在博文中强调的是生产力的高低，价值的交付，反对的是将代码行数或者标准化的功能点本身当做结果。

开源社区当中，行为就是结果。在衡量开源社区的时候，应该关注的是价值创造的旅程以及成员与社区的共同成长。

下面讨论两个可供参考的分析模型。

### ASF 成熟度模型

ASF 成熟度模型[5]是 Apache 软件基金会指导其项目发展的分析模型，一共分为七个方面。

- 代码。构建是否可复现，版本历史及代码来源是否清晰。
- 许可证和版权。遵循 ASF 的要求保持合规。
- 发布。可靠可信可复现的发布，必须包括软件源代码。
- 质量。符合软件工程的质量水平，重点关注安全问题和兼容性。
- 社区。信息的流畅交换，公平的参与体验，即时的反馈。
- 共识。明确共识的达成形式及相关成员名单，共识达成的过程有记录。
- 独立性。项目独立于任何组织或商业公司，contributor 仅代表个人。

上面分点的概述是我的转述，原模型还对不同的阶段做了分开定义。

值得注意的是，上面的七个方面共同开源社区评价与衡量的定性指标，其中针对某个小点可以展开定量指标。不是说代码和质量就是开发的工作而不是社区的工作，这样考虑就又掉进职能竖井的误区当中了。同时也要强调定量指标的意义是辅助验证定性指标以及最终关注目标的达成，数字数量本身不是目标。

对于开源社区来说，代码、发布和质量从价值创造本身提供了思路，关注这几个指标能够指导开源社区生产高质量软件的直接过程。其他四个指标则是保证社区成长的健壮性，以及社区成员持续成长的保证，不会因为信息差、共识霸凌，或者合规问题和“主导公司”的出现颠覆社区的组织。

对于商业公司来说，独立性和许可证和版权两个是客观存在的。代码、发布和质量关注到的是开源软件的水平，商业产品是基于开源软件搭建的，投资提高开源软件的水平即是提高商业产品服务在技术和体验绝对值上的水平。社区和共识指标的发展，有利于商业公司从跨组织协同参与的环境下，享受到作为产品服务基石的开源软件得到的开发效率的提升带来的红利，同时也有潜在的人才信息交换和技能培训的价值。

### The Orbit Model

The Orbit Model[6] 是近期异军突起的社区目标管理 SaaS 服务 orbit.love 建立的分析模型，核心论点是社区的引力模型取代市场的漏斗模型。

![](/content/two-hats-of-developers/3.webp)

引力模型的基础假设是，开源项目是引力中心，核心成员生产高质量软件产生技术吸引力和社交沟通吸引力。不同程度的参与者在各自受到吸引到达的领域里创造价值，提高参与水平接近核心（Love），或者扩大影响范围成为领域专家（Reach），进而与社区共同成长。

这不同于漏斗模型一个对象出现后唯一的目标就是沿着漏斗转化到购买行为发生，在引力模型中的个体可以在任何领域当中创造价值。而作为运行社区的维护者，不是关注个体的层层转换，而是观察整个引力圈也即生态圈当中不同层次的人遇到的问题和创造价值的方式，改善每个领域层次的参与体验。

对于商业公司来说，关注到自己及员工在引力模型当中的位置，以及其他潜在的合作伙伴和客户在引力模型当中的位置，能够为销售层面的漏斗模型提供更加丰富的输入。此外，公司员工作为社区成员在这个模型下的个人成长，也是公司能够通过提供这样一份全职工作带给员工的价值之一。开源社区先成功了，潜在的合作伙伴和客户就会达到传统漏斗模型所想象不到的量级，公司员工以及能为作为商业产品基础的开源软件开发的跨公司人才和社区一起成长，最终推动对开源社区有持续 contribution 和影响力的商业公司成功。

具体到量化数字上，这个模型会关注社区成员的多种活动指标，包括 star 的动作，注册登录浏览的动作，PR 和 issue 相关的动作，评论，交流，等等。同样的，这些数字本身不是目标，只是辅助区分不同参与水平和影响范围，从而使得维护者以及所有接触到这些资料的人能够更好的和社区成员协同，创造价值，共同成长。

## 基本原理

最后，关于为什么会提出 Two Hats of Developers 的观点，指标分析的正向与反向认识，简单提一点基本原理的出处。

除了两个模型本身，诸多相关博文，以及观察和参与某些开源社区的亲身体验以外，主要是书籍的系统讨论和分析。

- 《社区运营的艺术》[7]
- 《People Powered》[8]

这两本书出自社区运营专家 Jono Bacon 之手，从开源社区的每一个主题讨论了社区运营会遇到的问题，解决这些问题的方法以及背后的基本假设。前者主题丰富，行文有明显的记者背景痕迹。后者关注 how 也就是实践，可以看做是一个不那么定制化的社区定位、分析和成长计划。

实际上，上面讲衡量模型的时候我本来想将 People Powered 当中的几个分类法和阶段图的，但是其知识点比较零散，写起来长度就控制不住了。以后有机会再单独一个一个说。

- 《开放式组织》[9]
- 《企业的人性面》
- 《协同》[10]

《开放式组织》是以红帽公司为例讨论组织管理范式的著作，《企业的人性面》是八十年前奠定的开放式组织的理论基础，《协同》是中国学者结合当下环境，从企业本身的开放式组织模式，讨论到跨越组织边界的协同模式的论述。

商业公司与开源社区都是一种组织形式，开源社区天生的基础就是开放式组织的基础。按照前文商业公司与开源项目的关系，商业公司要想在这样的大环境下取得成功，其组织底架必须依赖开源社区，从而开放式组织的形式是能够达到最高生产力的形式。

然而，今天的企业管理仍然深陷《企业的人性面》当中定义的控制型 X 理论的泥潭当中。在探索和实践运行开源社区，结合开源项目与商业公司创造价值，建立新的标杆案例的路上，诸位先行者可以一同阅读和践行这些著作当中的论点和方法。从手段到形式，最终到模型和认知。愿我们一同创造出软件行业生产力大升级的下一个时代。

## References

1. 开源项目和商业公司之间的关系: https://github.com/flossway/flossway/discussions/2
2. 《企业的人性面》: https://book.douban.com/subject/27125968/
3. 《Why Contributors Stay and Grow》: https://www.bilibili.com/video/BV1Tg411K7KS/
4. 生产力是不可衡量的: https://martinfowler.com/bliki/CannotMeasureProductivity.html
5. ASF 成熟度模型: https://community.apache.org/apache-way/apache-project-maturity-model.html
6. The Orbit Model: https://orbitmodel.com/
7. 《社区运营的艺术》: https://book.douban.com/subject/26976995/
8. 《People Powered》: https://book.douban.com/subject/35531548/
9. 《开放式组织》: https://book.douban.com/subject/26894636
10. 《协同》: https://book.douban.com/subject/34834429/
