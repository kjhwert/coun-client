import React from "react";
import { processes } from "../../data/process";
import Fields from "./Fields";
import center from "../../assets/img/center.jpg";

const container = "flex flex-col lg:w-web mx-auto lg:pt-20 lg:px-20 px-4 mt-10";
const introduce = "flex flex-col lg:flex-row";

const Home = () => {
  return (
    <div>
      <div className={container}>
        <div className={introduce}>
          <div className="lg:w-1/2 lg:self-center lg:py-0 pb-6 px-4">
            <h1 className="font-semibold text-lg">
              동탄가정심리상담소는
              <br />
              당신의 벗이 되어드리고 싶습니다.
            </h1>
            <br />
            <p className="text-sm">
              저희 동탄가정심리상담소는 동탄에서 가장 오래된 상담소로서 창립
              이래 많은 분들에게 희망을 주고 새로운 삶을 찾아 활기찬 미래를
              열어가는데 함께했으며 앞으로도 초심을 잃지 않는 진실한 마음으로
              상담소의 역할에 충실할 것을 약속 드립니다.
              <br />
              <br />
              상담은 어떤 문제만이 있어서 받는 것은 아닙니다. 내면의 성장이
              이루어질 때 진정한 자기를 찾고 자기주체의 삶을 살아 갈수 있는
              것이므로 자아실현은 건강한 자아가 건강한 자신을 살아갈 수 있게
              되는 것이고 상담은 그러한 자기를 살아 갈 수 있도록 돕는 역할을
              하는 것입니다.
              <br />
              <br />
              저희 기관은 불안,공포,갈등으로 인해 혼돈스러운 내면의 문제들을
              함께 나누며 삶이 의미있고 행복한 미래를 열어 갈 수 있도록 돕고자
              합니다.
            </p>
          </div>
          <img src={center} alt="img" className="w-full lg:w-1/2" />
        </div>
      </div>
      <div className="flex flex-col lg:w-web mx-auto lg:p-24 mt-10">
        <div className="w-full flex flex-wrap lg:flex-nowrap justify-center lg:my-4">
          {processes.map((process, idx) => (
            <div
              className={`w-36 lg:w-1/4 p-4 lg:mr-4 lg:mb-4 ${idx % 2 === 0 && "mr-4"} ${
                idx <= 1 && "mb-4"
              } bg-white shadow-lg border border-main-100 flex flex-col items-center rounded`}
              key={idx}
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
      <Fields />
      <h3 className="px-4 mt-10 font-semibold text-lg lg:pt-12 lg:text-xl mb-4">
        오시는 길
      </h3>
      <div className="flex justify-center items-center">{/*    Map    */}</div>
      <div className="w-full h-24" />
    </div>
  );
};

export default Home;
