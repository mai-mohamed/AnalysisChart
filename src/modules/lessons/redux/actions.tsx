
import {ILessons} from "../../../shared/models/lessons.model";
import { actionTypes } from "./types";

export const getLessonsData = () => ({
  type: actionTypes.get_lessons_data,
});


export const getLessonsResponse = (payload:ILessons) => ({
  type: actionTypes.get_lessons_data_response,
  payload
});