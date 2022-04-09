
import {actionTypes} from "./types"
const initialState = {
  lessonsData: [],
  schoolsData:[]
};

export default function auth(state = initialState, action: any) {
    switch (action.type) {
      case actionTypes.get_lessons_data_response:
        return {
          ...state,
          lessonsData:action.payload
        };
        case actionTypes.set_schools_data:
        return {
          ...state,
          schoolsData:action.payload
        };
      default:
        return state;
    }
}
