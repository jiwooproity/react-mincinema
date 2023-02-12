import { combineReducers } from "redux";
import setLoading from "./setLoading";

const rootReducer = combineReducers({
  loading: setLoading,
});

export default rootReducer;
