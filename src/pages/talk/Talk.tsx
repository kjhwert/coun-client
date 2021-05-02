import React, { FC, useEffect, useState } from "react";
import { useAppDispatch, useAppSelector } from "../../app/hooks";
import Loading from "../../shared/components/Loading";
import { talksSelector } from "../../features/talk/talkSlice";
import { ITalk } from "../../features/talk/talk";
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
  const { talks } = useAppSelector(talksSelector);
  const [state, setState] = useState<ITalk | null>(null);
  const dispatch = useAppDispatch();

  const getTalkWhenIsNotListed = async () => {
    const talkId = Number(id);
    const talk = talks.find(({ id }) => id === talkId);
    if (talk) {
      return setState(talk);
    }

    //TODO 이렇게 쓰는게 과연 맞을까..?
    const { payload } = await dispatch(getTalk(Number(id)));
    setState(payload);
  };

  useEffect(() => {
    getTalkWhenIsNotListed();
  }, [dispatch]);

  if (state === null) {
    return <Loading />;
  }

  return (
    <div className="flex justify-center my-16">
      <div style={{ width: "1000px" }} className="flex items-center flex-col">
        <h1 className="font-bold text-2xl mb-8">{state.title}</h1>
        {state.youtubeUrl && (
          <div dangerouslySetInnerHTML={{ __html: state.youtubeUrl }}></div>
        )}
        {state.description && (
          <p
            dangerouslySetInnerHTML={{ __html: state.description }}
            className="mt-8"
          />
        )}
      </div>
    </div>
  );
};

export default Talk;
