export const login = ({ name, email }: { name: string; email: string }) => {
  return {
    type: "AUTH/LOGIN_SUCCESS",
    payload: { name, email },
  };
};

export const logout = () => {
  return {
    type: "AUTH/LOGOUT",
  };
};
