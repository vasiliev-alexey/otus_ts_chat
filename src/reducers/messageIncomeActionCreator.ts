import { AnyAction } from 'redux';

export const MESSAGE_SENT = 'MESSAGE_SENT';
export const USER_NAME_CHANGED = 'USER_NAME_CHANGED';
export const MESSAGE_INCOME = 'MESSAGE_INCOME';
export const MESSAGE_CHANGED = 'MESSAGE_CHANGED';

export function messageIncomeActionCreator(
  name: string,
  message: string
): AnyAction {
  return {
    type: MESSAGE_INCOME,
    name: name ?? 'Сегодня',
    message: message ?? Date.now(),
  };
}

export function messageSendActionCreator(): AnyAction {
  return { type: MESSAGE_SENT };
}

export function userChangeActionCreator(newUserName: string): AnyAction {
  return { type: USER_NAME_CHANGED, userName: newUserName };
}

export function messageChangeActionCreator(newMessage: string): AnyAction {
  return { type: MESSAGE_CHANGED, newMessage };
}
