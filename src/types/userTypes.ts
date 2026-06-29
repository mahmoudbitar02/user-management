export type Gender = "male" | "female" | "keine Angabe";

export interface UserForm {
  username: string;
  birthDate: string;
  email: string;
  postAddress: string;
  phone: string;
  website: string;
  gender: Gender;
}

export interface User extends UserForm {
  id: number;
}
