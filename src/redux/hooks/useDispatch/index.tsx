import { useContext } from "react";
import { ContextRedux } from "../../context";
const useDispatch = () => {
  const { dispatch } = useContext(ContextRedux);

  return dispatch;
};

export default useDispatch;
