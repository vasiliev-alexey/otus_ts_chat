import { Dispatch, Reducer } from 'redux';
import { initialState, State } from '../domain/State';
import {
  MESSAGE_CHANGED,
  MESSAGE_INCOME,
  messageIncomeActionCreator,
  messageSendActionCreator,
  USER_NAME_CHANGED,
} from './messageIncomeActionCreator';
import { observeWithEventSource, sendMessage } from './firebaseApi';

export const reducer: Reducer<State> = (state = initialState, action) => {
  const newState = { ...state };

  switch (action.type) {
    case MESSAGE_INCOME: {
      newState.messages.push({
        messageText: `${action.message}`,
        author: `${action.name}`,
      });
      return newState;
    }
    case USER_NAME_CHANGED: {
      newState.userName = action.userName;
      return newState;
    }
    case MESSAGE_CHANGED: {
      newState.messageText = action.newMessage;
      return newState;
    }
    default:
      return state;
  }
};

export const listenMessagesThunkAction = () => {
  return (dispatch: Dispatch): void => {
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
