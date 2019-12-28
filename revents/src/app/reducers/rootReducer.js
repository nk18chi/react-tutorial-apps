import { combineReducers } from "redux";
import { reducer as FormReducer } from "redux-form";
import { reducer as ToastrReducer } from "react-redux-toastr";
import testReducer from "../../freatures/testarea/testReducer";
import eventReducer from "../../freatures/event/eventReducer";
import modalReducer from "../../freatures/modals/modalReducer";
import authReducer from "../../freatures/auth/authReducer";
import asyncReducer from "../../freatures/async/asyncReducer";
import { firebaseReducer } from "react-redux-firebase";
import { firestoreReducer } from "redux-firestore";

const rootReducer = combineReducers({
  firebase: firebaseReducer,
  firestore: firestoreReducer,
  form: FormReducer,
  test: testReducer,
  events: eventReducer,
  modals: modalReducer,
  auth: authReducer,
  async: asyncReducer,
  toastr: ToastrReducer
});

export default rootReducer;
