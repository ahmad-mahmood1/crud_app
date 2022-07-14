import { BrowserRouter, Navigate, Route ,Routes} from "react-router-dom";
import { CLIENTS_PATH, CLIENTS_PATH_NEW } from "../constants/appPaths";
import { Clients } from "../Pages/Clients";

const AppRoutes = () => {
  return (
      <Routes>
        <Route exact path="/" element={<Navigate to={CLIENTS_PATH} />}/>
        <Route
          name={"clients"}
          path={CLIENTS_PATH}
          element={<Clients />}
        />
        <Route
          name={"clients_new"}
          path={CLIENTS_PATH_NEW}
          element={<p>clients form</p>}
        />
      </Routes>
  );
};

export default AppRoutes;
