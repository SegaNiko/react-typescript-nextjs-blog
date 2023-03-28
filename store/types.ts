export const GET_ALL_POSTS = 'GET_ALL_POSTS';
export const END_LOAD_All_POSTS = 'END_LOAD_All_POSTS';
// Actions interface

export interface getAllPosts {
  type: typeof GET_ALL_POSTS;
  payload: RootState;
}

export interface engGetAllPosts {
  type: typeof END_LOAD_All_POSTS;
  payload: RootState;
}

export type AllActions = getAllPosts | engGetAllPosts;

export interface PostType {
  id: string | number;
  title: string;
  body: string;
}

export interface RootState {
  posts: PostType[];
  isLoading: boolean;
}
