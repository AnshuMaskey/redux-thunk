import {
  GET_DATA,
  REPLACE,
  ICON_INDEX,
  LOADING,
  STORE_MULTIPLE_DATA,
} from "./action";

export const initialState = {
  users: [],
  user: {},
  isLoading: false,
  activeIcon: 0,
};

export const reducer = (state = initialState, { payload, type }) => {
  switch (type) {
    case GET_DATA:
      console.log(payload, "paylo");
      return {
        ...state,
        user: payload,
      };
    case LOADING:
      console.log(payload, "paylo");
      return {
        ...state,
        isLoading: payload,
      };
    case REPLACE:
      console.log(payload, "user replcae");
      return {
        ...state,
        user: payload,
      };
    case STORE_MULTIPLE_DATA:
      console.log(payload, "paylo");
      return {
        ...state,
        users: [...state.users, payload],
      };
    case ICON_INDEX:
      // console.log(payload);
      return {
        ...state,
        activeIcon: payload,
      };
    default:
      return state;
  }
};
