import type { InputFieldProps } from "../../types/types";
import "./InputField.scss";

function InputField({ inputId, label, inputType, inputName, handleChange, value, placeholder }: InputFieldProps) {
  return (
    <div className="input-field">
      <label htmlFor={inputId}>{label}</label>
      <input id={inputId} type={inputType} name={inputName} placeholder={placeholder} value={value} onChange={handleChange} />
    </div>
  );
}

export default InputField;
