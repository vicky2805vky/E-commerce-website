import FormTemplate from "components/formTemplate/FormTemplate";
import { switchForm } from "features/auth/utils/switchForm";
import { useDispatch } from "react-redux";
import { signInUserWithEmail } from "services/api/authApi";

const SignInForm = () => {
  const dispatch = useDispatch();

  return (
    <FormTemplate
      onSubmit={(formDetails) => {
        dispatch(signInUserWithEmail(formDetails));
      }}
    >
      <FormTemplate.Email />
      <FormTemplate.Password />
      <div className="forgot-password w-fit">
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
      <FormTemplate.GoogleSubmit method={"login"} />
    </FormTemplate>
  );
};

export default SignInForm;
