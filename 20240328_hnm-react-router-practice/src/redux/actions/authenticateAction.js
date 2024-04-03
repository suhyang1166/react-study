import { authenticateActions } from "../reducers/authenticateReducer";

function login(id, password) {
  return (dispatch, getState) => {
    dispatch({ type: "LOGIN_SUCCESS", payload: { id, password } });
    // dispatch(authenticateActions.getAllAuth({ data }));
  };
}

function logout() {
  return (dispatch, getState) => {
    dispatch({ type: "LOGOUT_SUCCESS" });
  };
}

export const authenticateAction = { login, logout };
