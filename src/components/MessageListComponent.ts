import { Component } from './Component';
import { State } from '../domain/State';

export class MessageListComponent extends Component<State> {
  render(): string {
    console.log('render', this.state);
    return this.templateEngine.template(
      '{{for messages}}<div>{{author}}  : {{messageText}}</div>{{end for}}',
      this.state
    );
  }
}
