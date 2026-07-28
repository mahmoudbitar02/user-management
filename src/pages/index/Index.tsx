import { useUserContext } from "../../hooks/UserContext";
import "./Index.scss";
import { faUsers, faCircleCheck, faClock } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function Index() {
  const { users } = useUserContext();

  const totalUsers = users.length;
  const maleUsers = users.filter((user) => user.gender === "Männlich").length;
  const femaleUsers = users.filter((user) => user.gender === "Weiblich").length;
  const otherUser = users.filter((user) => user.gender === "Keine Eingaben").length;
  const latestUser = users.at(-1);

  return (
    <section className="dashboard">
      <div className="dashboard__header">
        <h1>User Management Dashboard</h1>
        <p>Manage your users quickly and efficiently.</p>
      </div>

      <div className="dashboard__cards">
        <div className="card">
          <h3>Total Users</h3>
          <span>{totalUsers}</span>
        </div>

        <div className="card">
          <h3>Male Users</h3>
          <span>{maleUsers}</span>
        </div>

        <div className="card">
          <h3>Female Users</h3>
          <span>{femaleUsers}</span>
        </div>

        <div className="card">
          <h3>Other Users</h3>
          <span>{otherUser}</span>
        </div>

        <div className="card">
          <h3>Latest User</h3>
          <span>{latestUser?.name || "No users yet"}</span>
        </div>
      </div>

      <div className="dashboard__welcome">
        <h2>
          Welcome <FontAwesomeIcon icon={faUsers} />
        </h2>

        <p>Use the navigation on the left to create new users or manage existing ones.</p>

        <ul>
          <li>
            <FontAwesomeIcon icon={faCircleCheck} /> Create new users
          </li>
          <li>
            <FontAwesomeIcon icon={faCircleCheck} /> Edit user information
          </li>
          <li>
            <FontAwesomeIcon icon={faCircleCheck} /> Delete users
          </li>
          <li>
            <FontAwesomeIcon icon={faClock} /> Search users (coming soon)
          </li>
          <li>
            <FontAwesomeIcon icon={faCircleCheck} /> Upload profile pictures
          </li>
        </ul>
      </div>
    </section>
  );
}

export default Index;
