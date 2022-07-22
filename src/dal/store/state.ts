import {combineReducers, createStore} from "redux";
import {profileReducer} from "../../bll/profileReducer";

export const rootReducer = combineReducers({
  profile: profileReducer
})
const store = createStore(rootReducer)
export default store