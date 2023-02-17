import { useRoutes } from "react-router-dom";
import AuthenticationRoutes from "./AuthenticationRoutes";

// routes
import MainRoutes from "./MainRoutes";

export default function AppRoutes() {
  return useRoutes([...MainRoutes, AuthenticationRoutes]);
}
