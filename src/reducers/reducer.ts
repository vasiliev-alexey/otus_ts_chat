import { Reducer } from 'redux';
import { initialState, State } from '../domain/State';

export const apiReducer: Reducer<State> = (state = initialState, action) => {
  switch (action.type) {
    case 'LOADING':
      return { ...state, isLoading: true };
    case 'SUCCESS':
      return {
        ...state,
        isLoading: false,
        data: action.payload,
        error: undefined,
      };
    case 'ERROR':
      return {
        ...state,
        isLoading: false,
        data: undefined,
        error: action.error,
      };
    default:
      return state;
  }
};
