import React from "react";
import "../src/css/2-5.css";

const App = () => {
  const roundBoxStyle = {
    position: "absolute",
    top: 50,
    left: 50,
    width: "50%",
    height: "200px",
    padding: 20,
    background: "rgba(162,216,235,0.6)",
    // 속성은 'ㅇㅇㅇ-ㅇㅇㅇ' 대신 'camelCase'로 작성
    borderRadius: 50,
  };

  return (
    <div
      style={{
        position: "relative",
        width: 400,
        height: 1000,
        background: "#f1f1f1",
      }}
    >
      <div style={roundBoxStyle}>Hello1</div>
      <div style={{ ...roundBoxStyle, top: 350 }}>
        {/* // 4. classNmae으로 스타일링 (CSS-in-JS) */}
        <div className="highlight">Hello2</div>
      </div>

      <div style={{ ...roundBoxStyle, top: 650 }}>
        {/* // 5. 조건적 스타일 */}
        <div className={1 + 1 === 2 ? "highlight" : ""}>
          {/* 위 삼항 연산자는 이 코드와 동일
          = 1 + 1 === 2 && 'highlight'
          */}
          Hello3
        </div>
      </div>
    </div>
  );
};

export default App;
