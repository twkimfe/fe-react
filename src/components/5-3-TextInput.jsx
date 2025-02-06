import { useState } from "react";

function TextInput() {
  const [value, setValue] = useState("");

  console.log("[TextInput] render", value);

  return (
    <input
      type="text"
      value={value}
      onChange={(e) => {
        setValue(e.target.value);
      }}
    />
  );
}

export default TextInput;
