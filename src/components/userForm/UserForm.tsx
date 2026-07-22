import React, { useState } from "react";
import InputField from "../inputField/InputField";
import { InitialUser, userScheme, type User, type UserFormProps } from "../../types/types";
import SelectField from "../selectField/SelectField";

import "./UserForm.scss";

function UserForm({ onSubmit }: UserFormProps) {
  const [value, setValue] = useState<User>(InitialUser);
  const [errors, setErrors] = useState<Record<string, string>>({});

  function handleInputChange(event: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) {
    const { name, value } = event.target;

    setValue((prev) => ({
      ...prev,
      [name]: value,
    }));

    const fieldSchema = userScheme.shape[name as keyof typeof userScheme.shape];
    const result = fieldSchema.safeParse(value);

    setErrors((prev) => {
      if (!result.success) {
        return { ...prev, [name]: result.error.issues[0].message };
      }
      const newErrors = { ...prev };
      delete newErrors[name];
      return newErrors;
    });
  }

  function submitData(event: React.FormEvent) {
    event.preventDefault();
    const result = userScheme.safeParse(value);

    if (!result.success) {
      const fieldErrors = result.error.flatten().fieldErrors;
      const formattedError: Record<string, string> = {};

      Object.entries(fieldErrors).forEach(([field, message]) => {
        if (message && message.length > 0) {
          formattedError[field] = message[0];
        }
      });

      setErrors(formattedError);
      return;
    }
    setErrors({});

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

  function handleImage(e: React.ChangeEvent<HTMLInputElement>) {
    const file = e.target.files?.[0];

    if (!file) return;
    const imageUrl = URL.createObjectURL(file);

    const reader = new FileReader();

    reader.onloadend = () => {
      setValue((prev) => ({
        ...prev,
        image: imageUrl,
      }));
    };

    reader.readAsDataURL(file);
  }
  return (
    <form className="user-form" onSubmit={submitData}>
      <h1 className="user-form__title">Create User</h1>

      <div className="user-form__image">
        {value.image && <img src={value.image} alt="Preview" />}

        <label>
          Upload Image
          <input type="file" accept="image/*" onChange={handleImage} />
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
          {errors.name && <span className="error-message">{errors.name}</span>}
        </div>

        <div>
          <InputField
            placeholder="Enter email"
            inputId="email"
            label="Email"
            inputType="email"
            inputName="email"
            handleChange={handleInputChange}
            value={value.email}
          />
          {errors.email && <span className="error-message">{errors.email}</span>}
        </div>

        <div>
          <SelectField
            inputId="gender"
            label="Gender"
            inputName="gender"
            inputType="text"
            handleChange={handleInputChange}
            value={value.gender}
          ></SelectField>
          {errors.gender && <span className="error-message">{errors.gender}</span>}
        </div>

        <div>
          <InputField
            placeholder="Birthday"
            inputId="dob"
            label="Geburtsdatum"
            inputType="date"
            inputName="dob"
            handleChange={handleInputChange}
            value={value.dob}
          />
          {errors.dob && <span className="error-message">{errors.dob}</span>}
        </div>

        <div>
          <InputField
            placeholder="Phone"
            inputId="phone"
            label="Telefon"
            inputType="tel"
            inputName="phone"
            handleChange={handleInputChange}
            value={value.phone}
          />
          {errors.phone && <span className="error-message">{errors.phone}</span>}
        </div>

        <div>
          <InputField
            placeholder="Address"
            inputId="address"
            label="Adresse"
            inputType="text"
            inputName="address"
            handleChange={handleInputChange}
            value={value.address}
          />
          {errors.address && <span className="error-message">{errors.address}</span>}
        </div>

        <div>
          <InputField
            placeholder="Website"
            inputId="web"
            label="Website"
            inputType="url"
            inputName="web"
            handleChange={handleInputChange}
            value={value.web}
          />
          {errors.web && <span className="error-message">{errors.web}</span>}
        </div>
      </div>

      <button className="user-form__button" type="submit">
        Create User
      </button>
    </form>
  );
}

export default UserForm;
