export interface ReduxContextProps {
  state: Object;
  runReducers: (
    reducers: Object,
    state?: any,
    action?: any
  ) => {
    [x: string]: any;
  };
  dispatch: (action?: any) => void;
  subscribe: (func: Function) => () => void;
}

export interface ReduxProps {
  children: React.ReactNode;
  store: { reducers: Object };
}
