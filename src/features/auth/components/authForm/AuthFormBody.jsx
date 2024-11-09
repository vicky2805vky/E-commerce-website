import ResetPasswordForm from "../forms/ResetPasswordForm";
import SignInForm from "../forms/SignInForm";
import SignUpForm from "../forms/SignUpForm";

const AuthFormBody = () => {
  return (
    <div className="form-container">
      <SignInForm />
      <SignUpForm />
      <ResetPasswordForm />
    </div>
  );
};

export default AuthFormBody;
