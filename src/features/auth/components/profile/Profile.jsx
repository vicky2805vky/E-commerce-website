import { Link } from "react-router-dom";

import { signOutUser } from "services/api/authApi";

import "../../stylesheets/Profile.css";

import { useDispatch } from "react-redux";
import { auth } from "configs/firebase";
import useModal from "hooks/useModal";

const Profile = () => {
  const dispatch = useDispatch();
  const modal = useModal();

  return (
    <div className="account flex justify-center items-center f-column gap">
      <img
        src={
          auth.currentUser.photoURL ||
          new URL("../../images/blank-profile.png", import.meta.url)
        }
        style={{
          background: `url(${new URL(
            "../../images/blank-profile.png",
            import.meta.url
          )}) center/cover`,
        }}
      />
      <p className="name">
        {auth.currentUser?.displayName ||
          auth.currentUser.displayName ||
          "guest"}
      </p>
      <p>email: {auth.currentUser?.email}</p>
      <div className="flex justify-center items-center gap">
        <button
          className="button-3"
          onClick={() => {
            modal(() => dispatch(signOutUser()));
          }}
        >
          sign out
        </button>
        <Link className="button-3" to={"/user/delete"}>
          delete
        </Link>
      </div>
    </div>
  );
};

export default Profile;
