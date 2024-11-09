const ButtonWithURLText = ({ type = "submit", className, buttonText }) => {
  return (
    <button type={type} className={className}>
      {window.location.href.split("/").at(-1)} {buttonText}
    </button>
  );
};

export default ButtonWithURLText;
