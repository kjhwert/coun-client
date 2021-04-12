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
