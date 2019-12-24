import { combineReducers } from "redux";
import testReducer from "../../freatures/testarea/testReducer";
import eventReducer from "../../freatures/event/eventReducer";

const rootReducer = combineReducers({
  test: testReducer,
  events: eventReducer
});

export default rootReducer;
