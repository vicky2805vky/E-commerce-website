import { useDispatch } from "react-redux";

import { deleteAccount } from "services/api/authApi";
import { auth } from "configs/firebase";

import "../../stylesheets/DeleteAccount.css";
import "../../stylesheets/DeleteConfirm.css";

import useStoreData from "hooks/useStoreData";
import RedirectPage from "features/redirect/RedirectPage";
import DeleteConfirmTitle from "./delete confirmation/DeleteConfirmTitle";
import DeleteConfirmMessage from "./delete confirmation/DeleteConfirmMessage";
import DeleteConfirmButtons from "./delete confirmation/DeleteConfirmButtons";

const DeleteConfirm = () => {
  const { isUserLoggedIn } = useStoreData();
  const dispatch = useDispatch();
  return isUserLoggedIn ? (
    <form
      className="delete-account confirm f-column"
      onSubmit={(e) => {
        e.preventDefault();
        dispatch(deleteAccount(auth.currentUser));
      }}
    >
      <DeleteConfirmTitle />
      <DeleteConfirmMessage />
      <DeleteConfirmButtons />
    </form>
  ) : (
    <RedirectPage redirectionType={"deleteAccount"} />
  );
};

export default DeleteConfirm;
