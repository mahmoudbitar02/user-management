import type { InputFieldProps } from "../../types/types";
import "../inputField/InputField.scss";
function SelectField({ inputId, label, inputName, handleChange, value }: InputFieldProps) {
  return (
    <div className="input-field">
      <label htmlFor={inputId}>{label}</label>

      <select className="input-control" id={inputId} name={inputName} onChange={handleChange} value={value}>
        <option value="">Select an option</option>
        <option value="male">Male</option>
        <option value="female">Female</option>
      </select>
    </div>
  );
}

export default SelectField;
