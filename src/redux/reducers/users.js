import React from "react";
import { GET_USERS_FAIL, GET_USERS_FULFILLE, GET_USERS_PENDING, GET_USERS_STATR, GET_USERS_SUCCESS } from "../actions";

const initialState = {
  loading: false,
  data: [],
  error: null,
};

export default function users(state = initialState, action) {
  if (action.type === GET_USERS_STATR || action.type === GET_USERS_PENDING) {
    return {
      ...state,
      loading: true,
      error: null,
    };
  }

  if (action.type === GET_USERS_FULFILLE) {
    return {
      ...state,
      loading: false,
      data: action.data,
    };
  }

  if (action.type === GET_USERS_FAIL) {
    return {
      ...state,
      loading: false,
      error: action.error,
    };
  }

  return state;
}
