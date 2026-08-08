import { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../app/hook";
import { toggleTheme } from "../features/themeSlice";
import { Moon, Sun } from "lucide-react";

const Navbar = () => {
  const theme = useAppSelector((state) => state.theme.mode);
  const dispatch = useAppDispatch();

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
  }, [theme]);

  return (
    <div className="bg-surface border-border">
      <div className="flex justify-between items-center h-16 px-4">
        <h1 className="text-2xl font-bold">
          Pixel<span className="text-accent">Hunt</span>
        </h1>
        <div className="flex gap-2 items-center">
          <input type="text" className="border rounded p-2 flex-1" />
          <button aria-label="search button">🔍</button>
        </div>
        <div>
          <button
            onClick={() => dispatch(toggleTheme())}
            aria-label={
              theme === "light" ? "Switch to dark mode" : "Switch to light mode"
            }
            className="p-2 rounded-full border  text-xl transition-rotate duration-600 active:rotate-90"
          >
            {theme === "light" ? <Moon />  : <Sun />}
          </button>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
