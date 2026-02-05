import { memo } from "react";
import { Plus, Search } from "lucide-react";
import logo from "../../../public/images/tmdb_logo.svg";

function Header() {
  return (
    <header className="w-full bg-[var(--primary-color)]  p-4">
      <div className="width-stack flex justify-between">
        <nav className="submedia flex">
          <img
            src={logo}
            alt="TMDB Logo"
            width={154}
            height={20}
            className="mr-4"
          />
          <ul className="text-white flex gap-8 font-bold px-4 py-2 [&_li]:cursor-pointer">
            <li>Movies</li>
            <li>Tv Shows</li>
            <li>People</li>
            <li>More</li>
          </ul>
        </nav>
        <nav className="icons">
          <ul className="text-white flex gap-8 font-bold px-4 py-2 [&_li]:cursor-pointer ">
            <li>
              <Plus size={22} className="font-extrabold" strokeWidth={4} />
            </li>
            <li className="capitalize rounded-xs border px-1">en</li>
            <li>Login</li>
            <li>Join TMDB</li>
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
