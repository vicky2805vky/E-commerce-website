import SignInHeader from "./SignInHeader";
import SignInBody from "./SignInBody";

import "../../stylesheets/SignIn.css";

const SignIn = () => {
  return (
    <div className="w-100 flex justify-center items-center">
      <div className="login-page f-column">
        <SignInHeader />
        <SignInBody />
      </div>
    </div>
  );
};

export default SignIn;
