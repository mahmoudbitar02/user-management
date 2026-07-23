import "./Users.scss";
import { useUserContext } from "../../hooks/UserContext";
import { Link } from "react-router-dom";
import UserCard from "../../components/userCard/UserCard";

function Users() {
  const { users } = useUserContext();

  return (
    <div className="users">
      {users.map((user) => (
        <Link className="link" to={`/edit/${user.id}`} key={`userLink-${user.id}`}>
          <UserCard user={user} key={`usercard-${user.id}`} />
        </Link>
      ))}
    </div>
  );
}

export default Users;
