const LoadingScreen = ({ loader = "shop", text = "loading" }) => {
  return (
    <div className="flex flex-col justify-center items-center absolute inset-0 bg-black bg-opacity-30 z-10">
      <img
        className="min-w-20 w-[15%]  max-w-32"
        src={new URL(`../assets/${loader}.gif`, import.meta.url)}
        alt=""
      />
      <p className="animate-pulse">{text}...</p>
    </div>
  );
};

export default LoadingScreen;
