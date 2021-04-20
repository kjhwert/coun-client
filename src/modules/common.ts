export const BASE_URL = "http://localhost:3001/";

export const months = [
  "Jan",
  "Feb",
  "Mar",
  "Apr",
  "May",
  "Jun",
  "Jul",
  "Aug",
  "Sept",
  "Oct",
  "Nov",
  "Dec",
];

export const getMonth = (value: Date): string => {
  const date = new Date(value);
  const month = date.getMonth();
  return months[month];
};

export const getDay = (value: Date): string => {
  const date = new Date(value);
  const day = date.getDate();
  return `${day}`;
};

export const TALK_GROWTH = 11;
export const TALK_REVIEW = 12;
export const TALK_WRITE = 13;

export type ReserveFields = 1;
export type ReservePlaces = 2;
export const RESERVE_FIELDS = 1;
export const RESERVE_PLACE = 2;
