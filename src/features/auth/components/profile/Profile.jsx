import { Link } from "react-router-dom";

import { deleteAccount, signOutUser } from "services/api/authApi";

import "../../stylesheets/Profile.css";

import { useDispatch } from "react-redux";
import useStoreData from "hooks/useStoreData";
import { auth } from "configs/firebase";

const Profile = () => {
  const { user } = useStoreData();
  const dispatch = useDispatch();

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
        {user.displayName || auth.currentUser.displayName || "guest"}
      </p>
      <p>email: {user.email}</p>
      <div className="flex justify-center items-center gap">
        <button
          className="button-3"
          onClick={() => {
            dispatch(signOutUser());
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
