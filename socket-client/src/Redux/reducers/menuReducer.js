const menuReducerDefaultState = {
  menuShow: false
};

export const menuReducer = (state = menuReducerDefaultState, action) => {
  switch (action.type) {
    case "MENU_TOGGLE":
      return {
        menuShow: !state.menuShow
      };
    default:
      return state;
  }
};
