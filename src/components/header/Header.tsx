import { memo } from "react";
import { MoonIcon, Search, Sun } from "lucide-react";
import logo from "../../../public/images/tmdb_logo.svg";
import { useTheme } from "@/context/theme/ThemeContext";
import { Link } from "react-router-dom";

function Header() {
  const { theme, setTheme } = useTheme();

  const toggleTheme = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };
  return (
    <header className="w-full bg-[var(--primary-color)]  p-4">
      <div className="width-stack flex justify-between">
        <nav className="submedia flex items-center">
          <Link to="/">
            <img
              src={logo}
              alt="TMDB Logo"
              width={154}
              height={20}
              className="mr-4"
            />
          </Link>
        </nav>
        <nav className="icons">
          <ul className="text-white flex gap-8 font-bold px-4 py-2 [&_li]:cursor-pointer ">
            <li>
              {theme === "dark" ? (
                <Sun
                  onClick={toggleTheme}
                  size={22}
                  className="font-extrabold"
                />
              ) : (
                <MoonIcon
                  onClick={toggleTheme}
                  size={22}
                  className="font-extrabold"
                />
              )}
            </li>
            <li className="capitalize rounded-xs border px-1">en</li>
            <Link to="https://www.themoviedb.org/signup">
              <li>Join TMDB</li>
            </Link>
            <li>
              <Search color="skyblue" strokeWidth={4} />
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}

export default memo(Header);
