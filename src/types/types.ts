import { z } from "zod";
export type Gender = "Männlich" | "Weiblich" | "Keine Eingaben";

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

export type InputFieldProps = {
  inputId: string;
  label: string;
  inputType: string;
  inputName: string;
  handleChange: (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => void;
  value: string;
  placeholder?: string;
};

export const InitialUser: User = {
  id: "",
  name: "",
  email: "",
  gender: "Keine Eingaben",
  dob: "",
  phone: "",
  address: "",
  web: "",
  image: "",
};

export type UserFormProps = {
  onSubmit: (user: User) => void;
};

export const genderSchema = z.enum(["Männlich", "Weiblich", "Keine Eingaben"], {
  message: "Bitte wähle eine Option aus",
});

export const userScheme = z.object({
  name: z.string().min(2, "Der Name muss mindestens 2 zeichen lang sein"),
  email: z.string().email("Ungültige E-Mailaddresse"),
  gender: genderSchema,
  dob: z.string().min(1, "Geburtsdatum ist erforderlich"),
  web: z.string().url("Ungültige Website-URL"),
  image: z.string().optional(),
  address: z.string().min(3, "Addresse ist erforderlich"),
  phone: z
    .string()
    .min(6, "Telefonnummer zu kurz")
    .regex(/^[0-9+\s/-]+$/, "Ungültige Telefonnummer"),
});
