export type Gender = "male" | "female" | "";

export interface UserForm {
  username: string;
  birthday: string;
  email: string;
  postAddress: string;
  phone: string;
  website: string;
  gender: Gender;
}

export interface User extends UserForm {
  id: number;
}
