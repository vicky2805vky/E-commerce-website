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

import "stylesheets/FormTemplate.css";

import FormContext, { useFormContext } from "services/context/FormContext";

const FormTemplate = (props) => {
  return (
    <FormContext>
      <FormComponent {...props} />
    </FormContext>
  );
};

export default FormTemplate;

const FormComponent = ({ onSubmit, className, children }) => {
  const { name, email, password } = useFormContext();

  const formData = {
    name,
    email,
    password,
  };
  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        onSubmit(formData);
      }}
      className={`form f-column ${className}`}
    >
      {children}
    </form>
  );
};

FormTemplate.UserName = () => {
  const { name, setName } = useFormContext();

  return (
    <div className="input-box">
      <input
        type="text"
        value={name}
        onChange={(e) => {
          setName(e.target.value);
        }}
        required
      />
      <label htmlFor="">Username</label>
      <FaUser className="icon" />
    </div>
  );
};
FormTemplate.Email = () => {
  const { email, setEmail } = useFormContext();
  return (
    <div className="input-box">
      <input
        type="text"
        value={email}
        onChange={(e) => {
          setEmail(e.target.value);
        }}
        required
      />
      <label htmlFor="">Email</label>
      <IoIosMail className="icon" />
    </div>
  );
};
FormTemplate.Password = () => {
  const { password, setPassword } = useFormContext();
  return (
    <div className="input-box">
      <FaLock className="icon" />
      <input
        type="password"
        onChange={(e) => {
          setPassword(e.target.value);
        }}
        required
        value={password}
      />
      <label htmlFor="">Password</label>
    </div>
  );
};
FormTemplate.Condition = ({ text }) => {
  return (
    <div className="flex justify-center items-center gap">
      <input type="checkbox" id="confirm-box" required />
      <label htmlFor="confirm-box">{text}</label>
    </div>
  );
};
FormTemplate.Submit = ({ method }) => {
  return (
    <div className="button-box a-i-c">
      <button type="submit">{method}</button>
    </div>
  );
};
FormTemplate.GoogleSubmit = ({ method }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  return (
    <div className="button-box a-i-c">
      <button type="submit">{method}</button>
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
    </div>
  );
};
