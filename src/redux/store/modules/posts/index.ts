export interface IPost {
  description: string;
  url: string;
}

const initialState = {
  list: [] as Array<IPost>,
};

export type PostsState = typeof initialState;

export const posts = (state = initialState, action?: any) => {
  switch (action?.type) {
    case "ADD":
      return {
        ...state,
        list: [...state.list, action.payload],
      };
    default:
      return state;
  }
};
