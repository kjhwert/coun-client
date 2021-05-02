import React, { FC } from "react";

interface Props {
  backgroundImageUrl: string;
  title: string;
  onClick: () => void;
}

const TalkTypeCard: FC<Props> = ({ backgroundImageUrl, title, onClick }) => {
  return (
    <div
      className="mr-2 flex items-center justify-center shadow-xl opacity-75"
      onClick={onClick}
      style={{
        backgroundImage: `url(${backgroundImageUrl})`,
        width: 200,
        height: 150,
      }}
    >
      <h1 className="text-2xl font-bold text-white">{title}</h1>
    </div>
  );
};

export default TalkTypeCard;
