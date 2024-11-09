import { createContext, useContext, useRef, useState } from "react";

const formContext = createContext();

export const useFormContext = () => {
  const formContextData = useContext(formContext);

  return formContextData;
};

const FormContext = ({ children }) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const state = {
    name,
    email,
    password,
    setName,
    setEmail,
    setPassword,
  };
  return <formContext.Provider value={state}>{children}</formContext.Provider>;
};

export default FormContext;
