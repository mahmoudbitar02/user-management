import { Link, Outlet } from "react-router-dom";
import managementImage from "../../assets/images/user.png";
import "./Roots.scss";
function Roots() {
  return (
    <div className="root-body">
      <aside className="sidebar">
        <Link to={"/"}>
          <img className="sidebar__image" src={managementImage} alt="User Management Image" />
        </Link>
        <div className="sidebar__items">
          <Link to="users">
            <button className="sidebar__item">All Users</button>
          </Link>
          <Link to={"create"}>
            <button className="sidebar__item">Create User</button>
          </Link>
        </div>
      </aside>
      <main className="main">
        <Outlet />
      </main>
    </div>
  );
}

export default Roots;
