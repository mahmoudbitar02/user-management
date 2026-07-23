import { useEffect, useState } from "react";
import UserForm from "../../components/userForm/UserForm";
import type { User } from "../../types/types";
import { useUserContext } from "../../hooks/UserContext";
import { useNavigate, useParams } from "react-router-dom";

function UpdateUser() {
  const [editUser, setEditUser] = useState<User | undefined>();

  const navigate = useNavigate();

  const { users, userDispatch } = useUserContext();
  const { id } = useParams();

  useEffect(() => {
    const user = users.find((user) => user.id === id);
    setEditUser(user);
  }, [users, id]);

  function handleUpdateUser(user: User) {
    userDispatch({ type: "UPDATE_USER", payload: user });
    navigate(-1);
  }
  return <UserForm onSubmit={handleUpdateUser} user={editUser} />;
}

export default UpdateUser;
