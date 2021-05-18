import React, { useEffect } from "react";
import TalkListPresenter from "./TalkListPresenter";
import { useAppDispatch, useAppSelector } from "../../app/hooks";
import { talksSelector } from "../../features/talk/talkSlice";
import { getTalks } from "../../features/talk/talk.actions";
import Loading from "../../shared/components/Loading";
import { ITALK_TYPES } from "../../shared/global";

const TalkListContainer = () => {
  const {
    talks,
    totalCount,
    status,
    pagination: { page, type },
  } = useAppSelector(talksSelector);
  const dispatch = useAppDispatch();

  const getInitTalks = (page: number, type: ITALK_TYPES) => {
    dispatch(getTalks({ page, type }));
  };

  const getMoreTalks = () => {
    dispatch(getTalks({ page: page + 1, type }));
  };

  useEffect(() => {
    getInitTalks(page, type);
  }, [dispatch]);

  if (status === "loading") {
    return <Loading />;
  }

  return (
    <TalkListPresenter
      talks={talks}
      totalCount={totalCount}
      getInitTalks={getInitTalks}
      getMoreTalks={getMoreTalks}
    />
  );
};

export default TalkListContainer;
