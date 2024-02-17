import { useRoutes } from "react-router-dom";
import routeConfigs from "./routeConfigs";

const Router = () => {
  const routes = useRoutes(routeConfigs);
  return routes;
};

export default Router;
