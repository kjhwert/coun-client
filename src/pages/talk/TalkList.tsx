import React, { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../../app/hooks";
import { talksSelector } from "../../features/talk/talkSlice";
import Loading from "../../shared/components/Loading";
import { ITalkPagination } from "../../features/talk/talk";
import TalkCard from "../../shared/components/TalkCard";
import talkTypeCard from "../../data/talkTypeCards";
import TalkTypeCard from "../../shared/components/TalkTypeCard";
import { getTalks } from "../../features/talk/talk.actions";

const TalkList = () => {
  const { talks, totalCount, status, pagination } = useAppSelector(
    talksSelector
  );
  const dispatch = useAppDispatch();

  const getTalksList = (pagination: ITalkPagination) => {
    dispatch(getTalks(pagination));
  };

  useEffect(() => {
    getTalksList(pagination);
  }, [dispatch]);

  if (status === "loading") {
    return <Loading />;
  }

  return (
    <div className="w-full flex items-center flex-col relative">
      <div className="flex mt-4 mb-8 shadow-2xl bg-white flex-shrink-0 cursor-pointer">
        {talkTypeCard.map((card) => (
          <TalkTypeCard
            {...card}
            key={card.id}
            onClick={() => getTalksList({ page: 1, type: card.type })}
          />
        ))}
      </div>
      <div className="flex flex-wrap ml-4" style={{ width: 1200 }}>
        {talks.map((talk) => (
          <TalkCard talk={talk} key={talk.id} />
        ))}
      </div>
      <div className="mt-8 mb-8">
        {talks.length < totalCount && (
          <span
            onClick={() => {
              getTalksList({
                page: pagination.page + 1,
                type: pagination.type,
              });
            }}
            className="p-4 text-14 text-main-300 cursor-pointer"
          >
            more
          </span>
        )}
      </div>
    </div>
  );
};
export default TalkList;
