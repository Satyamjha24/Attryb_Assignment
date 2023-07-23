import { ERROR, GETALL, LOADING } from "./actionTypes";

let initState = {
  marketData: [],
  loading: false,
  error: false,
};
export const reducer = (state = initState, { payload, type }) => {
  switch (type) {
    case GETALL: {
      return { ...state, marketData: payload, loading: false, error: false };
    }
    case LOADING: {
      return { ...state, loading: true, error: false };
    }
    case ERROR: {
      return { ...state, loading: false, error: true };
    }
    default: {
      return state;
    }
  }
};