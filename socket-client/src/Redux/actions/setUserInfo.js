export const setUsername = (username = "") => {
  return { type: "SET_USERNAME", username };
};

export const createRoom = room => {
  return { type: "CREATE_ROOM", room };
};

export const joinRoom = room => {
  return {
    type: "JOIN_ROOM",
    room
  };
};
