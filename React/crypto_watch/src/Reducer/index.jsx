import { combineReducers } from "redux";
// Ce fichier va peremtre de regrouper tous les reducers ( pas les actions)
import stableReducer from "./stable.reducer";
import listReducer from "./list.reducer";
const rootReducer = combineReducers({
  stableReducer,
  listReducer,
});

export default rootReducer;
