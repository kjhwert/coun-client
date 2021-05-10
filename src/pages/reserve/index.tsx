import React, { useEffect, useState } from "react";
import ReactDatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { notify } from "../../shared/notify";
import { useAppDispatch, useAppSelector } from "../../app/hooks";
import { codeStatus, getCodes } from "../../features/code/codeSlice";
import Loading from "../../shared/components/Loading";
import { RESERVE_FIELDS, RESERVE_PLACES } from "../../shared/code";
import { api } from "../../shared/api";

const inputStyle = `focus:outline-none text-sm focus:placeholder-transparent rounded-none
                        mb-6 border-b border-main-200 p-2 placeholder-main-200`;

const radioStyle = "text-14 flex items-center mr-1";

interface ReservableTime {
  name: string;
  value: number;
}

const reservableTime: ReservableTime[] = [
  { name: "10:00", value: 10 },
  { name: "11:00", value: 11 },
  { name: "12:00", value: 12 },
  { name: "13:00", value: 13 },
  { name: "14:00", value: 14 },
  { name: "15:00", value: 15 },
  { name: "16:00", value: 16 },
  { name: "17:00", value: 17 },
  { name: "18:00", value: 18 },
  { name: "19:00", value: 19 },
  { name: "20:00", value: 20 },
];

interface Reserve {
  fieldId: number;
  date: Date;
  time: number;
  name: string;
  phone: string;
  placeId: number;
  title: string;
  description: string;
}

const initState = {
  fieldId: 0,
  date: new Date(),
  time: 0,
  name: "",
  phone: "",
  placeId: 0,
  title: "",
  description: "",
};

const Index = () => {
  const { status, fields } = useAppSelector(codeStatus);
  const dispatch = useAppDispatch();
  const [state, setState] = useState<Reserve>(initState);

  const reserve = async () => {
    const { date, time, ...rest } = state;
    const reserveDate = date;
    reserveDate.setHours(time);
    reserveDate.setMinutes(0);
    reserveDate.setSeconds(0);

    if (!rest.name) return notify.warning(["성함을 입력해주세요."]);
    if (!rest.phone) return notify.warning(["연락처를 입력해주세요."]);
    if (!time) return notify.warning(["시간을 선택해주세요."]);
    if (!rest.fieldId) return notify.warning(["상담분야를 선택해주세요."]);
    if (!rest.placeId) return notify.warning(["상담장소를 선택해주세요."]);
    if (!rest.title) return notify.warning(["제목을 입력해주세요."]);
    if (!rest.description) return notify.warning(["내용을 입력해주세요."]);

    const {
      data: { statusCode, message },
    } = await api.post("reserve", {
      ...rest,
      reserveDate,
    });
    if (statusCode === 201) {
      notify.info(message);
      return setState(initState);
    }

    notify.warning(message);
  };

  useEffect(() => {
    dispatch(getCodes(RESERVE_FIELDS));
    dispatch(getCodes(RESERVE_PLACES));
  }, [dispatch]);

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
          {reservableTime.map(({ name, value }, idx) => (
            <label htmlFor={name} className={radioStyle} key={idx}>
              <input
                type="radio"
                name="time"
                id={name}
                onChange={() => {
                  setState({ ...state, time: value });
                }}
                className="mr-1"
              />
              {name}
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

export default Index;
