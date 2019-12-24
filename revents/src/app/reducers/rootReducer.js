import { combineReducers } from "redux";
import testReducer from "../../freatures/testarea/testReducer";

const rootReducer = combineReducers({
  test: testReducer
});

export default rootReducer;
