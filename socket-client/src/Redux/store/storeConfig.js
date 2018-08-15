import { createStore, combineReducers } from "redux";
import { userReducer } from "../reducers/userReducer";
import { messagesReducer } from "../reducers/messagesReducer";
import { roomsReducer } from "../reducers/roomsReducer";
import { menuReducer } from "../reducers/menuReducer";

export const store = createStore(
  combineReducers({
    userData: userReducer,
    messages: messagesReducer,
    rooms: roomsReducer,
    menu: menuReducer
  })
);
