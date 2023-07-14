"use client";

import axios from "axios";
import { useRouter } from "next/navigation";
import { StudentApiRoutesEnum, jwtToken } from "./Constants";
import Cookies from "js-cookie";
import jwt from "jsonwebtoken";

async function refreshJwt() {
  await axios
    .get(StudentApiRoutesEnum.refresh)
    .then((resp) => {
      localStorage.setItem(jwtToken, resp.data.token);
    })
    .catch((err) => {});
}
// TODO Test this properly
export default function AxiosWrapper() {
  let accessToken = "";
  try {
    accessToken = localStorage.getItem(jwtToken) ?? null;
  } catch (err) {}
  const apiService = axios.create({
    timeout: 6000,
    headers: {
      Authorization: "Bearer " + accessToken,
      "Content-Type": "application/json",
    },
  });
  return apiService;
}
