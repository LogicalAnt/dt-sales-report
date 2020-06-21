import { GET_SALES } from "../actions/types";

const initialState: object[] = [];

interface ActionProps {
  type: string;
  payload: object[];
}

export const allSales = (
  state: object[] = initialState,
  action: ActionProps
) => {
  switch (action.type) {
    case GET_SALES:
      return [...action.payload];

    default:
      return state;
  }
};
