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
    <div className="flex flex-wrap ml-4" style={{ width: 1200 }}>
      {items.map((item) => (
        <Link to={`/${link}/${item.id}`} key={item.id} className="relative">
          <div className="mr-4 mb-4 cursor-pointer" style={{ width: 380 }}>
            <img
              src={
                item.thumbnail
                  ? item.thumbnail
                  : `${BASE_URL}${item.image?.path}`
              }
              style={{ height: 225 }}
              className="object-cover w-full rounded"
              alt={`${item.id}`}
            />
            <h1 className="font-bold text-16 mt-2 text-center px-4">
              {item.title}
            </h1>
            <div
              className="absolute top-0 right-0 rounded-full
              bg-main-400 flex flex-col w-10 h-10 items-center mr-8 mt-4 pt-1"
            >
              <span className="text-white text-12">
                {getMonth(item.createdAt)},
              </span>
              <span className="text-white text-12">
                {getDay(item.createdAt)}
              </span>
            </div>
          </div>
        </Link>
      ))}
    </div>
  );
};

export default List;
