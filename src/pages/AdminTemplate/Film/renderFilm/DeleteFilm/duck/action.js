import * as ActionTypes from "./type";

import api from "../../../../../../utils/apiUtil";

const actDeleteFilmApi = (id) => {
  console.log(id);
  return (dispatch) => {
    dispatch(deleteFilmRequest());
    api
      .delete(`QuanLyPhim/XoaPhim?MaPhim=${id}`)
      .then((result) => {
        dispatch(deleteFilmSuccess(result.data.content));
      })
      .catch((error) => {
        dispatch(deleteFilmFail(error));
      });
  };
};
const deleteFilmRequest = () => {
  return {
    type: ActionTypes.DETELE_FILM_REQUEST,
  };
};
const deleteFilmSuccess = (data) => {
  return {
    type: ActionTypes.DETELE_FILM_SUCCESS,
    payload: data,
  };
};
const deleteFilmFail = (error) => {
  return {
    type: ActionTypes.DETELE_FILM_FAIL,
    payload: error,
  };
};
export default actDeleteFilmApi;
