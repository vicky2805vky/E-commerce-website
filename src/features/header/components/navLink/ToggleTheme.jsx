import { FaSun } from "react-icons/fa6";
import { BsFillMoonStarsFill } from "react-icons/bs";

import { toggleTheme } from "services/slices/appSlice";

import { useDispatch } from "react-redux";
import useStoreData from "hooks/useStoreData";
import Label from "components/ui/Label";

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
      <Label
        inputId={"toggle-theme"}
        labelText={theme === "light" ? <FaSun /> : <BsFillMoonStarsFill />}
      />
    </div>
  );
};

export default ToggleTheme;
