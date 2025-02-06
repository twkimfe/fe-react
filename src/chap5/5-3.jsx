import CheckBox from "../components/5-3-CheckBox.jsx";
import Select from "../components/5-3-Select.jsx";
import TextArea from "../components/5-3-TextArea.jsx";
import TextInput from "../components/5-3-TextInput.jsx";
import UncontrolledTextInput from "../components/5-3-UncontrolledTextInput.jsx";

function App() {
  return (
    <div className="App">
      <div>
        <TextInput />
      </div>
      <div>
        <TextArea />
      </div>
      <div>
        <Select />
      </div>
      <div>
        <CheckBox />
      </div>
      <div>
        <UncontrolledTextInput />
      </div>
    </div>
  );
}

export default App;
