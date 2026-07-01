import { useState } from "react";
import type { UserForm } from "../../types/userTypes";
import "./InputField.scss";

const initialUserForm: UserForm = {
  username: "",
  birthday: "",
  gender: "",
  email: "",
  postAddress: "",
  phone: "",
  website: "",
};

function InputField() {
  const [user, setUser] = useState(initialUserForm);

  function handelSubmit(event: React.FormEvent) {
    event.preventDefault();
    console.log(user);
    setUser(initialUserForm);
  }

  function handleChange(event: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) {
    const { name, value } = event.target;
    setUser((prev) => ({ ...prev, [name]: value }));
  }

  return (
    <form onSubmit={handelSubmit} className="inputs">
      <div className="items">
        <label className="items__label" htmlFor="username">
          Username:
        </label>
        <input required className="items__input" type="text" id="username" name="username" value={user.username} onChange={handleChange} />
      </div>

      <div className="items">
        <label className="items__label" htmlFor="birthday">
          Birthday
        </label>
        <input required className="items__input" name="birthday" value={user.birthday} onChange={handleChange} type="date" id="birthday" />
      </div>
      <div className="items">
        <select name="gender" id="gender" value={user.gender} onChange={handleChange}>
          <option value="">Gender</option>
          <option value="male">Male</option>
          <option value="female">Female</option>
        </select>
      </div>

      <div className="items">
        <label className="items__label" htmlFor="email">
          Email
        </label>
        <input required className="items__input" name="email" value={user.email} onChange={handleChange} type="email" id="email" />
      </div>

      <div className="items">
        <label className="items__label" htmlFor="postaddress">
          Post Address
        </label>
        <input required className="items__input" type="text" id="postaddress" name="postAddress" value={user.postAddress} onChange={handleChange} />
      </div>

      <div className="items">
        <label className="items__label" htmlFor="phone">
          Phone
        </label>
        <input required className="items__input" type="text" id="phone" name="phone" value={user.phone} onChange={handleChange} />
      </div>

      <div className="items">
        <label className="items__label" htmlFor="website">
          Website
        </label>
        <input
          required
          className="items__input"
          name="website"
          onChange={handleChange}
          value={user.website}
          type="url"
          id="website"
          placeholder="https://example.com"
        />
      </div>

      <button className="inputs__submit">Submit</button>
    </form>
  );
}

export default InputField;
