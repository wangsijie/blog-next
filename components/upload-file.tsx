import OSS from "ali-oss";
import axios from "axios";
import { ChangeEventHandler, useState } from "react";
import CopyToClipboard from "react-copy-to-clipboard";
import Random from "readableuuid";

interface Props {
  ak: string;
  sk: string;
  bucket: string;
  endpoint: string;
  prefix?: string;
}

const UploadFile = ({ ak, sk, bucket, endpoint, prefix }: Props) => {
  const [file, setFile] = useState<File>();
  const [loading, setLoading] = useState(false);
  const [progress, setProgress] = useState(0);
  const [url, setUrl] = useState<string>();

  const handleFileChange: ChangeEventHandler<HTMLInputElement> = (e) => {
    if (!e.target.files || !e.target.files[0] || !e.target.value) {
      return;
    }

    setFile(e.target.files[0]);
  };

  const handleUpload = async () => {
    if (!file) {
      throw new Error("file is empty");
    }
    setLoading(true);
    const client = new OSS({
      accessKeyId: ak,
      accessKeySecret: sk,
      bucket,
      endpoint,
      secure: true,
    });
    const result = await client.multipartUpload(
      `${prefix}${Random()}/${file.name}`,
      file,
      {
        progress(p) {
          setProgress(Math.floor(p * 100));
        },
      }
    );
    const url = `https://${result.bucket}.${endpoint}/${result.name}`;
    setUrl(url);
    setLoading(false);
    setProgress(0);
    axios.post("/api/notify", { text: url });
  };

  return (
    <div>
      <input type="file" onChange={handleFileChange} disabled={loading} />
      <button onClick={handleUpload} disabled={!file || loading}>
        {loading ? `${progress}%` : "上传"}
      </button>
      <div style={{ marginTop: "10px" }}>
        {url && (
          <CopyToClipboard text={encodeURI(url)}>
            <button>{url}</button>
          </CopyToClipboard>
        )}
      </div>
    </div>
  );
};

export default UploadFile;
