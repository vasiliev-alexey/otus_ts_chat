import { MessageListComponent } from './components/MessageListComponent';
import { store } from './domain/store';
import {
  listenMessagesThunkAction,
  sendMessageThunkAction,
} from './reducers/reducer';

export function renderData(): void {
  const messageRoot = document.querySelector<HTMLDivElement>('#messageList');
  const btn = document.querySelector<HTMLButtonElement>('#postMessage')!;

  btn.addEventListener('click', sendMessageToChat);

  if (messageRoot) {
    console.log('mounted');

    const messageList = new MessageListComponent(messageRoot, store.getState());
    messageList.setState(store.getState());

    store.dispatch(listenMessagesThunkAction());
    store.subscribe(() => {
      messageList.setState(store.getState());
    });
  }
}

export async function sendMessageToChat(): Promise<void> {
  await store.dispatch(sendMessageThunkAction('vasiliev-alexey', 'it worked'));
}
