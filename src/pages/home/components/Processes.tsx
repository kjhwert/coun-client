import React, { FC } from "react";
import { processes } from "../../../data/process";
import { MOBILE_PADDING } from "../../../shared/styles";

interface Props {}

const Processes: FC<Props> = () => {
  return (
    <div className="flex flex-col lg:w-web mx-auto lg:p-24 mt-10">
      <div
        className={`w-full grid gap-2 grid-cols-2 ${MOBILE_PADDING} lg:flex lg:flex-nowrap lg:justify-center lg:my-4`}
      >
        {processes.map((process) => (
          <div
            className={`lg:w-1/4 p-4 lg:mr-4 lg:mb-4 bg-white shadow-lg border border-main-100 flex flex-col items-center rounded`}
            key={process.title}
          >
            <img src={process.img} alt="img" className="w-24" />
            <span className="text-sm lg:text-lg text-center">
              {process.title}
            </span>
            <p className="text-xs lg:mt-2 mt-1 lg:text-sm lg:w-4/6 text-center">
              {process.content}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Processes;
