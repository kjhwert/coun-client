import React from "react";
import BannerImg from "../../assets/img/banner.jpg";

const Banner = () => {
  return (
    <div>
      <div
        className="w-full bg-cover bg-center lg:h-web h-mobile"
        style={{ backgroundImage: `url(${BannerImg})` }}
      >
        <div
          className="flex justify-center items-center w-full h-full text-white
                text-3xl lg:text-6xl font-semibold header-fade-in invisible"
        >
          동탄가정심리상담소
        </div>
      </div>
    </div>
  );
};

export default Banner;
