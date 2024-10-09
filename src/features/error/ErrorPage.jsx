import "./ErrorPage.css";

import useReduxData from "hooks/useReduxData";

const ErrorPage = () => {
  const { error } = useReduxData();
  return (
    <div className="error-page flex justify-center items-center">
      <img
        src={new URL(`./images/${error.statusCode}-page.png`, import.meta.url)}
      />
    </div>
  );
};

export default ErrorPage;
