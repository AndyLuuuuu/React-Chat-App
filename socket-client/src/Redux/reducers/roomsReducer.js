const roomsReducerDefaultState = [];
export const roomsReducer = (state = roomsReducerDefaultState, action) => {
  switch (action.type) {
    case "RETRIEVE_ROOMS":
      return [...action.data];
    default:
      return state;
  }
};
