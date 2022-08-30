import { IPost } from ".";

export const addPost = ({ description, url }: IPost) => {
  return {
    type: "ADD",
    payload: { description, url } as IPost,
  };
};
