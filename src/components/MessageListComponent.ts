import { Component } from './Component';
import { State } from '../domain/State';

export class MessageListComponent extends Component<State> {
  render(): string {
    return this.templateEngine.template(
      '{{for messages}}<tr><td>{{name}}</td></tr>{{end for}}',
      this.state
    );
  }
}
