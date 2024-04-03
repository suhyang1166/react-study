// import { createStore, applyMiddleware } from "redux";
import { composeWithDevTools } from "@redux-devtools/extension";
import { thunk } from "redux-thunk";
// import rootReducer from "./reducers";
import { configureStore } from "@reduxjs/toolkit";
import productReducer from "./reducers/productSlice";
import authenticateReducer from "./reducers/authenticateReducer";

// let store = createStore(
//   rootReducer,
//   composeWithDevTools(applyMiddleware(thunk))
// );
// combinerducer x
// thunk x
// applyMiddleware x
// composeWithDevTools x

const store = configureStore({
  reducer: {
    auth: authenticateReducer,
    product: productReducer,
  },
});

export default store;
