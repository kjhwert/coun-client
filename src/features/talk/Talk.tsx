import React, { useEffect, useState } from "react";
import { useAppDispatch, useAppSelector } from "../../app/hooks";
import { index, moreIndex, talkStatus } from "./talkSlice";
import {
  bookReview,
  growthTalk,
  growthWrite,
} from "../../assets/TalkCategories";
import {
  getDay,
  getMonth,
  TALK_GROWTH,
  TALK_REVIEW,
  TALK_WRITE,
} from "../../modules/common";
import { Link } from "react-router-dom";

export default () => {
  const { data, paging } = useAppSelector(talkStatus);
  const dispatch = useAppDispatch();
  const [state, setState] = useState({
    page: 1,
    type: TALK_GROWTH,
  });

  const getTalks = (page: number, type: number) => {
    dispatch(index({ page, type }));
    setState({ page, type });
  };

  const getMoreTalks = () => {
    const type = state.type;
    const page = state.page + 1;
    dispatch(moreIndex({ page, type }));
    setState({ page, type });
  };

  useEffect(() => {
    dispatch(index({ page: 1, type: TALK_GROWTH }));
  }, [dispatch]);

  return (
    <div className="w-full flex items-center flex-col relative">
      <div className="flex mt-4 mb-8 shadow-2xl bg-white flex-shrink-0 cursor-pointer">
        <div
          className="mr-2 flex items-center justify-center shadow-xl opacity-75"
          onClick={() => {
            getTalks(1, TALK_GROWTH);
          }}
          style={{
            backgroundImage: `url(${growthTalk})`,
            width: 200,
            height: 150,
          }}
        >
          <h1 className="text-2xl font-bold text-white">성장토크</h1>
        </div>
        <div
          className="mr-2 flex items-center justify-center shadow-xl opacity-75"
          onClick={() => {
            getTalks(1, TALK_REVIEW);
          }}
          style={{
            backgroundImage: `url(${bookReview})`,
            width: 200,
            height: 150,
          }}
        >
          <h1 className="text-2xl font-bold text-white">북리뷰</h1>
        </div>
        <div
          className="flex items-center justify-center shadow-xl opacity-75"
          onClick={() => {
            getTalks(1, TALK_WRITE);
          }}
          style={{
            backgroundImage: `url(${growthWrite})`,
            width: 200,
            height: 150,
          }}
        >
          <h1 className="text-2xl font-bold text-white">성장쓰기</h1>
        </div>
      </div>

      <div className="flex flex-wrap ml-4" style={{ width: 1200 }}>
        {data.map((data) => (
          <Link to={`/talk/${data.id}`} key={data.id} className="relative">
            <div className="mr-4 mb-4 cursor-pointer" style={{ width: 380 }}>
              <img
                src={data.thumbnail}
                style={{ height: 225 }}
                className="object-cover w-full rounded"
                alt={`${data.id}`}
              />
              <h1 className="font-bold text-16 mt-2 text-center px-4">
                {data.title}
              </h1>
              <div
                className="absolute top-0 right-0 rounded-full
              bg-main-400 flex flex-col w-10 h-10 items-center mr-8 mt-4 pt-1"
              >
                <span className="text-white text-12">
                  {getMonth(data.createdAt)},
                </span>
                <span className="text-white text-12">
                  {getDay(data.createdAt)}
                </span>
              </div>
            </div>
          </Link>
        ))}
      </div>
      <div className="mt-8 mb-8">
        {paging.hasNextPage && (
          <span
            onClick={getMoreTalks}
            className="p-4 text-14 text-main-300 cursor-pointer"
          >
            more
          </span>
        )}
      </div>
    </div>
  );
};
