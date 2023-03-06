import { combineReducers } from "redux";
import dataUserReducer from "../pages/AdminTemplate/User/duck/reducer";
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
});

export default rootReducer;
