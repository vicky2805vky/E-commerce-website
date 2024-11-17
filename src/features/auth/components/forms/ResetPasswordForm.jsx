import FormTemplate from "components/formTemplate/FormTemplate";
import { useDispatch } from "react-redux";
import { resetPassword } from "services/api/authApi";

const ResetPasswordForm = () => {
  const dispatch = useDispatch();

  return (
    <FormTemplate
      onSubmit={(formDetails) => {
        dispatch(resetPassword(formDetails.email));
      }}
      className="hidden"
    >
      <FormTemplate.Email />
      <FormTemplate.Submit method={"change password"} />
    </FormTemplate>
  );
};

export default ResetPasswordForm;
