import { useDispatch } from "react-redux";

import { reauthenticateWithEmail } from "services/api/authApi";

import { FaTrashAlt } from "react-icons/fa";
import FormTemplate from "../ui/FormTemplate";

import "../../stylesheets/DeleteAccount.css";

import { useNavigate } from "react-router-dom";

const DeleteAccount = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  return (
    <div className="delete-account f-column">
      <div className="f-column">
        <span className="trash-icon flex justify-center items-center ">
          <FaTrashAlt />
        </span>
        <p className="delete-warning">
          For security reasons, please re-enter your details to confirm your
          identity.
        </p>
      </div>
      <FormTemplate
        method={"re-authenticate"}
        onSubmit={(formDetails) => {
          dispatch(
            reauthenticateWithEmail({
              formDetails: formDetails,
              navigate: navigate,
            })
          );
        }}
      >
        <div className="flex justify-center items-center gap">
          <input type="checkbox" id="delete-confirm" required />
          <label htmlFor="delete-confirm">I want to delete my account.</label>
        </div>
      </FormTemplate>
    </div>
  );
};

export default DeleteAccount;
