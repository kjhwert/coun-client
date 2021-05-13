import React, { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../../app/hooks";
import {
  getInterviews,
  interviewSelector,
} from "../../features/interview/interviewSlice";
import List from "../../shared/components/List";
import Pagination from "../../shared/components/Pagination";

const InterviewList = () => {
  const dispatch = useAppDispatch();
  const { interviews, totalCount, pagination } = useAppSelector(
    interviewSelector
  );

  useEffect(() => {
    dispatch(getInterviews(pagination.page));
  }, [dispatch]);

  return (
    <div className="w-full flex items-center flex-col relative pt-8">
      <List link="interview" items={interviews} />
      <Pagination
        hasMorePage={totalCount > interviews.length}
        onClick={() => {
          dispatch(getInterviews(pagination.page + 1));
        }}
      />
    </div>
  );
};

export default InterviewList;
