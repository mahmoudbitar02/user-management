import "./Users.scss";
import { useUserContext } from "../../hooks/UserContext";
import { Link } from "react-router-dom";
import UserCard from "../../components/userCard/UserCard";

function Users() {
  const { users } = useUserContext();

  return (
    <div className="users">
      {users.length === 0 && <div className="empty-users">
    <span className="empty-users__icon">👥</span>
    <h2>No Users Found</h2>
    <p>Please create your first user to get started.</p>
  </div>}
      {users.map((user) => (
        <Link className="link" to={`/edit/${user.id}`} key={`userLink-${user.id}`}>
          <UserCard user={user} key={`usercard-${user.id}`} />
        </Link>
      ))}
    </div>
  );
}

export default Users;
