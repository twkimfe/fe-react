import { useState } from "react";
import "../css/5-4.css";
import TextInput from "../components/5-4-TextInput";
import Select from "../components/5-4-Select";

const countryOptions = [
  "국가를 선택해주세요",
  "Korea",
  "China",
  "Japan",
  "Russia",
  "USA",
];

function App() {
  const [formValue, setFormValue] = useState({
    name: "",
    country: "",
    address: "",
  });
  console.log("[App] formValue", formValue);

  return (
    <div className="App">
      <div className="form">
        <div className="form-item">
          <h1>
            1. 이름을 입력하세요.
            <span className="required">*</span>
          </h1>
          <TextInput
            value={formValue.name}
            setValue={(value) => {
              setFormValue((state) => ({
                ...state,
                name: value,
              }));
            }}
          />
        </div>
        <div className="form-item">
          <h1>
            2. 거주지를 선택하세요.
            <span className="required">*</span>
          </h1>
          <Select
            value={formValue.country}
            setValue={(value) => {
              setFormValue((state) => ({
                ...state,
                country: value,
              }));
            }}
            options={countryOptions}
          />
        </div>
        {formValue.country === "Korea" && (
          <div className="form-item">
            <h1>2-1. 한국 어디에 사시나요?</h1>
            <TextInput
              value={formValue.address}
              setValue={(value) => {
                setFormValue((state) => ({
                  ...state,
                  name: value,
                }));
              }}
            />
          </div>
        )}

        <div className="button-group">
          <button
            onClick={() => {
              alert("저장되었습니다.");
              setFormValue({
                name: "",
                country: "",
                address: "",
              });
            }}
            disabled={!formValue.name || !formValue.country}
          >
            저장
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;
