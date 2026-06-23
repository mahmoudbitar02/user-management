import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./App.css";
import Users from "./pages/Users";
import Root from "./routes/Root";
import CreateUser from "./pages/CreateUser";
import EditUser from "./pages/EditUser";
function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Root />,
      children: [
        {
          path: "overview",
          element: <Users />,
        },
        {
          path: "create",
          element: <CreateUser />,
        },
        {
          path: "edit/:userId",
          element: <EditUser />,
        },
      ],
    },
  ]);
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
