import { lazy } from "react";
import PATHS from "./PATHS";
import { Loadable } from "components/render";

export const Todos = Loadable(lazy(() => import("pages/Todos")));
export const CreateTask = Loadable(lazy(() => import("pages/CreateTask")));
export const EditTask = Loadable(lazy(() => import("pages/EditTask")));

export const todos = {
  key: "todos",
  path: PATHS.root,
  element: <Todos />,
};
export const createTask = {
  key: "createTask",
  path: PATHS.createTask,
  element: <CreateTask />,
};
export const editTask = {
  key: "editTask",
  path: PATHS.editTask,
  element: <EditTask />,
};
