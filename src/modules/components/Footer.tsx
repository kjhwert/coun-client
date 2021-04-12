import React from "react";

const Footer = () => {
  return (
    <div className="flex bg-main-400 flex flex-col text-white text-center text-sm lg:mb-0 py-4 leading-5">
      <span>동탄가정심리상담소</span>
      <span>사업자번호: 124-50-71937 대표자:김여환</span>
      <span>
        주소: 경기도 화성시 반송동 43-6번지
        <br />
        골드프라자 305호 (동탄센트럴파크 옆)
      </span>
      <span>
        COPYRIGHT©Dongtan Family Counseling Center. ALL RIGHTS RESERVED.
      </span>
      <a href="tel:031-613-6565">TEL: 031-613-6565</a>
    </div>
  );
};

export default Footer;
