import { login, logout, register } from "./actionTypes";
let initState = {
  isAuth: false,
  token: "",
  loading: false,
};
export const reducer = (state = initState, { payload, type }) => {

  switch (type) {
    case register: {
      return {
        ...state,
        isAuth: false,
        loading: false,
      };
    }
    case login: {
      return {
        ...state,
        isAuth: true,
        token: payload,
        loading: false,
      };
    }
    case logout:{
      return {
        ...state,
        isAuth:false,
        token:'',
        loading: false
      }
    }
    default: {
      return state;
    }
  }
};
