import { switchForm } from "../../../utils/switchForm";

const AuthFormSwitch = () => {
  return (
    <div className="switch a-i-c w-100">
      <div
        className="wh-100"
        onClick={() => {
          switchForm("0 50% 0 0", "signup");
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
  );
};

export default AuthFormSwitch;
