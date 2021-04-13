import React, { useEffect, useState } from "react";
import { useAppDispatch, useAppSelector } from "../../app/hooks";
import { Redirect, RouteComponentProps } from "react-router-dom";
import { useSelector } from "react-redux";
import { show, Talk, talkStatus } from "./talkSlice";
import Loading from "../../modules/components/Loading";

interface Params {
  id: string | undefined;
}

export default ({ match }: RouteComponentProps<Params>) => {
  if (!match.params.id) {
    return <Redirect to="/404" />;
  }

  //TODO 상세 페이지의 코드가 너무 마음에 안들어. 이렇게 안할거 같은데.
  const [state, setState] = useState<Talk | null>(null);
  const dispatch = useAppDispatch();
  const { status } = useAppSelector(talkStatus);
  const getTalk = async () => {
    const { payload } = await dispatch(show(Number(match.params.id)));
    setState(payload.data);
  };

  useEffect(() => {
    getTalk();
  }, [dispatch]);

  return state === null ? (
    <Loading />
  ) : (
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
