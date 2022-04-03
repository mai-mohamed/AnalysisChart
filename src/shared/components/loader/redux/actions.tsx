
import { actionTypes } from "./types";

export const loaderAction = (payload:boolean) => ({
  type: actionTypes.loader_action,
  payload
});


