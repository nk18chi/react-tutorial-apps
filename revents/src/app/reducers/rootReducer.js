import { combineReducers } from "redux";
import { reducer as FormReducer } from "redux-form";
import testReducer from "../../freatures/testarea/testReducer";
import eventReducer from "../../freatures/event/eventReducer";
import modalReducer from "../../freatures/modals/modalReducer";
import authReducer from "../../freatures/auth/authReducer";
import asyncReducer from "../../freatures/async/asyncReducer";

const rootReducer = combineReducers({
  form: FormReducer,
  test: testReducer,
  events: eventReducer,
  modals: modalReducer,
  auth: authReducer,
  async: asyncReducer
});

export default rootReducer;
