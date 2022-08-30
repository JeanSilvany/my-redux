import React, { useCallback, useRef } from "react";
import { ReduxContextProps, ReduxProps } from "./types";

export const ContextRedux = React.createContext<ReduxContextProps>({
  state: {},
  runReducers: () => ({}),
  dispatch: () => {},
  subscribe: () => () => {},
});

const Provider = ContextRedux.Provider;

const Redux = ({ children, store }: ReduxProps) => {
  const listeners = useRef<Array<Function>>([]);

  const subscribe = useCallback((func: Function) => {
    listeners.current.push(func);

    return () => {
      const index = listeners.current.indexOf(func);
      listeners.current.splice(index, 1);
    };
  }, []);

  const getInitialState = useCallback((reducers: Object, action?: any) => {
    const result = Object.entries(reducers)
      .map(([key, reducer]) => ({
        [key]: reducer(undefined, action),
      }))
      .reduce((obj, item) => ({ ...obj, ...item }), {});

    return result;
  }, []);
  const { current: state } = useRef(getInitialState(store.reducers));

  const runReducers = useCallback((reducers: any, state: any, action?: any) => {
    Object.keys(state).forEach((key) => {
      const newStateReducer = reducers[key](state[key], action);

      if (newStateReducer === state[key]) {
        console.log("no change: " + key);
      } else {
        listeners.current.forEach((func) =>
          func({ ...state, [key]: newStateReducer })
        );
        state[key] = newStateReducer;
      }
    });

    return state;
  }, []);

  const dispatch = useCallback(
    (action: any) => {
      runReducers(store.reducers, state, action);
    },
    [runReducers, state, store]
  );

  return (
    <Provider value={{ state, dispatch, runReducers, subscribe }}>
      {children}
    </Provider>
  );
};

export default Redux;
