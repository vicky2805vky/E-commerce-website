import { Bounce, ToastContainer } from "react-toastify";

import "../stylesheets/ToastNotification.css";
import "react-toastify/dist/ReactToastify.css";

const ToastNotification = () => {
  return (
    <ToastContainer
      autoClose={1500}
      hideProgressBar={false}
      newestOnTop={false}
      closeOnClick
      rtl={false}
      draggable
      pauseOnHover={false}
      pauseOnFocusLoss={false}
      transition={Bounce}
      stacked
      toastStyle={{
        fontSize: "var(--fs-s)",
        background: "var(--primary-bg-gradient)",
        color: "var(--main-color)",
        borderRadius: "30px",
        borderTopRightRadius: "0px",
        width: "fit-content",
        marginRight: "100px",
      }}
    />
  );
};

export default ToastNotification;
