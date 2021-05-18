import React, { FC } from "react";
import List from "../../shared/components/List";
import Pagination from "../../shared/components/Pagination";
import { ITalk } from "../../features/talk/talkSlice";
import talkTypeCard from "../../data/talkTypeCards";
import { ITALK_TYPES } from "../../shared/global";

interface Props {
  talks: ITalk[];
  totalCount: number;
  getInitTalks: (page: number, type: ITALK_TYPES) => void;
  getMoreTalks: () => void;
}

const TalkListPresenter: FC<Props> = ({
  talks,
  totalCount,
  getInitTalks,
  getMoreTalks,
}) => {
  return (
    <div className="w-full flex items-center flex-col relative">
      <div
        className={`w-full mt-4 mb-8 bg-white flex-shrink-0 lg:w-1/2 grid grid-cols-3 gap-x-2 px-2`}
      >
        {talkTypeCard.map((card) => (
          <div
            className="cursor-pointer lg:mr-2 shadow-2xl items-center flex
           shadow-xl opacity-75 w-full h-16 lg:h-36 justify-center"
            onClick={() => {
              getInitTalks(1, card.type);
            }}
            style={{
              backgroundImage: `url(${card.backgroundImageUrl})`,
            }}
            key={card.id}
          >
            <h1 className="lg:text-2xl text-lg font-bold text-white">
              {card.title}
            </h1>
          </div>
        ))}
      </div>
      <List link="talk" items={talks} />
      <Pagination
        hasMorePage={talks.length < totalCount}
        onClick={() => {
          getMoreTalks();
        }}
      />
    </div>
  );
};

export default TalkListPresenter;
