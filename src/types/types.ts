export type Gender = "" | "Männlich" | "Weiblich" | "Keine Eingaben";

export type User = {
  id: string;
  name: string;
  email: string;
  gender: Gender;
  dob: string;
  phone: string;
  address: string;
  web: string;
  image: string;
};

export type UserForm = Omit<User, "id">;

export type UserAction =
  | { type: "SET_USER"; payload: User[] }
  | { type: "ADD_USER"; payload: User }
  | { type: "UPDATE_USER"; payload: User }
  | { type: "DELETE_USER"; payload: string };
