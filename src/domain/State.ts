export type State = {
  userName: string | undefined;
  messages: Array<string>;
};

export const initialState: State = {
  userName: undefined,
  messages: [],
};
