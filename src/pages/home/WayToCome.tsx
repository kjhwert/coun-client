import React, { FC } from "react";

interface Props {}

const WayToCome: FC<Props> = () => {
  return (
    <div>
      <h3 className="px-4 mt-10 font-semibold text-lg lg:pt-12 lg:text-xl mb-4">
        오시는 길
      </h3>
      <div className="flex justify-center items-center">{/*    Map    */}</div>
      <div className="w-full h-24" />
    </div>
  );
};

export default WayToCome;
