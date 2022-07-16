import {  Navigate, Route, Routes } from "react-router-dom";
import {
  CLIENTS_PATH,
  CLIENTS_PATH_NEW,
  CLIENT_PATH_EDIT,
} from "../constants/appPaths";
import Clients from "../Pages/Clients";
import SaveClient from "../Pages/Clients/SaveClient";

const AppRoutes = () => {
  return (
    <Routes>
      <Route exact path="/" element={<Navigate to={CLIENTS_PATH} />} />
      <Route name={"clients"} path={CLIENTS_PATH} element={<Clients />} />
      <Route
        name={"clients_new"}
        path={CLIENTS_PATH_NEW}
        element={<SaveClient />}
      />
      <Route
        name={"clients_edit"}
        path={CLIENT_PATH_EDIT}
        element={<SaveClient />}
      />
    </Routes>
  );
};

export default AppRoutes;
