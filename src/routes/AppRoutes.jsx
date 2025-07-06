import { useRoutes } from "react-router-dom";
import appRoutes from "./routes";

const AppRoutes = () => {
  const routes = useRoutes(appRoutes);
  return routes;
};
export default AppRoutes;
