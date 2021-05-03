import React, { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../../app/hooks";
import { talksSelector } from "../../features/talk/talkSlice";
import Loading from "../../shared/components/Loading";
import { getTalks } from "../../features/talk/talk.actions";
import List from "../../shared/components/List";
import TalkTypeList from "./components/TalkTypeList";

const TalkList = () => {
  const { talks, totalCount, status, pagination } = useAppSelector(
    talksSelector
  );
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(getTalks(pagination));
  }, [dispatch]);

  if (status === "loading") {
    return <Loading />;
  }

  return (
    <div className="w-full flex items-center flex-col relative">
      <TalkTypeList />
      <List link="talk" items={talks} />
      <div className="mt-8 mb-8">
        {talks.length < totalCount && (
          <span
            onClick={() => {
              dispatch(
                getTalks({
                  page: pagination.page + 1,
                  type: pagination.type,
                })
              );
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
