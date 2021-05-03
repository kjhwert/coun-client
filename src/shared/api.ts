import axios from "axios";
import { BASE_URL } from "./common";

export const api = axios.create({
  baseURL: BASE_URL,
  headers: {
    "Content-type": "application/json",
  },
});
