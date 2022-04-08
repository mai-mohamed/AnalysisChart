
import {ILessons} from "../../../shared/models/lessons.model";
import {selectOptions} from "../../../shared/models/selectOptions.model";
import { actionTypes } from "./types";

export const getLessonsData = () => ({
  type: actionTypes.get_lessons_data,
});


export const getLessonsResponse = (payload:ILessons) => ({
  type: actionTypes.get_lessons_data_response,
  payload
});

export const setSchoolsData = (payload:selectOptions[]) => ({
  type: actionTypes.set_schools_data,
  payload
});