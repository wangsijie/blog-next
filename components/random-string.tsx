import Random from "readableuuid";
import { v4 as UUID } from "uuid";
import { useMemo } from "react";
import { CopyToClipboard } from "react-copy-to-clipboard";

export default function RandomString() {
  const str = useMemo(() => Random(18), []);
  const str2 = useMemo(() => Random(), []);
  const str3 = useMemo(() => Random(40), []);
  const uuid = useMemo(() => UUID(), []);
  return (
    <div>
      <p>
        <CopyToClipboard text={str}>
          <button>{str}</button>
        </CopyToClipboard>
      </p>
      <p>
        <CopyToClipboard text={str2}>
          <button>{str2}</button>
        </CopyToClipboard>
      </p>
      <p>
        <CopyToClipboard text={str3}>
          <button>{str3}</button>
        </CopyToClipboard>
      </p>
      <p>
        <CopyToClipboard text={uuid}>
          <button>{uuid}</button>
        </CopyToClipboard>
      </p>
    </div>
  );
}
