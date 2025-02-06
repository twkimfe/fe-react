import ReactDOM from "react-dom";

const arr = ["No.1", "No.2", "No.3"];

const arr2 = [];
for (let i = 0; i < arr.length; i++) {
  arr2.push(<h4 key={i}>{arr[i]}</h4>);
  // <h4>No.1</h4>, <h4>No.2</h4>, <h4>No.3</h4>,
}

const element = (
  <div>
    <h1>배열로 넣기</h1>
    <ul>
      <li>{arr}</li>
      <li>{arr2}</li>
    </ul>

    <hr />

    <h1>Array.map</h1>
    <ul>
      <li>
        {arr.map((item, index) => {
          return <h4 key={`${item}-${index}`}>{item}</h4>;
        })}
      </li>
    </ul>
  </div>
);

ReactDOM.render(element, document.getElementById("root"));
