import React from "react";
import { Link, useLocation } from "react-router-dom";
import Menu from "../../assets/icon/menu.png";

const FOCUSED = "text-main-500 font-bold";
const UNFOCUSED = "text-main-300";

interface IRouter {
  name: string;
  link: string;
}

const router: IRouter[] = [
  { name: "HOME", link: "/" },
  { name: "THERAPISTS", link: "/profile" },
  { name: "BLOG", link: "/talk" },
  { name: "INTERVIEW", link: "/interview" },
  { name: "GALLERY", link: "/gallery" },
];

const Header = () => {
  const { pathname } = useLocation();

  const isFocused = (link: string) => {
    if (pathname === link) {
      return FOCUSED;
    }
    return UNFOCUSED;
  };

  return (
    <div className="fixed top-0 z-20 w-full lg:h-20 h-16 bg-white shadow-xl flex lg:justify-end items-center lg:p-10 pl-6">
      <img src={Menu} alt="" className="flex lg:hidden w-8 h-8" />
      <div className="items-center lg:flex hidden">
        <ul className="flex">
          {router.map(({ link, name }) => (
            <li className={`mr-4 cursor-pointer ${isFocused(link)}`} key={name}>
              <Link to={link}>{name}</Link>
            </li>
          ))}
        </ul>
        <Link
          to="/reserve"
          className="w-32 h-10 text-white rounded-full text-sm shadow-2xl focus:outline-none bg-main-400 flex justify-center items-center"
        >
          상담예약
        </Link>
      </div>
    </div>
  );
};

export default Header;
