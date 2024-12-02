import { useDispatch } from "react-redux";

import { reauthenticateWithEmail } from "services/api/authApi";

import "../../stylesheets/DeleteAccount.css";

import { useNavigate } from "react-router-dom";
import FormTemplate from "components/formTemplate/FormTemplate";
import DeleteAccountFormHeader from "./deleteaccountForm/DeleteAccountFormHeader";
import { auth } from "configs/firebase";

const DeleteAccountForm = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  return (
    <div className="delete-account f-column">
      <DeleteAccountFormHeader />
      <FormTemplate
        className={"not-form"}
        onSubmit={(formDetails) =>
          handleSubmit(formDetails, dispatch, navigate)
        }
      >
        <FormTemplate.Email />
        <FormTemplate.Password />
        <FormTemplate.Condition text={"I want to delete my account."} />
        {auth.currentUser?.providerData[0].providerId === "google.com" ? (
          <FormTemplate.GoogleSubmit method={"re-authenticate"} />
        ) : (
          <FormTemplate.Submit method={"re-authenticate"} />
        )}
      </FormTemplate>
    </div>
  );
};

export default DeleteAccountForm;

const handleSubmit = (formDetails, dispatch, navigate) => {
  dispatch(
    reauthenticateWithEmail({
      formDetails,
      navigate,
    })
  );
};
