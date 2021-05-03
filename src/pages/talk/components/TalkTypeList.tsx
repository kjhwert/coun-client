import React from "react";
import talkTypeCard from "../../../data/talkTypeCards";
import { getTalks } from "../../../features/talk/talk.actions";
import { useAppDispatch } from "../../../app/hooks";

const TalkTypeList = () => {
  const dispatch = useAppDispatch();
  return (
    <div className="flex mt-4 mb-8 shadow-2xl bg-white flex-shrink-0 cursor-pointer">
      {talkTypeCard.map((card) => (
        <div
          className="mr-2 flex items-center justify-center shadow-xl opacity-75"
          onClick={() => {
            dispatch(getTalks({ page: 1, type: card.type }));
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
  );
};

export default TalkTypeList;
