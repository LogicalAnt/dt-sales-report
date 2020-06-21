import axios from "axios";
import { GET_SALES } from "./types";
export const fetchSales = () => (dispatch: any) => {
  axios
    .get("http://frontend.interview.dingi.work/user/data/")
    .then((response) => {
      dispatch({ type: GET_SALES, payload: response.data });
      localStorage.setItem("salesdata", response.data);
    })
    .catch((e) => {
      dispatch({ type: GET_SALES, payload: [] });
    });
};
