import React, { FC, useEffect } from "react";
import TalkPresenter from "./TalkPresenter";
import { useAppDispatch, useAppSelector } from "../../app/hooks";
import { talksSelector } from "../../features/talk/talkSlice";
import { getTalk } from "../../features/talk/talk.actions";
import Loading from "../../shared/components/Loading";
import NotFound from "../../shared/components/NotFound";

interface Props {
  match: {
    params: {
      id: string | undefined;
    };
  };
}

const TalkContainer: FC<Props> = ({
  match: {
    params: { id },
  },
}) => {
  const { selected, status } = useAppSelector(talksSelector);
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(getTalk(Number(id)));
  }, [dispatch]);

  if (status === "failed") {
    return <NotFound />;
  }

  if (!selected || status === "loading") {
    return <Loading />;
  }
  return <TalkPresenter selected={selected} />;
};

export default TalkContainer;
