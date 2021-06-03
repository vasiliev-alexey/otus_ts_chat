import { Component } from './Component';
import { State } from '../domain/State';
import { changeMessageText, sendMessageToChat } from '../app';

export class MessageBoxComponent extends Component<State> {
  private onClick = (): void => {
    sendMessageToChat(
      this.state.userName ?? 'Анониму',
      this.state.messageText ?? ''
    ).then(() => {
      changeMessageText('');
    });
  };

  private onchange = (e: Event): void => {
    if (e.target !== null) {
      changeMessageText((e.target as HTMLInputElement).value);
    }
  };

  events = {
    'click@#postMessage': this.onClick,
    'change@#messageTextBox': this.onchange,
  };

  render(): string {
    return this.templateEngine.template(
      `<p>Введите сообщение:</p>
      <div>

        <textarea  id='messageTextBox' class="scrollMessage" >{{messageText}}</textarea>
      </div>
      <button id="postMessage" >Отправить в Чат</button>`,
      this.state
    );
  }
}
