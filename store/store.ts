import { createStore, applyMiddleware, Action } from 'redux';
import thunk, { ThunkAction } from 'redux-thunk';
import reducer from './reducer';
import { RootState } from './types';

const store = createStore(reducer, applyMiddleware(thunk));

export type AppDispatch = typeof store.dispatch;
export type AppThunk = ThunkAction<void, RootState, null, Action<string>>;

export default store;
