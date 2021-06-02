import { Action, applyMiddleware, createStore } from 'redux';
import { reducer } from '../reducers/reducer';
import { ThunkMiddleware } from 'redux-thunk';
import thunk from 'redux-thunk';
import { State } from './State';

export const store = createStore(
  reducer,
  applyMiddleware(thunk as ThunkMiddleware<State, Action>)
);
