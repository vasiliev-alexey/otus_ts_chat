import { AnyAction } from 'redux';

export const MESSAGE_SENT = 'MESSAGE_SENT';
export const MESSAGE_INCOME = 'MESSAGE_INCOME';

export function messageIncomeActionCreator(
  name: string,
  message: string
): AnyAction {
  return { type: MESSAGE_INCOME, name, message };
}

export function messageSendActionCreator(): AnyAction {
  return { type: MESSAGE_SENT };
}
