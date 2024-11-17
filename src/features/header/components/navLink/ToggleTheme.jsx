import { FaSun } from "react-icons/fa6";
import { BsFillMoonStarsFill } from "react-icons/bs";

import { toggleTheme } from "services/slices/appSlice";

import { useDispatch } from "react-redux";
import useStoreData from "hooks/useStoreData";

const ToggleTheme = () => {
  const { theme } = useStoreData();
  const dispatch = useDispatch();
  return (
    <div className="theme-box">
      <button
        onClick={() => {
          dispatch(toggleTheme());
        }}
      >
        {theme === "light" ? <FaSun /> : <BsFillMoonStarsFill />}
      </button>
    </div>
  );
};

export default ToggleTheme;
