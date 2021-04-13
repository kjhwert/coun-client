import React, { useState } from "react";
import ReactDatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

const inputStyle = `focus:outline-none text-sm focus:placeholder-transparent rounded-none
                        mb-6 border-b border-main-200 p-2 placeholder-main-200`;

const radioStyle = "text-12 flex items-center mr-1";

const reservableTime = [
  "10:00",
  "11:00",
  "12:00",
  "14:00",
  "15:00",
  "16:00",
  "17:00",
  "18:00",
  "19:00",
  "20:00",
];

const fields = [
  "개인상담",
  "부부상담",
  "가족상담",
  "아동상담",
  "청소년상담",
  "기타",
];

interface Reserve {
  field: number;
  date: Date;
  time: string;
  name: string;
  phone: string;
  place: number;
  title: string;
  description: string;
}

export default () => {
  const [state, setState] = useState<Reserve>({
    field: 0,
    date: new Date(),
    time: "",
    name: "",
    phone: "",
    place: 0,
    title: "",
    description: "",
  });

  const reserve = () => {
    console.log(state);
  };

  return (
    <div className="flex w-full justify-center py-20">
      <div className="flex flex-col bg-white rounded">
        <h1 className="text-center font-semibold lg:text-lg text-main-400 mb-10">
          상담예약
        </h1>
        <h6 className="lg:text-sm mb-10">
          *온라인 예약이 불편하신 분은{" "}
          <a href="tel:031-613-6565" className="text-blue-600">
            031-613-6565
          </a>
          로 전화예약 하시기 바랍니다.
        </h6>
        <input
          type="text"
          className={inputStyle}
          placeholder="성함 *"
          value={state.name}
          onChange={(e) => {
            setState({ ...state, name: e.target.value });
          }}
        />
        <input
          type="number"
          className={inputStyle}
          placeholder="연락처 *"
          value={state.phone}
          onChange={(e) => {
            setState({ ...state, phone: e.target.value });
          }}
        />
        <ReactDatePicker
          onChange={(date: Date) => {
            setState({ ...state, date: date });
          }}
          selected={state.date}
          dateFormat="yyyy-MM-dd"
          placeholderText="상담일자 *"
          className="focus:outline-none text-sm focus:placeholder-transparent rounded-none
                        border-b border-main-200 p-2 placeholder-main-200 w-full"
        />
        <div className="flex flex-col my-6">
          <h6 className="lg:text-xs mb-1">상담시간을 선택해주세요. *</h6>
          {reservableTime.map((time, idx) => (
            <label htmlFor={time} className={radioStyle} key={idx}>
              <input
                type="radio"
                name="time"
                id={time}
                onChange={() => {
                  setState({ ...state, time: time });
                }}
                className="mr-1"
              />
              {time}
            </label>
          ))}
        </div>
        <div className="flex flex-col mb-6">
          <h6 className="lg:text-xs mb-1">상담분야를 선택해주세요. *</h6>
          {fields.map((field, idx) => (
            <label htmlFor={field} className={radioStyle} key={idx}>
              <input
                type="radio"
                name="field"
                id={field}
                onChange={() => {
                  setState({ ...state, field: idx + 1 });
                }}
                className="mr-1"
              />
              {field}
            </label>
          ))}
        </div>
        <div className="flex flex-col mb-6">
          <h6 className="lg:text-xs mb-1">장소를 선택해주세요. *</h6>
          <div className="flex items-center">
            <label htmlFor="dongtan" className={radioStyle}>
              <input
                type="radio"
                name="place"
                id="dongtan"
                className="mr-1"
                onChange={() => {
                  setState({ ...state, place: 7 });
                }}
              />
              동탄상담소
            </label>
            <a
              href="http://kko.to/lsWPDyzDH"
              rel="noopener noreferrer"
              target="_blank"
              className="text-blue-600 text-10"
            >
              위치 확인
            </a>
          </div>
          <div className="flex items-center">
            <label htmlFor="suwon" className={radioStyle}>
              <input
                type="radio"
                name="place"
                id="suwon"
                className="mr-1"
                onChange={() => {
                  setState({ ...state, place: 8 });
                }}
              />
              수원상담소
            </label>
            <a
              href="http://kko.to/grpeDyzYM"
              rel="noopener noreferrer"
              target="_blank"
              className="text-blue-600 text-10"
            >
              위치 확인
            </a>
          </div>
        </div>
        <input
          type="text"
          className={inputStyle}
          placeholder="제목 (선택사항)"
          value={state.title}
          onChange={(e) => {
            setState({ ...state, title: e.target.value });
          }}
        />
        <textarea
          className="focus:outline-none text-sm border border-main-200
                        focus:placeholder-transparent w-full h-24 p-2 mb-6 placeholder-main-200 mb-2"
          placeholder="상담내용 (선택사항)"
          value={state.description}
          onChange={(e) => {
            setState({ ...state, description: e.target.value });
          }}
        />
        <button
          className="bg-main-400 text-white text-base py-2 rounded"
          onClick={reserve}
        >
          예약하기
        </button>
      </div>
    </div>
  );
};
