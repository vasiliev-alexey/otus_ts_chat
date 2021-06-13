import { Component } from './Component';
import { State } from '../domain/State';
import imgAngry from '../img/angry-face_1f620.png';
import imgSmile from '../img/slightly-smiling-face_1f642.png';

export class MessageListComponent extends Component<State> {
  render(): string {
    let text: string = this.templateEngine.template(
      `{{for messages}}<div><span class="bold">{{author}}</span>  : {{messageText}}
     </div>{{end for}}`,
      this.state
    );
    text = text.split(':)').join(`<img src=${imgSmile}>`);
    text = text.split(':(').join(`<img src=${imgAngry}>`);
    return text;
  }
}
