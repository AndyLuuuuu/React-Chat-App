const userDefaultState = {
  username: null,
  room: null
};

export const userReducer = (
  state = userDefaultState,
  { type, username, room }
) => {
  switch (type) {
    case "SET_USERNAME":
      if (username === "" || null || undefined) {
        return state.username;
      } else {
        return {
          ...state,
          username: username
        };
      }
    case "CREATE_ROOM":
      if (room === "" || null || undefined) {
        return state.room;
      } else {
        return {
          ...state,
          room: room
        };
      }
    case "JOIN_ROOM":
      if (room === "" || null || undefined) {
        return state.room;
      } else {
        return {
          ...state,
          room: room
        };
      }
    default:
      return state;
  }
};
