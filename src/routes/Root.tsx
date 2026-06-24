import { Link, Outlet } from "react-router-dom";
import "./Root.scss";
import image from "../assets/images/devkarriere.png";

function Root() {
  return (
    <div className="root-body">
      <div className="sidebar">
        <img className="sidebar__image" src={image} alt="devKarriere image" />
        <div className="sidebar__line"></div>
        <div className="sidebar__items">
          <Link to={"overview"}>
            <button className="sidebar__item">Übersicht</button>
          </Link>
          <Link to={"create"}>
            <button className="sidebar__item">Erstellen</button>
          </Link>
        </div>
      </div>
      <div className="main">
        <Outlet />
      </div>
    </div>
  );
}

export default Root;
