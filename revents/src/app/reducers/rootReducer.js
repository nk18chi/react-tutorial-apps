import { combineReducers } from "redux";
import { reducer as FormReducer } from "redux-form";
import testReducer from "../../freatures/testarea/testReducer";
import eventReducer from "../../freatures/event/eventReducer";

const rootReducer = combineReducers({
  form: FormReducer,
  test: testReducer,
  events: eventReducer
});

export default rootReducer;
