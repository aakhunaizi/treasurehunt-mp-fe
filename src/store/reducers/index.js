import { combineReducers } from "redux";
import authReducer from "./authReducer";
import garbageReducer from "./garbageReducer";
import treasureReducer from "./treasureReducer";

const rootReducer = combineReducers({
  garbageReducer,
  treasureReducer,
  authReducer,
});

export default rootReducer;
