import React, { useCallback, useEffect, useState } from "react";
import ReactDatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { api } from "../../modules/api";
import { RESERVE_FIELDS } from "../../modules/common";
import { HttpStatus } from "../../modules/httpStatus";
import { notify } from "../../modules/notify";
import { useHistory } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../../app/hooks";
import { codeStatus, index } from "../code/codeSlice";
import Loading from "../../modules/components/Loading";
import { create } from "./reserveSlice";

const inputStyle = `focus:outline-none text-sm focus:placeholder-transparent rounded-none
                        mb-6 border-b border-main-200 p-2 placeholder-main-200`;

const radioStyle = "text-14 flex items-center mr-1";

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

interface Reserve {
  fieldId: number;
  date: Date;
  time: string;
  name: string;
  phone: string;
  placeId: number;
  title: string;
  description: string;
}

const initState = {
  fieldId: 0,
  date: new Date(),
  time: "",
  name: "",
  phone: "",
  placeId: 0,
  title: "",
  description: "",
};

export default () => {
  const { status, data: fields } = useAppSelector(codeStatus);
  const dispatch = useAppDispatch();
  const history = useHistory();
  const [state, setState] = useState<Reserve>(initState);

  const reserve = async () => {
    const { date, time, ...rest } = state;
    const reserveDate = date;
    reserveDate.setHours(+time.substr(0, 2));
    reserveDate.setMinutes(0);
    reserveDate.setSeconds(0);

    if (!rest.name) return notify.warning("성함을 입력해주세요.");
    if (!rest.phone) return notify.warning("연락처를 입력해주세요.");
    if (!time) return notify.warning("시간을 선택해주세요.");
    if (!rest.fieldId) return notify.warning("상담분야를 선택해주세요.");
    if (!rest.placeId) return notify.warning("상담장소를 선택해주세요.");
    if (!rest.title) return notify.warning("제목을 입력해주세요.");
    if (!rest.description) return notify.warning("내용을 입력해주세요.");

    const result = { ...rest, reserveDate };
    const {
      payload: { statusCode, message },
    } = await dispatch(create(result));
    if (statusCode !== HttpStatus.OK) {
      return notify.warning(message);
    }
    /**
     * QUESTION
     * 1. request 이후 상태변경은 어떻게 진행하는지. ( 데이터 변경, 페이지 이동, 알림 메시지 등 )
     * */
    notify.info("예약접수 되었습니다.");
    setState(initState);
    history.push("/");
  };

  useEffect(() => {
    dispatch(index(RESERVE_FIELDS));
  }, []);

  if (status === "loading") {
    return <Loading />;
  }

  return (
    <div className="flex w-full justify-center py-20">
      <div className="flex flex-col bg-white rounded px-4 lg:px-0">
        <h1 className="text-center font-semibold text-lg text-main-400 mb-10">
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
          <h6 className="mb-1">상담시간을 선택해주세요. *</h6>
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
          <h6 className="mb-1">상담분야를 선택해주세요. *</h6>
          {fields.map(({ id, description }) => (
            <label htmlFor={description} className={radioStyle} key={id}>
              <input
                type="radio"
                name="field"
                id={`${id}`}
                onChange={() => {
                  setState({ ...state, fieldId: id });
                }}
                className="mr-1"
              />
              {description}
            </label>
          ))}
        </div>
        <div className="flex flex-col mb-6">
          <h6 className="mb-1">장소를 선택해주세요. *</h6>
          <div className="flex items-center">
            <label htmlFor="dongtan" className={radioStyle}>
              <input
                type="radio"
                name="place"
                id="dongtan"
                className="mr-1"
                onChange={() => {
                  setState({ ...state, placeId: 9 });
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
                  setState({ ...state, placeId: 10 });
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
          placeholder="제목 *"
          value={state.title}
          onChange={(e) => {
            setState({ ...state, title: e.target.value });
          }}
        />
        <textarea
          className="focus:outline-none text-sm border border-main-200
                        focus:placeholder-transparent w-full h-24 p-2 mb-6 placeholder-main-200 mb-2"
          placeholder="상담내용 *"
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
