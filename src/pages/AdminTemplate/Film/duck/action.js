import * as ActionTypes from "./type";
import api from "../../../../utils/apiUtil";

const actRenderFilm = () => {
  return (dispatch) => {
    dispatch(renderFilmRequest());
    api
      .get("QuanLyPhim/LayDanhSachPhim?maNhom=GP15")
      .then((result) => {
        dispatch(renderFilmSuccess(result.data.content));
      })
      .catch((error) => {
        dispatch(renderFilmFail(error));
      });
  };
};
const renderFilmRequest = () => {
  return {
    type: ActionTypes.FILM_DATA_REQUEST,
  };
};
const renderFilmSuccess = (data) => {
  return {
    type: ActionTypes.FILM_DATA_SUCCESS,
    payload: data,
  };
};
const renderFilmFail = (error) => {
  return {
    type: ActionTypes.FILM_DATA_FAIL,
    payload: error,
  };
};

export default actRenderFilm;
