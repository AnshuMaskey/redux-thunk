// import {
//   GET_DATA,
//   REPLACE,
//   ICON_INDEX,
//   LOADING,
//   ID_UPDATE,
//   DELETE,
//   UPDATE,
//   INPUT_CHANGE,
//   USER_FIRST,
// } from "./action";

// export const initialState = {
//   users: [],
//   user: {},

//   isLoading: false,
//   activeIcon: 0,
// };

// export const reducer = (state = initialState, { payload, type }) => {
//   switch (type) {
//     case GET_DATA:
//       // console.log(payload, "paylo");
//       return {
//         ...state,
//         user: payload,
//         users: [...state.users, payload],
//       };
//     case LOADING:
//       // console.log(payload, "paylo");
//       return {
//         ...state,
//         isLoading: payload,
//       };
//     case REPLACE:
//       // console.log(payload, "user replcae");
//       return {
//         ...state,
//         user: payload,
//       };
//     case USER_FIRST:
//       // console.log(payload, "user replcae");
//       return {
//         ...state,
//         user: { ...state.users[0] },
//       };
//     case ICON_INDEX:
//       // console.log(payload);
//       return {
//         ...state,
//         activeIcon: payload,
//       };
//     case ID_UPDATE:
//       // console.log(payload, "EDIT");
//       return {
//         ...state,
//         id: payload,
//       };

//     case DELETE:
//       // console.log(payload, "reducer  wala delete");
//       console.log(state, "state old");
//       return {
//         ...state,

//         users: state.users.filter((user) => user.id !== payload),
//         user: { ...state.users[0] },
//       };
//     case UPDATE:
//       // console.log(state.user, "update");
//       return {
//         ...state,
//         users: state.users.map((user) =>
//           user.id === payload ? state.user : user
//         ),
//       };
//     case INPUT_CHANGE:
//       // console.log(payload, "input");
//       return {
//         ...state,
//         user: { ...state.user, [payload.name]: payload.value },
//       };

//     default:
//       return state;
//   }
// };
