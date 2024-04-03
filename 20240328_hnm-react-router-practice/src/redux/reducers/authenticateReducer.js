// import { createSlice } from "@reduxjs/toolkit";

let initialState = {
  id: "",
  password: "",
  authenticate: false,
};

function authenticateReducer(state = initialState, action) {
  let { type, payload } = action;
  switch (type) {
    case "LOGIN_SUCCESS":
      return {
        ...state,
        id: payload.id,
        password: payload.password,
        authenticate: true,
      };
    case "LOGOUT_SUCCESS":
      return {
        ...state,
        id: "",
        password: "",
        authenticate: false,
      };
    default:
      return { ...state };
  }
}

export default authenticateReducer;

// const authenticateSlice = createSlice({
//   name: "authenticate",
//   initialState,
//   reducers: {
//     getAllAuth(state, action) {
//       state.id = action.payload.id;
//       state.password = action.payload.password;
//       state.authenticate = true;
//     },
//     getSingleAuth(state, action) {
//       state.selectedItem = action.payload.data;
//     },
//   },
// });

// export const authenticateActions = authenticateSlice.actions;
// export default authenticateSlice.reducer;
