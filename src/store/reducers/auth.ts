import { AUTHENTICATE } from "../actions/types";

const initialState = {
  isAuthenticated: false,
  userToken: "",
  error: {},
};

interface AuthType {
  isAuthenticated: boolean;
  userToken: string;
  error: object;
}
interface ActionProps {
  type: string;
  payload: { authStatus: boolean; jwt_token: string; error: object };
}
export const auth = (
  state: AuthType = initialState,
  action: ActionProps
): AuthType => {
  switch (action.type) {
    case AUTHENTICATE:
      return {
        ...state,
        isAuthenticated: action.payload.authStatus,
        userToken: action.payload.jwt_token,
        error: action.payload.error,
      };

    default:
      return state;
  }
};
