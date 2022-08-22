import {
  GET_DATA,
  ICON_INDEX,
  STORE_MULTIPLE_DATA,
  LOADING,
  REPLACE,
} from "./action.js";

export const getdata = () => async (dispatch) => {
  const response = await fetch("https://randomuser.me/api/");

  const json = await response.json();
  dispatch({ type: GET_DATA, payload: json.results[0] });
  dispatch({ type: STORE_MULTIPLE_DATA, payload: json.results[0] });
  dispatch({ type: LOADING, payload: false });
};

export const iconIndex = (index) => ({
  type: ICON_INDEX,
  payload: index,
});
export const dataLoader = (data) => ({
  type: LOADING,
  payload: data,
});
export const dataReplace = (data) => ({
  type: REPLACE,
  payload: data,
});
