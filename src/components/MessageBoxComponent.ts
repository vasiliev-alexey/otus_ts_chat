import { Component } from './Component';
import { State } from '../domain/State';
import { changeMessageText, sendMessageToChat } from '../app';

export class MessageBoxComponent extends Component<State> {
  private localState = this.state.messageText;

  setState(patch: Partial<State>): void {
    this.localState = patch.messageText;
    super.setState(patch);
  }

  private onClick = (): void => {
    changeMessageText(this.localState ?? '');
    sendMessageToChat(
      this.state.userName ?? 'Анониму',
      this.localState ?? ''
    ).then(() => {
      changeMessageText('');
    });
  };

  private onchange = (e: Event): void => {
    e.preventDefault();
    if (e.target !== null) {
      this.localState = (e.target as HTMLInputElement).value;
    }
  };

  events = {
    'click@#postMessage': this.onClick,
    'keyup@#messageTextBox': this.onchange,
  };

  render(): string {
    return this.templateEngine.template(
      `<p>Введите сообщение:</p>
      <div id="block">

        <textarea  id='messageTextBox'  autofocus  class="scrollMessage" >{{messageText}}</textarea>
      </div>
      <button id="postMessage" >Отправить в Чат</button>`,
      this.state
    );
  }
}
