import { useDispatch } from "react-redux";
import {
  resetPassword,
  signInUserWithEmail,
  signUpUserWithEmail,
} from "services/api/authApi";

import FormTemplate from "../ui/FormTemplate";
import { switchForm } from "../../utils/switchForm";

const SignInBody = () => {
  const dispatch = useDispatch();
  return (
    <div className="form-container">
      <FormTemplate
        method="login"
        onSubmit={(formDetails) => {
          dispatch(signInUserWithEmail(formDetails));
        }}
      >
        <div className="forgot-password">
          <a
            href=""
            onClick={(e) => {
              e.preventDefault();
              switchForm(0);
            }}
          >
            Forgot password?
          </a>
        </div>
      </FormTemplate>
      <FormTemplate
        method="sign up"
        className={"form-active"}
        onSubmit={(formDetails) => {
          dispatch(signUpUserWithEmail(formDetails));
        }}
      >
        <div className="check-box">
          <input type="checkbox" required aria-required id="terms&conditions" />
          <label htmlFor="terms&conditions" style={{ cursor: "pointer" }}>
            I Accept the terms and condition
          </label>
        </div>
      </FormTemplate>
      <FormTemplate
        method={"reset password"}
        onSubmit={(formDetails) => {
          dispatch(resetPassword(formDetails.email));
        }}
      ></FormTemplate>
    </div>
  );
};

export default SignInBody;
