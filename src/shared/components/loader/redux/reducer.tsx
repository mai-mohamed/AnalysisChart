
import {actionTypes} from "./types"
const initialState = {
  loading:false,
};

export default function auth(state = initialState, action: any) {
    switch (action.type) {
      case actionTypes.loader_action:
        return {
          ...state,
        loading:action.payload
        };
      default:
        return state;
    }
}
