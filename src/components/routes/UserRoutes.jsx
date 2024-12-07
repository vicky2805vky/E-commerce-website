import useStoreData from "hooks/useStoreData";
import { Route, Routes } from "react-router-dom";
import FallBackRoute from "./FallBackRoute";
import DeleteAccountForm from "features/auth/components/profile/DeleteAccountForm";
import PageTransition from "components/ui/transitions/PageTransition";

const UserRoutes = () => {
  const { isUserLoggedIn } = useStoreData();

  if (!isUserLoggedIn) return <FallBackRoute />;

  return (
    <Routes>
      <Route
        path="/delete"
        element={
          <PageTransition>
            <DeleteAccountForm />
          </PageTransition>
        }
      />
      <Route path="*" element={<FallBackRoute />} />
    </Routes>
  );
};

export default UserRoutes;
