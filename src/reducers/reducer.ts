import { Dispatch, Reducer } from 'redux';
import { initialState, State } from '../domain/State';
import {
  MESSAGE_INCOME,
  messageIncomeActionCreator,
  messageSendActionCreator,
} from './messageIncomeActionCreator';
import {
  getMessagesList,
  observeWithEventSource,
  sendMessage,
} from './firebaseApi';

export const reducer: Reducer<State> = (state = initialState, action) => {
  //  console.log("reducer called", action)
  const newState = { ...state };
  switch (action.type) {
    case MESSAGE_INCOME: {
      newState.messages.push({
        messageText: `messageText: ${action.message}`,
        author: `author: ${action.name}`,
      });
      return newState;
    }
    default:
      return state;
  }
};

export const listenMessagesThunkAction = () => {
  return async (dispatch: Dispatch): Promise<void> => {
    observeWithEventSource((data: { name: string; message: string }) => {
      dispatch(messageIncomeActionCreator(data.name, data.message));
    });
  };
};

export const sendMessageThunkAction = (name: string, message: string) => {
  return async (dispatch: Dispatch): Promise<void> => {
    await sendMessage({ name, message });
    dispatch(messageSendActionCreator());
  };
};
