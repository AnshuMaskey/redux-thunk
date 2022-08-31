import { createSlice } from "@reduxjs/toolkit";
import { createAsyncThunk } from "@reduxjs/toolkit";

export const initialState = {
  users: [],
  user: {},
  httpErr: false,
  isLoading: false,
  activeIcon: 0,
};

export const getdata = createAsyncThunk("user/getdata", async () => {
  const response = await fetch("https://randomuser.me/api/")
    .then((data) => data.json())
    .then((user) => user.results[0])
    .then((userData) => {
      return {
        id: Date.now(),
        name: `${userData.name.first} ${userData.name.last}`,
        email: userData.email,
        date: userData.dob.date.slice(0, 10),
        address: ` ${userData.location.postcode}, ${userData.location.city}, ${userData.location.country}`,
        phone: userData.phone,
        password: userData.login.password,
        picture: userData.picture.large,
      };
    });

  return response;
  console.log(response);
});

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    iconIndex(state, { payload }) {
      state.activeIcon = payload;
    },
    dataLoader(state, { payload }) {
      state.isLoading = payload;
    },
    dataReplace(state, { payload }) {
      state.user = payload;
    },
    editData(state, { payload }) {
      state.id = payload;
    },
    deleteData(state, { payload }) {
      state.users = state.users.filter((user) => user.id !== payload);
      state.user = state.users[0];
    },
    updateData(state, { payload }) {
      state.users = state.users.map((user) =>
        user.id === payload ? state.user : user
      );
    },
    inputChange(state, { payload }) {
      state.user = { ...state.user, [payload.name]: payload.value };
    },
    userFirst(state, { payload }) {
      state.user = state.users[0];
    },
  },
  extraReducers: {
    [getdata.pending]: (state, { payload }) => {
      state.isLoading = true;
    },
    [getdata.rejected]: (state, action) => {
      state.isLoading = false;
      console.log(action.error);
      state.error = action.error.message;
    },
    [getdata.fulfilled]: (state, { payload }) => {
      state.isLoading = false;
      state.user = payload;
      state.users = [...state.users, payload];
    },
  },
});

export const {
  iconIndex,
  dataReplace,
  deleteData,
  editData,
  updateData,
  inputChange,
  userFirst,
} = userSlice.actions;

export default userSlice.reducer;
