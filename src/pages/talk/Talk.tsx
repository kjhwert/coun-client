import React, { FC, useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../../app/hooks";
import Loading from "../../shared/components/Loading";
import { talksSelector, onSelected } from "../../features/talk/talkSlice";
import { getTalk } from "../../features/talk/talk.actions";

interface Props {
  match: {
    params: {
      id: string | undefined;
    };
  };
}

const Talk: FC<Props> = ({
  match: {
    params: { id },
  },
}) => {
  const { selected } = useAppSelector(talksSelector);
  const dispatch = useAppDispatch();

  useEffect(() => {
    //TODO 리스트에 데이터가 있다면 API request를 보낼 필요가 없는데.. 어떻게 구현할 수 있지?
    dispatch(getTalk(Number(id)));
  }, [dispatch]);

  if (selected === undefined) {
    return <Loading />;
  }

  return (
    <div className="flex justify-center my-16">
      <div style={{ width: "1000px" }} className="flex items-center flex-col">
        <h1 className="font-bold text-2xl mb-8">{selected.title}</h1>
        {selected.youtubeUrl && (
          <div dangerouslySetInnerHTML={{ __html: selected.youtubeUrl }}></div>
        )}
        {selected.description && (
          <p
            dangerouslySetInnerHTML={{ __html: selected.description }}
            className="mt-8"
          />
        )}
      </div>
    </div>
  );
};

export default Talk;
