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
      <input
        type="checkbox"
        id="toggle-theme"
        onChange={() => {
          dispatch(toggleTheme());
        }}
      />
      <label htmlFor="toggle-theme" className="theme-icon">
        {theme === "light" ? <FaSun /> : <BsFillMoonStarsFill />}
      </label>
    </div>
  );
};

export default ToggleTheme;
