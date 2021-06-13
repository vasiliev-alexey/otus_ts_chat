import { Component } from './Component';
import { State } from '../domain/State';
import { changeUserName } from '../app';

export class UserComponent extends Component<State> {
  private onchange = (e: Event): void => {
    if (e.target !== null) {
      changeUserName((e.target as HTMLInputElement).value);
    }
  };
  events = {
    'change@#userNameInput': this.onchange,
  };

  render(): string {
    return this.templateEngine.template(
      `
      <p>Пользователь</p>
      <input  id="userNameInput" type="text" value='{{userName}}'</input>`,
      this.state
    );
  }
}
