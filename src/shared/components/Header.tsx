import React from "react";
import { Link, useLocation } from "react-router-dom";
import Menu from "../../assets/icon/menu.png";

const FOCUSED = "text-main-500 font-bold";
const UNFOCUSED = "text-main-300";

const Header = () => {
  const { pathname } = useLocation();

  return (
    <div className="fixed top-0 z-20 w-full lg:h-20 h-16 bg-white shadow-xl flex lg:justify-end items-center lg:p-10 pl-6">
      <img src={Menu} alt="" className="flex lg:hidden w-8 h-8" />
      <div className="items-center lg:flex hidden">
        <ul className="flex">
          {/*TODO 반복 제거하기*/}
          <li
            className={`mr-4 cursor-pointer ${
              pathname === "/" ? FOCUSED : UNFOCUSED
            }`}
          >
            <Link to="/">HOME</Link>
          </li>
          <li
            className={`${
              pathname.includes("profile") ? FOCUSED : UNFOCUSED
            } mr-4 cursor-pointer`}
          >
            <Link to="/profile">THERAPISTS</Link>
          </li>
          <li
            className={`${
              pathname.includes("talk") ? FOCUSED : UNFOCUSED
            } mr-4 cursor-pointer`}
          >
            <Link to="/talk">BLOG</Link>
          </li>
          <li
            className={`${
              pathname.includes("interview") ? FOCUSED : UNFOCUSED
            } mr-4 cursor-pointer`}
          >
            <Link to="/interview">INTERVIEW</Link>
          </li>
          <li
            className={`${
              pathname.includes("gallery") ? FOCUSED : UNFOCUSED
            } mr-10 cursor-pointer`}
          >
            <Link to="/gallery">GALLERY</Link>
          </li>
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
