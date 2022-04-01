
export enum actionTypes {
  get_lessons_data = "get_lessons_data",
}

export interface ILessonsData {
  type: actionTypes.get_lessons_data;
  payload: any;
}
