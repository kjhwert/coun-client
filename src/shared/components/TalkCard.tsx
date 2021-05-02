import React, { FC } from "react";
import { ITalk } from "../../features/talk/talk";
import { getDay, getMonth } from "../common";
import { Link } from "react-router-dom";

interface Props {
  talk: ITalk;
}

const TalkCard: FC<Props> = ({ talk }) => {
  return (
    <Link to={`/talk/${talk.id}`} className="relative">
      <div className="mr-4 mb-4 cursor-pointer" style={{ width: 380 }}>
        <img
          src={talk.thumbnail}
          style={{ height: 225 }}
          className="object-cover w-full rounded"
          alt={`${talk.id}`}
        />
        <h1 className="font-bold text-16 mt-2 text-center px-4">
          {talk.title}
        </h1>
        <div
          className="absolute top-0 right-0 rounded-full
              bg-main-400 flex flex-col w-10 h-10 items-center mr-8 mt-4 pt-1"
        >
          <span className="text-white text-12">
            {getMonth(talk.createdAt)},
          </span>
          <span className="text-white text-12">{getDay(talk.createdAt)}</span>
        </div>
      </div>
    </Link>
  );
};

export default TalkCard;
