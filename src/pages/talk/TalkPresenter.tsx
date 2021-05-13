import React, { FC } from "react";
import { ITalk } from "../../features/talk/talkSlice";

interface Props {
  selected: ITalk;
}

const TalkPresenter: FC<Props> = ({ selected }) => {
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

export default TalkPresenter;
