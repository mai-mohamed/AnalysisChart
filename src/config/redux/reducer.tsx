import { combineReducers } from "redux";

import lessons from "../../modules/lessons/redux/reducer";
import loader from "../../shared/components/loader/redux/reducer"

export default combineReducers({
  lessons,
  loader
});
