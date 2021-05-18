import React from "react";
import { BASE_URL, getDay, getMonth } from "../common";
import { Link } from "react-router-dom";
import { Image } from "../../features/interview/interviewSlice";

interface Item {
  id: number;
  thumbnail?: string;
  title: string;
  createdAt: Date;
  image?: Image;
}

interface Props {
  link: "talk" | "interview" | "gallery";
  items: Item[];
}

const List = ({ link, items }: Props) => {
  return (
    <div className="grid lg:grid-cols-3 gap-8 lg:gap-4 lg:w-web w-full grid-cols-1">
      {items.map((item) => (
        <Link
          to={`/${link}/${item.id}`}
          key={item.id}
          className="relative w-full lg:mr-4 cursor-pointer"
        >
          <img
            src={
              item.thumbnail ? item.thumbnail : `${BASE_URL}${item.image?.path}`
            }
            className="object-cover w-full rounded h-56"
            alt={`${item.id}`}
          />
          <h1 className="font-bold text-16 mt-2 text-center">{item.title}</h1>
          <div
            className="absolute right-2 top-2 rounded-full z-10
              bg-main-400 flex flex-col w-10 h-10 items-center pt-1"
          >
            <span className="text-white text-12">
              {getMonth(item.createdAt)},
            </span>
            <span className="text-white text-12">{getDay(item.createdAt)}</span>
          </div>
        </Link>
      ))}
    </div>
  );
};

export default List;
