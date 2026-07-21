import { useEffect, useReducer, type ReactNode } from "react";
import { UserReducer } from "./UserReducer";
import { UserContext } from "./UserContext";

export function UserProvider({ children }: { children: ReactNode }) {
  function getUsersFromLocalStorage() {
    const storedUsers = localStorage.getItem("users");
    return storedUsers ? JSON.parse(storedUsers) : [];
  }
  const [users, userDispatch] = useReducer(UserReducer, [], getUsersFromLocalStorage);

  useEffect(() => {
    localStorage.setItem("users", JSON.stringify(users));
  }, [users]);

  return <UserContext.Provider value={{ users, userDispatch }}>{children}</UserContext.Provider>;
}
