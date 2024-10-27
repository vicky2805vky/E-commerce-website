import "./ErrorPage.css";

const ErrorPage = () => {
  return (
    <div className="error-page flex justify-center items-center">
      <img src={new URL(`./images/404-page.png`, import.meta.url)} />
    </div>
  );
};

export default ErrorPage;
