// import { createStore, applyMiddleware, compose } from "redux";
// import { reducer, initialState } from "./reducer.js";
// import thunk from "redux-thunk";

// export const configstore = () => {
//   const middleware = [thunk];

//   const store = createStore(
//     reducer,
//     initialState,
//     compose(
//       window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__(
//         applyMiddleware(...middleware)
//       )
//     )
//   );
//   return store;
// };
import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./userSlice";

export const store = configureStore({
  reducer: {
    users: userReducer,
  },
});
