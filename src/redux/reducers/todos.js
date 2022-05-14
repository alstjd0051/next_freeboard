import { ADD_TODO, COMPLETE_TODO } from "../actions";

const initialState = [];

export default function todos(previousState = initialState, action) {
  if (action.type === ADD_TODO) {
    return [...previousState, { text: action.text, done: false }];
  }

  return previousState;
}
