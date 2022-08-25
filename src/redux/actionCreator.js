// import { Error } from "@mui/icons-material";
import {
  GET_DATA,
  ICON_INDEX,
  LOADING,
  REPLACE,
  ID_UPDATE,
  DELETE,
  UPDATE,
  INPUT_CHANGE,
} from "./action.js";

export const getdata = (setError) => async (dispatch) => {
  try {
    const response = await fetch("https://randomuser.me/api/");
    const json = await response.json();
    const data = json.results[0];
    console.log(data);
    setError("");
    dispatch({
      type: GET_DATA,
      payload: {
        id: Date.now(),
        name: `${data.name.first} ${data.name.last}`,
        email: data.email,
        date: data.dob.date.slice(0, 10),
        address: ` ${data.location.postcode}, ${data.location.city}, ${data.location.country}`,
        phone: data.phone,
        password: data.login.password,
        picture: data.picture.large,
      },
    });
    dispatch({ type: LOADING, payload: false });
  } catch (error) {
    dispatch({ type: LOADING, payload: false });
    setError("Data not found! Please try again");
    console.log(error.response.ok);
  }
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
export const editData = (id) => ({
  type: ID_UPDATE,
  payload: id,
});

export const deleteData = (data) => ({
  type: DELETE,
  payload: data,
});

export const updateData = (id) => ({
  type: UPDATE,
  payload: id,
});

export const inputChange = (data) => ({
  type: INPUT_CHANGE,
  payload: data,
});
