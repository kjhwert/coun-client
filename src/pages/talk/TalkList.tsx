import React, { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../../app/hooks";
import { talksSelector } from "../../features/talk/talkSlice";
import Loading from "../../shared/components/Loading";
import { getTalks } from "../../features/talk/talk.actions";
import List from "../../shared/components/List";
import TalkTypeList from "./components/TalkTypeList";
import Pagination from "../../shared/components/Pagination";

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
      <Pagination
        hasMorePage={talks.length < totalCount}
        onClick={() => {
          dispatch(
            getTalks({
              page: pagination.page + 1,
              type: pagination.type,
            })
          );
        }}
      />
    </div>
  );
};
export default TalkList;
