import React, { useState } from "react";
import InputField from "../inputField/InputField";
import { InitialUser, userScheme, type User, type UserFormProps } from "../../types/types";
import SelectField from "../selectField/SelectField";

import "./UserForm.scss";

function UserForm({ onSubmit }: UserFormProps) {
  const [value, setValue] = useState<User>(InitialUser);

  function handleInputChange(event: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) {
    const { name, value } = event.target;

    setValue((prev) => ({
      ...prev,
      [name]: value,
    }));
  }

  function submitData(event: React.FormEvent) {
    event.preventDefault();
    const result = userScheme.safeParse(value);

    console.log("it works", result);
    console.log("aktueller gender", value.gender);

    const submittedUser: User = {
      id: String(Math.random()),
      name: value.name,
      email: value.email,
      gender: value.gender,
      phone: value.phone,
      web: value.web,
      image: value.image,
      address: value.address,
      dob: value.dob,
    };
    console.log(submittedUser);
    onSubmit(submittedUser);
    setValue(InitialUser);
    alert("created User");
  }
  return (
    <form className="user-form" onSubmit={submitData}>
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
        <div>
          <InputField
            placeholder="Enter name"
            inputId="name"
            label="Name"
            inputType="text"
            inputName="name"
            handleChange={handleInputChange}
            value={value.name}
          />
        </div>

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

      <button className="user-form__button" type="submit">
        Create User
      </button>
    </form>
  );
}

export default UserForm;
