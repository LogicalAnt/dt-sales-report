import Axios from "axios";
import { AUTHENTICATE } from "./types";

interface PayloadProps {
  authStatus: boolean;
  jwt_token: string;
  error: object;
}

export const login = ({ loginCredentials, history }: any) => (
  dispatch: Function
) => {
  Axios.post(
    "http://frontend.interview.dingi.work/user/login/",
    loginCredentials
  )
    .then((response) => {
      const data = response.data;

      //call reducer
      dispatch({
        type: AUTHENTICATE,
        payload: { ...data, authStatus: true, error: {} },
      });

      // Set localstorage item
      localStorage.setItem("token", data.jwt_token);

      // redirect to login
      history.push("/sales");
    })
    .catch((error) => {
      dispatch({
        type: AUTHENTICATE,
        payload: {
          jwt_token: "",
          authStatus: false,
          error: error.response.data,
        },
      });
    });
};

export const logout = (history: any) => (dispatch: Function) => {
  const payload: PayloadProps = {
    authStatus: false,
    error: {},
    jwt_token: "",
  };

  dispatch({
    type: AUTHENTICATE,
    payload,
  });

  localStorage.removeItem("token");
  history.push("/login");
};
