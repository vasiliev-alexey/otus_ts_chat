import { MessageListComponent } from './components/MessageListComponent';
import { store } from './domain/store';
import {
  listenMessagesThunkAction,
  sendMessageThunkAction,
} from './reducers/reducer';
import { MessageBoxComponent } from './components/MessageBoxComponent';
import { UserComponent } from './components/UserComponent';
import {
  messageChangeActionCreator,
  userChangeActionCreator,
} from './reducers/messageIncomeActionCreator';

export async function renderData(): Promise<void> {
  const messageRoot = document.querySelector<HTMLDivElement>('#messageList');
  const messageBox = document.querySelector<HTMLDivElement>('#messageBox');
  const userInfoElement = document.querySelector<HTMLDivElement>('#userInfo');

  if (userInfoElement) {
    store.subscribe(() => {
      new UserComponent(userInfoElement, store.getState());
    });
  }

  if (messageRoot) {
    const messageList = new MessageListComponent(messageRoot, store.getState());
    store.subscribe(() => {
      messageList.setState(store.getState());
    });
  }

  if (messageBox) {
    store.subscribe(() => {
      const state = { ...store.getState() };
      new MessageBoxComponent(messageBox, state);
    });
  }

  store.dispatch(listenMessagesThunkAction());
}

export async function sendMessageToChat(
  name: string,
  message: string
): Promise<void> {
  await store.dispatch(sendMessageThunkAction(name, message));
}

export function changeUserName(newName: string): void {
  store.dispatch(userChangeActionCreator(newName));
}

export function changeMessageText(newMessage: string): void {
  store.dispatch(messageChangeActionCreator(newMessage));
}
