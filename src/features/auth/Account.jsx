import AuthForm from "./components/authForm/AuthForm";
import Profile from "./components/profile/Profile";

import useStoreData from "hooks/useStoreData";

const Account = () => {
  const { isUserLoggedIn } = useStoreData();
  return <>{isUserLoggedIn ? <Profile /> : <AuthForm />}</>;
};

export default Account;
