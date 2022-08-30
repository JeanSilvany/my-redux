const initialState = {
  name: "",
  email: "",
  isLoggedIn: false,
};

export type AuthState = typeof initialState;

export const auth = (state = initialState, action?: any) => {
  switch (action?.type) {
    case "AUTH/LOGIN_SUCCESS":
      return {
        ...state,
        ...action?.payload,
        isLoggedIn: true,
      };
    case "AUTH/LOGOUT":
      return { ...initialState };
    default:
      return state;
  }
};
