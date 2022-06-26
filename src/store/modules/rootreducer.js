import { combineReducers } from "redux";
import reservas from "./reservas/reducer";
import user from "./user/reducer";

export default combineReducers({
  reservas,
  user,
})