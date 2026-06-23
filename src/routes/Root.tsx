import { Link, Outlet } from "react-router-dom";

function Root() {
  return (
    <div>
      <div>
        <Link to={"overview"}>
          <button>Übersicht</button>
        </Link>
        <Link to={"create"}>
          <button>Erstellen</button>
        </Link>
      </div>
      <div>
        <Outlet />
      </div>
    </div>
  );
}

export default Root;
