import { combineReducers } from "redux";
import dataUserReducer from "../pages/AdminTemplate/User/duck/reducer";
import authLoginReducer from "../pages/AdminTemplate/AuthPage/duck/reducer";
import addUserReducer from "../pages/AdminTemplate/User/renderUser/AddUser/duck/reducer";
import dataFilmRenderReducer from "../pages/AdminTemplate/Film/duck/reducer";
import deleteUserReducer from "../pages/AdminTemplate/User/renderUser/Delete/duck/reducer";
import deleteFilmReducer from "../pages/AdminTemplate/Film/renderFilm/DeleteFilm/duck/reducer";
import editUserReducer from "../pages/AdminTemplate/User/renderUser/EditUser/duck/reducer";
const rootReducer = combineReducers({
  dataUserReducer,
  authLoginReducer,
  addUserReducer,
  dataFilmRenderReducer,
  deleteUserReducer,
  deleteFilmReducer,
  editUserReducer,
});

export default rootReducer;
