import { useRef } from "react";
import { useNavigate } from "react-router-dom";

import { useDispatch } from "react-redux";
import { FaLock } from "react-icons/fa";
import { auth } from "configs/firebase";
import { FaUser } from "react-icons/fa6";
import { FcGoogle } from "react-icons/fc";
import { IoIosMail } from "react-icons/io";

import {
  reauthenticateWithGoogle,
  signInUserWithGoogle,
} from "services/api/authApi";

import "../../stylesheets/FormTemplate.css";

import useReduxData from "hooks/useReduxData";

const FormTemplate = ({ children, className, method, onSubmit }) => {
  const { user } = useReduxData();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const nameRef = useRef();
  const emailRef = useRef();
  const passwordRef = useRef();
  return (
    <form
      className={`form f-column ${className}`}
      onSubmit={(e) => {
        e.preventDefault();
        onSubmit({
          name: nameRef.current ? nameRef.current.value : "",
          email: emailRef.current.value,
          password: passwordRef.current ? passwordRef.current.value : "",
        });
      }}
    >
      {method === "sign up" && (
        <div className="input-box">
          <input type="text" ref={nameRef} required aria-required />
          <label htmlFor="">Username</label>
          <FaUser className="icon" />
        </div>
      )}
      <div className="input-box">
        <input type="text" ref={emailRef} required aria-required />
        <label htmlFor="">Email</label>
        <IoIosMail className="icon" />
      </div>

      {method !== "reset password" && (
        <div className="input-box">
          <FaLock className="icon" />
          <input type="password" required aria-required ref={passwordRef} />
          <label htmlFor="">Password</label>
        </div>
      )}

      {children}

      <div className="button-box a-i-c">
        <button type="submit">{method}</button>

        {(
          method === "reset password"
            ? null
            : user?.providerData[0]?.providerId === "google.com" || !user
        ) ? (
          <button
            onClick={(e) => {
              e.preventDefault();
              if (method === "re-authenticate") {
                dispatch(
                  reauthenticateWithGoogle({
                    currentUserId: auth.currentUser.uid,
                    navigate: navigate,
                  })
                );
              } else {
                dispatch(signInUserWithGoogle());
              }
            }}
          >
            <FcGoogle /> Google
          </button>
        ) : null}
      </div>
    </form>
  );
};

export default FormTemplate;
