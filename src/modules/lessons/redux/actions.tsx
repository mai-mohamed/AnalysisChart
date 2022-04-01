
import { actionTypes ,ILessonsData} from "./types";

export const getLessonsData = (payload:ILessonsData) => ({
  type: actionTypes.get_lessons_data,
  payload,
});

