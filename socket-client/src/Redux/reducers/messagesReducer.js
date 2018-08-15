const messagesDefaultState = [];

export const messagesReducer = (
  state = messagesDefaultState,
  { type, data }
) => {
  switch (type) {
    case "RECEIVE_MESSAGE":
      return [
        ...state,
        {
          id: data.id,
          user: data.user,
          message: data.message
        }
      ];
    case "CLEAR_MESSAGES":
      return (state = []);
    default:
      return state;
  }
};
