import { createBrowserRouter } from "react-router-dom";
import Roots from "../pages/Root/Roots";
import Users from "../pages/Users/Users";
import CreateUser from "../pages/Create/CreateUser";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Roots />,
    children: [
      {
        path: "/users",
        element: <Users />,
      },
      {
        path: "/create",
        element: <CreateUser />,
      },
    ],
  },
]);
