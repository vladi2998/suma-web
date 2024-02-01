import axiosConfigInstance from "@/config/axiosCofig";
import { log } from "console";

export const getUser = async (data: any) => {
  try {
    const request = await axiosConfigInstance.post("/token/", data);
    return request;
  } catch (err) {
    console.log("error: ", err);
  }
};

export const registerStudent = async (data: any) => {
  try {
    const request = await axiosConfigInstance.post("/register/student/", data);
    return request;
  } catch (err) {
    console.log("error: ", err);
  }
};
