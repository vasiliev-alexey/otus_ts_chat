export type Message = {
  messageText: string;
  author: string;
};

export type State = {
  userName: string | undefined;
  messages: Array<Message>;
  messageText: string | undefined;
};

export const initialState: State = {
  userName: 'Неопознанный енот',
  messageText: 'hola hola',
  messages: [
    { messageText: 'sss', author: 'author' },
    { messageText: 'dddd', author: 'author2' },
  ],
};
