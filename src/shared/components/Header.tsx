import React, { useState } from "react";
import { Link, useHistory, useLocation } from "react-router-dom";
import Menu from "../../assets/icon/menu.svg";
import Close from "../../assets/icon/close.svg";

const FOCUSED = "text-main-500 font-bold";
const UNFOCUSED = "text-main-300";

interface IRouter {
  name: string;
  link: string;
  path: string;
}

const router: IRouter[] = [
  { name: "HOME", link: "/", path: "home" },
  { name: "THERAPISTS", link: "/profile", path: "profile" },
  { name: "RESERVE", link: "/reserve", path: "reserve" },
  { name: "BLOG", link: "/talk", path: "talk" },
  { name: "INTERVIEW", link: "/interview", path: "interview" },
  { name: "GALLERY", link: "/gallery", path: "gallery" },
];

const Header = () => {
  const [isMenuClicked, setIsMenuClicked] = useState<boolean>(false);
  const { pathname } = useLocation();
  const [_, route] = pathname.split("/");
  const history = useHistory();

  const isFocused = (path: string): string => {
    if (route === path) {
      return FOCUSED;
    }
    return UNFOCUSED;
  };

  const onMenuClickHandler = (): void => {
    if (!isMenuClicked) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
    setIsMenuClicked(!isMenuClicked);
  };

  const moveToLink = (link: string): void => {
    onMenuClickHandler();
    history.push(link);
  };

  return isMenuClicked ? (
    <div className="fixed top-0 w-full z-20 h-full overflow-unset">
      <div className="w-full h-1/2 bg-white flex flex-col p-4">
        <img
          src={Close}
          alt="close"
          onClick={onMenuClickHandler}
          className="w-6 h-6"
        />
        <ul className="flex flex-col mt-4">
          {router.map(({ link, name, path }) => (
            <li
              key={name}
              className={`py-2 ${isFocused(path)}`}
              onClick={() => {
                moveToLink(link);
              }}
            >
              <h3>{name}</h3>
            </li>
          ))}
        </ul>
      </div>
      <div
        className="w-full h-1/2 opacity-30 bg-black"
        onClick={onMenuClickHandler}
      />
    </div>
  ) : (
    <div className="fixed top-0 z-20 w-full lg:h-20 h-14 bg-white shadow-xl flex lg:justify-end items-center lg:p-6 pl-4">
      <img
        src={Menu}
        alt="menu"
        className="w-6 h-6 lg:hidden"
        onClick={onMenuClickHandler}
      />
      <div className="items-center lg:flex hidden">
        <ul className="flex">
          {router.map(({ link, name, path }) => (
            <li className={`mr-4 cursor-pointer ${isFocused(path)}`} key={name}>
              <Link to={link}>{name}</Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Header;
