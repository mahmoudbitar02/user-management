import UserForm from "../../components/userForm/UserForm";
import type { User } from "../../types/types";
import { useUserContext } from "../../hooks/UserContext";

function CreateUser() {
  const { userDispatch } = useUserContext();

  function handleSubmitNewUser(user: User) {
    userDispatch({ type: "ADD_USER", payload: user });
    console.log(user);
  }

  return <UserForm onSubmit={handleSubmitNewUser} />;
}

export default CreateUser;
