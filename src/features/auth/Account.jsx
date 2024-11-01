import Profile from "./components/profile/Profile";
import SignIn from "./components/signin/SignIn";

import useStoreData from "hooks/useStoreData";

const Account = () => {
  const { isUserLoggedIn } = useStoreData();
  return <>{isUserLoggedIn ? <Profile /> : <SignIn />}</>;
};

export default Account;
