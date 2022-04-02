import { axiosInstance } from "../../../config/interceptor/interceptor";

export const getLessonsDataRequest = async () =>
  await axiosInstance.get(`/data`);
