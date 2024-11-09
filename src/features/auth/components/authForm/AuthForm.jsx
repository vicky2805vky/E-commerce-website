import "../../stylesheets/SignIn.css";
import AuthFormBody from "./AuthFormBody";
import AuthFormHeader from "./AuthFormHeader";

const AuthForm = () => {
  return (
    <div className="w-100 flex justify-center items-center">
      <div className="login-page f-column">
        <AuthFormHeader />
        <AuthFormBody />
      </div>
    </div>
  );
};

export default AuthForm;
