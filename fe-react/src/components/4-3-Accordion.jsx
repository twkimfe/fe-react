import { useState } from "react";

function Accordion({ title, content }) {
  const [isOpened, setIsOpened] = useState(false);

  return (
    <div>
      <div
        style={{
          background: "#666",
          color: "white",
          fontWeight: "bold",
          padding: "10px",
          display: "flex",
          justifyContent: "space-between",
          userSelect: "none",
        }}
        onClick={() => {
          setIsOpened((state) => !state);
        }}
      >
        <div>{title}</div>
        <div>{isOpened ? "-" : "+"}</div>
      </div>

      {isOpened && (
        <div
          style={{
            border: "1px solid #999",
            padding: 20,
            userSelect: "none",
          }}
        >
          {content}
        </div>
      )}
    </div>
  );
}

export default Accordion;
