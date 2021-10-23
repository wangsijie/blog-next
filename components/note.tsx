import { useState, useEffect, ChangeEvent } from "react";
import axios from "axios";

export default function Note() {
  const [value, setValue] = useState<string>('');
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    axios.get<string>("/api/note").then((res) => setValue(res.data));
  }, []);
  const handleChange = (event: ChangeEvent<HTMLTextAreaElement>) => {
    setValue(event.target.value);
  };
  const handleSave = async () => {
    setLoading(true);
    await axios.post("/api/note", { content: value });
    setLoading(false);
  };
  if (value === null) {
    return <div></div>;
  }
  return (
    <div>
      <textarea
        value={value}
        onChange={handleChange}
        rows={5}
        style={{ width: "500px", display: "block", marginBottom: "8px" }}
      />
      <button onClick={handleSave} disabled={loading}>save</button>
    </div>
  );
}
