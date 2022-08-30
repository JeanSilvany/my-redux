import { useCallback, useContext, useEffect, useState } from "react";
import { ContextRedux } from "../../context";
import { UseSelectorProps } from "./types";

const useSelector = (getState: UseSelectorProps) => {
  const { state, subscribe } = useContext(ContextRedux);

  const [selectedState, setSelectedState] = useState(getState(state));

  const handleSubscription = useCallback((newState: any) => {
    const selected = getState(newState);
    if (selectedState !== selected) setSelectedState(selected);
  }, []);

  useEffect(() => {
    const unsubscribe = subscribe(handleSubscription);

    return unsubscribe;
  }, [subscribe, handleSubscription]);

  return selectedState;
};

export default useSelector;
