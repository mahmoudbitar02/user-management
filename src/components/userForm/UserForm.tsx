import React, { useState } from "react";
import InputField from "../inputField/InputField";
import { InitialUser, type User } from "../../types/types";
import SelectField from "../selectField/SelectField";
import "./UserForm.scss";

function UserForm() {
  const [value, setValue] = useState<User>(InitialUser);

  function handleInputChange(event: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) {
    const { name, value } = event.target;
    setValue((prevInput) => ({ ...prevInput, [name]: value }));
    console.log(value);
  }
  return (
    <>
      <div className="user-form">
        <h1 className="user-form__title">Create User</h1>

        <div className="user-form__image">
          {value.image && <img src={value.image} alt="Preview" />}

          <label>
            Upload Image
            <input
              type="file"
              accept="image/*"
              onChange={() => {
                console.log("image");
              }}
            />
          </label>
        </div>

        <div className="user-form__grid">
          <InputField
            placeholder="Enter name"
            inputId="name"
            label="Name"
            inputType="text"
            inputName="name"
            handleChange={handleInputChange}
            value={value.name}
          />

          <InputField
            placeholder="Enter email"
            inputId="email"
            label="Email"
            inputType="email"
            inputName="email"
            handleChange={handleInputChange}
            value={value.email}
          />

          <SelectField
            inputId="gender"
            label="Gender"
            inputName="gender"
            inputType="text"
            handleChange={handleInputChange}
            value={value.gender}
          ></SelectField>

          <InputField
            placeholder="Birthday"
            inputId="dob"
            label="Geburtsdatum"
            inputType="date"
            inputName="dob"
            handleChange={handleInputChange}
            value={value.dob}
          />

          <InputField
            placeholder="Phone"
            inputId="phone"
            label="Telefon"
            inputType="tel"
            inputName="phone"
            handleChange={handleInputChange}
            value={value.phone}
          />

          <InputField
            placeholder="Address"
            inputId="address"
            label="Adresse"
            inputType="text"
            inputName="address"
            handleChange={handleInputChange}
            value={value.address}
          />

          <InputField
            placeholder="Website"
            inputId="web"
            label="Website"
            inputType="url"
            inputName="web"
            handleChange={handleInputChange}
            value={value.web}
          />
        </div>

        <button className="user-form__button">Create User</button>
      </div>
    </>
  );
}

export default UserForm;
