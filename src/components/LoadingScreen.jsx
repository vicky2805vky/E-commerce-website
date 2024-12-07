import { createPortal } from "react-dom";

const LoadingScreen = ({ loader = "shop", text = "loading" }) => {
  return createPortal(
    <div className="flex flex-col justify-center items-center absolute inset-0 max-h-full bg-black bg-opacity-30 z-10 [&_*]:pointer-events-none">
      <img
        className="min-w-20 w-[15%]  max-w-32"
        src={new URL(`../assets/${loader}.gif`, import.meta.url)}
        alt=""
      />
      <p className="animate-pulse">{text}...</p>
    </div>,
    document.body
  );
};

export default LoadingScreen;
