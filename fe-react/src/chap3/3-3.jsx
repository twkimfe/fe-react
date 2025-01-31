import { useState } from "react";

export default function App() {
  const [value, setValue] = useState(0);

  return (
    <div>
      <h1>value: {value}</h1>
      <button
        onClick={() => {
          console.log("Increase value1", value);
          setValue((prevValue) => {
            console.log("업데이트되는 값", prevValue + 1); // 1
            return prevValue + 1;
          });
        }}
      >
        Increase value
      </button>
      <button
        onClick={() => {
          console.log("Decrease value1", value);
          setValue(value - 1);
          console.log("Decrease value2", value);
        }}
      >
        Decrease value
      </button>
      <button
        onClick={() => {
          setValue((prevValue) => {
            console.log(
              "Current value",
              prevValue,
              ", and value already reset to 0"
            );
            return 0;
          });
        }}
      >
        Reset value
      </button>
    </div>
  );
}
