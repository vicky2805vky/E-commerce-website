import Profile from "./components/profile/Profile";
import SignIn from "./components/signin/SignIn";

import useReduxData from "hooks/useReduxData";

const Account = () => {
  const { isLoggedIn } = useReduxData();
  return <>{isLoggedIn ? <Profile /> : <SignIn />}</>;
};

export default Account;
