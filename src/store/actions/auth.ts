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

      //Call reducer
      dispatch({
        type: AUTHENTICATE,
        payload: { ...data, authStatus: true, error: {} },
      });

      //Set localstorage item
      localStorage.setItem("token", data.jwt_token);

      //Set token onto axios header for every request
      Axios.defaults.headers.common["Authorization"] = `JWT ${data.jwt_token}`;

      //fetch sales data
      Axios.get("http://frontend.interview.dingi.work/user/data/")
        .then((sales) => {
          localStorage.setItem("salesdata", JSON.stringify(sales.data));
        })
        .catch((e) => {
          console.log("data loading failed");
        });

      //Redirect to login
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
  localStorage.removeItem("salesdata");
  history.push("/login");
};
