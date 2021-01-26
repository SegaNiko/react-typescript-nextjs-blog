import initialState from './initialState';
import { GET_ALL_POSTS, END_LOAD_All_POSTS, AllActions, RootState } from './types';

const reducer = (state = initialState, { type, payload }: AllActions): RootState => {
  switch (type) {
  case GET_ALL_POSTS:
    return {
      ...state,
      ...payload,
    };
  case END_LOAD_All_POSTS:
    return {
      ...state,
      ...payload,
    };
  default:
    return state;
  }
};

export default reducer;
