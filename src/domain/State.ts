export type Message = {
  messageText: string;
  author: string;
};

export type State = {
  userName: string | undefined;
  messages: Array<Message>;
};

export const initialState: State = {
  userName: undefined,
  messages: [
    { messageText: 'sss', author: 'author' },
    { messageText: 'dddd', author: 'author2' },
  ],
};
