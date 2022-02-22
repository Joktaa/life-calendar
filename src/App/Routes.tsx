import { useRoutes } from "react-router-dom";
import Login from "../ui/Login";
import Today from "../ui/Today";
import Weeks from "../ui/Weeks";
import Years from "../ui/Years";

export default function Routes() {
  const routes = useRoutes([
    {
      path: "/",
      element: <Login />,
    },
    {
      path: "/years",
      element: <Years />,
    },
    {
      path: "/weeks",
      element: <Weeks />,
    },
    {
      path: "/today",
      element: <Today />,
    },
  ]);
  return routes;
}
