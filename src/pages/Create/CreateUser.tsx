import UserForm from "../../components/userForm/UserForm";
import type { User } from "../../types/types";
import { useUserContext } from "../../hooks/UserContext";
import { useNavigate } from "react-router-dom";

function CreateUser() {
  const { userDispatch } = useUserContext();
  const navigate = useNavigate();

  function handleSubmitNewUser(user: User) {
    userDispatch({ type: "ADD_USER", payload: user });
    console.log(user);
    navigate(-1);
  }

  return <UserForm onSubmit={handleSubmitNewUser} user={undefined} />;
}

export default CreateUser;
