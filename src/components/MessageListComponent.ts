import { Component } from './Component';
import { State } from '../domain/State';

export class MessageListComponent extends Component<State> {
  render(): string {
    let text: string = this.templateEngine.template(
      `{{for messages}}<div>{{author}}  : {{messageText}}
     </div>{{end for}}`,
      this.state
    );
    text = text
      .split(':)')
      .join(" <img src='src/img/slightly-smiling-face_1f642.png'>");
    text = text.split(':(').join(" <img src='src/img/angry-face_1f620.png'>");
    return text;
  }
}
