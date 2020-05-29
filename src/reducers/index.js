import { combineReducers } from "redux";
import userReducer from "./userReducer";
import channelReducer from "./channelReducer";

const rootReducers = combineReducers({
  user: userReducer,
  channel: channelReducer,
});

export default rootReducers;
