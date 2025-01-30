import ReactDOM from "react-dom";

const arr = [1, 2, 3];
const text = "";

const element = (
  <div>
    <h1>삼항연산자</h1>
    <ul>
      <li>{1 + 1 === 2 ? "True" : "False"}</li>
    </ul>

    <h1>AND 연산자</h1>
    <ul>
      <li>{1 + 1 !== 2 && "AND 1"}</li>
      <li>{!!arr.length && "AND 2"}</li>
    </ul>

    <h1>OR 연산자</h1>
    <ul>
      <li>{1 + 1 !== 2 || "OR 1"}</li>
      <li>{text || "OR 2"}</li>
    </ul>

    <h1>if문 (즉시실행함수)</h1>
    <ul>
      <li>
        {(() => {
          if (1 + 1 === 2) return "IF";
          else return "ELSE";
        })()}
      </li>
      <li>
        {(() => {
          const data = "즉시실행함수";
          // 모든 연산 추가 가능
          return data;
        })()}
      </li>
    </ul>
  </div>
);

ReactDOM.render(element, document.getElementById("root"));
