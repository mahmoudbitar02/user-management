import { createContext, useContext } from "react";
import type { User, UserAction } from "../types/types";

type UserContextType = {
  users: User[];
  userDispatch: React.Dispatch<UserAction>;
};

export const UserContext = createContext<UserContextType | undefined>(undefined);

export function useUserContext() {
  const context = useContext(UserContext);
  if (!context) throw new Error("kein Context");
  return context;
}
