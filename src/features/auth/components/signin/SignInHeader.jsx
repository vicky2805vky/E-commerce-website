import { switchForm } from "../../utils/switchForm";

const SignInHeader = () => {
  return (
    <>
      <div className="title">
        <p className="title-text">Welcome Back!</p>
        <p className="title-text form-active">Welcome</p>
        <p className="title-text">Reset Password</p>
      </div>
      <div className="switch a-i-c w-100">
        <div
          className="wh-100"
          onClick={() => {
            switchForm("0 50% 0 0", "sign up");
          }}
        >
          sign up
        </div>
        <div
          className="wh-100"
          onClick={() => {
            switchForm("0 0 0 50%", "login");
          }}
        >
          login
        </div>
        <span className="switch-indicator" id="switch-indicator"></span>
      </div>
    </>
  );
};

export default SignInHeader;
