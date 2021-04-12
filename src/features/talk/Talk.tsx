import React, { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../../app/hooks";
import { index, talkIndex, talkStatus } from "./talkSlice";

export default () => {
  const { status } = useAppSelector(talkStatus);
  const talks = useAppSelector(talkIndex);
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(index(1));
  }, [dispatch]);

  return <div></div>;
};
