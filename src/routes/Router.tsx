import { createBrowserRouter } from "react-router-dom";
import Roots from "../pages/Root/Roots";
import Users from "../pages/Users/Users";
import CreateUser from "../pages/Create/CreateUser";
import UpdateUser from "../pages/Update/UpdateUser";
import Index from "../pages/index/Index";

export const router = createBrowserRouter(
  [
    {
      path: "/",
      element: <Roots />,
      children: [
        { index: true, element: <Index /> },
        {
          path: "users",
          element: <Users />,
        },
        {
          path: "create",
          element: <CreateUser />,
        },
        {
          path: "/edit/:id",
          element: <UpdateUser />,
        },
      ],
    },
  ],

  {
    basename: "/user-management",
  },
);
