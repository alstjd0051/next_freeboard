import { COMPLETE_TODO, SHOW_ALL } from "../actions";

const initialState = "ALL";

export default function filter(previousState = initialState, action) {
  if (action.type === COMPLETE_TODO) {
    return "COMPLETE";
  }

  if (action.type === SHOW_ALL) {
    return "ALL";
  }
  return previousState;
}
