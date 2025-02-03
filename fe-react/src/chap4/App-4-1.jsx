import { useState } from "react";
import ClassComponent from "../components/4-2-Class.jsx";
import FunctionalComponent from "../components/4-2-Functional.jsx";

function App() {
  const [toggle, setToggle] = useState(true);

  return (
    <>
      {toggle && <ClassComponent />}
      {toggle || <FunctionalComponent />}

      <hr />

      <button onClick={() => setToggle((t) => !t)}>toggle</button>
    </>
  );
}

export default App;
