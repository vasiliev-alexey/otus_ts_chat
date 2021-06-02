import { createStore } from 'redux';
import { apiReducer } from './reducers/reducer';

const store = createStore(apiReducer);
export default store;
