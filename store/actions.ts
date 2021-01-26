import { blogAPI } from '../api/api';
import { AppDispatch, AppThunk } from './store';
import { PostType, GET_ALL_POSTS, END_LOAD_All_POSTS, engGetAllPosts, getAllPosts } from './types';

export const startGetAllPost = (): getAllPosts => {
  return {
    type: GET_ALL_POSTS,
    payload: {
      posts: [],
      isLoading: true,
    },
  };
};

export const endGetAllPost = (posts: PostType[]): engGetAllPosts => {
  return {
    type: END_LOAD_All_POSTS,
    payload: {
      posts,
      isLoading: false,
    },
  };
};

export const fetchPosts = (): AppThunk => async (dispatch: AppDispatch) => {
  dispatch(startGetAllPost());
  try {
    const posts: PostType[] = await blogAPI.getPosts();

    dispatch(endGetAllPost(posts));
  } catch (error) {
    console.log(error);
  }
};
