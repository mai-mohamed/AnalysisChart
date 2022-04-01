
import {actionTypes} from "./types"
const initialState = {
  lessonsData: {},
};

export default function auth(state = initialState, action: any) {
    switch (action.type) {
      case actionTypes.get_lessons_data_response:
        return {
          ...state,
          lessonsData:action.payload
        };
      default:
        return state;
    }
}
