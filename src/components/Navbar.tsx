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
      <div className="flex justify-between items-center gap-6 h-18 px-4">
        <h1 className="text:xl sm:text-3xl font-bold">
          Pixel<span className="text-accent">Hunt</span>
        </h1>
        <div className="flex flex-1 gap-2 justify-center items-center">
          <input
            type="text"
            placeholder="search anything ..."
            className="w-full max-w-xl border rounded py-2 px-3 outline-none"
          />
          <button
            aria-label="search button"
            className="border py-2 px-3 rounded cursor-pointer active:scale-95"
          >
            Search
          </button>
        </div>
        <div>
          <button
            onClick={() => dispatch(toggleTheme())}
            aria-label={
              theme === "light" ? "Switch to dark mode" : "Switch to light mode"
            }
            className="p-2 rounded-full border  text-xl transition-rotate duration-600 active:rotate-90"
          >
            {theme === "light" ? <Moon /> : <Sun />}
          </button>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
