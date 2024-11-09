import FormTemplate from "components/formTemplate/FormTemplate";
import { useDispatch } from "react-redux";
import { signUpUserWithEmail } from "services/api/authApi";

const SignUpForm = () => {
  const dispatch = useDispatch();

  return (
    <FormTemplate
      onSubmit={(formDetails) => {
        dispatch(signUpUserWithEmail(formDetails));
      }}
      className={"form-active"}
    >
      <FormTemplate.UserName />
      <FormTemplate.Email />
      <FormTemplate.Password />
      <FormTemplate.GoogleSubmit method={"sign up"} />
    </FormTemplate>
  );
};
export default SignUpForm;
