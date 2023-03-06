import { combineReducers } from "redux";
import dataUserReducer from "../pages/AdminTemplate/User/duck/reducer";
<<<<<<< HEAD
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
=======
import listCinemaReducer from "../pages/HomeTemplate/HomePage/Cinema/duck/DuckCinema/reducer";
import ComplexReducer from "../pages/HomeTemplate/HomePage/Cinema/duck/DuckComplex/reducer";
import userLoginReducer from "../pages/HomeTemplate/UserLogin/duck/reducer";
import userRegisterReducer from "../pages/HomeTemplate/UserRegister/duck/reducer";
import CarouselReducer from "../pages/HomeTemplate/HomePage/Carousel/duck/reducer";
import listMovieReducer from "../pages/HomeTemplate/HomePage/ListMovie/duck/reducer";
import detailMovieReducer from "../pages/HomeTemplate/DetailMovie/duck/reducer";
import ticketroomReducer from "../pages/HomeTemplate/Ticketroom/duck/duckTicketroom/reducer";
import bookTicketReducer from "../pages/HomeTemplate/Ticketroom/duck/duckBookTicket/reducer";
const rootReducer = combineReducers({
    dataUserReducer,
    listCinemaReducer,
    ComplexReducer,
    userLoginReducer,
    userRegisterReducer,
    CarouselReducer,
    listMovieReducer,
    detailMovieReducer,
    ticketroomReducer,
    bookTicketReducer
>>>>>>> fd0aaa1cbc0d52f4f3eae964c943333bb77612f9
});

export default rootReducer;
