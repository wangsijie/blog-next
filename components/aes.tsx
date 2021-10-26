import { useState, useEffect, ChangeEvent } from "react";
import axios from "axios";

export default function Aes() {
  const [content, setContent] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [result, setResult] = useState<string>("");
  const [loading, setLoading] = useState(false);

  const handleContentChange = (event: ChangeEvent<HTMLTextAreaElement>) => {
    setContent(event.target.value);
  };
  const handlePasswordChange = (event: ChangeEvent<HTMLInputElement>) => {
    setPassword(event.target.value);
  };
  const handleEncrypt = async () => {
    setLoading(true);
    const {
      data: { encrypted },
    } = await axios.post<{ encrypted: string }>("/api/aes", {
      content,
      password,
      type: "encrypt",
    });
    setResult(encrypted);
    setLoading(false);
  };
  const handleDecrypt = async () => {
    setLoading(true);
    const {
      data: { decrypted },
    } = await axios.post<{ decrypted: string }>("/api/aes", {
      content,
      password,
      type: "decrypt",
    });
    setResult(decrypted);
    setLoading(false);
  };

  return (
    <div>
      <div style={{ marginBottom: '6px' }}>
        <input
          type="password"
          placeholder="password"
          value={password}
          onChange={handlePasswordChange}
        />
      </div>
      <textarea
        value={content}
        onChange={handleContentChange}
        rows={5}
        style={{ width: "500px", display: "block", marginBottom: "8px" }}
      />
      <button onClick={handleEncrypt} disabled={loading || !content || !password}>
        encrypt
      </button>
      {' '}
      <button onClick={handleDecrypt} disabled={loading || !content || !password}>
        decrypt
      </button>
      <pre>{result}</pre>
    </div>
  );
}
