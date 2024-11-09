import { Route, Routes } from "react-router-dom";
import RedirectPage from "features/redirect/RedirectPage";

const FallBackRoute = () => {
  return (
    <Routes>
      <Route
        path="*"
        element={<RedirectPage redirectionType={"pageNotFound"} />}
      />
    </Routes>
  );
};

export default FallBackRoute;
