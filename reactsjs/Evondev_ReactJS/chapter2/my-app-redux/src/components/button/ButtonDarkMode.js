import React from "react";
import { useDispatch } from "react-redux";
import { toggleDarkMode } from "../../redux-toolkit/globalSlice";
import useDarkMode from "../hooks/useDarkMode";

const ButtonDarkMode = () => {
  const [darkMode, setDarkMode] = useDarkMode();
  console.log("🚀 ~ file: Card.js:8 ~ Card ~ darkMode", darkMode);
  const dispatch = useDispatch();
  React.useEffect(() => {
    dispatch(toggleDarkMode(darkMode));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  const handleDarkModeOptions = () => {
    setDarkMode(!darkMode);
    dispatch(toggleDarkMode(!darkMode));
  };
  return (
    <div className="w-full text-center">
      <button
        className="p-2 border border-gray-300 mt-[20px] rounded-full bg-gray-200"
        onClick={handleDarkModeOptions}
      >
        Toggle DarkMode
      </button>
    </div>
  );
};

export default ButtonDarkMode;
