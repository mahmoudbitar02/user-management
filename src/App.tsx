import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Roots from "./pages/Root/Roots";
import Users from "./pages/Users/Users";
import CreateUser from "./pages/Create/CreateUser";
import "./App.css";

function App() {
  const router = createBrowserRouter([
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
  return (
    <>
      <RouterProvider router={router}></RouterProvider>
    </>
  );
}

export default App;
