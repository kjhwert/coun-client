import React, { FC } from "react";
import List from "../../shared/components/List";
import Pagination from "../../shared/components/Pagination";
import { ITalk, ITalkPaginationType } from "../../features/talk/talkSlice";
import talkTypeCard from "../../data/talkTypeCards";

interface Props {
  talks: ITalk[];
  totalCount: number;
  getInitTalks: (page: number, type: ITalkPaginationType) => void;
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
      <div className="flex mt-4 mb-8 shadow-2xl bg-white flex-shrink-0 cursor-pointer">
        {talkTypeCard.map((card) => (
          <div
            className="mr-2 flex items-center justify-center shadow-xl opacity-75"
            onClick={() => {
              getInitTalks(1, card.type);
            }}
            style={{
              backgroundImage: `url(${card.backgroundImageUrl})`,
              width: 200,
              height: 150,
            }}
            key={card.id}
          >
            <h1 className="text-2xl font-bold text-white">{card.title}</h1>
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
