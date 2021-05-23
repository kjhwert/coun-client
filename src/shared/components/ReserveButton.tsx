import React, { FC } from "react";
import Calendar from "../../assets/icon/calendar.png";
import { useHistory, useLocation } from "react-router-dom";

interface Props {}

const ReserveButton: FC<Props> = () => {
  const { pathname } = useLocation();
  const history = useHistory();

  const isPathNameReserve = () => {
    const path = pathname.replace("/", "");
    if (path === "reserve") return "hidden";
  };

  return (
    <div
      className={`fixed right-4 bottom-16 z-30 bg-main-500
    rounded-full p-4 flex justify-center items-center cursor-pointer ${isPathNameReserve()}`}
      onClick={() => history.push("/reserve")}
    >
      <img src={Calendar} alt="calendar" className="w-6 h-6 z-40" />
    </div>
  );
};

export default ReserveButton;
