import * as ActionTypes from "./type";

import api from "../../../../../../utils/apiUtil";

const actDeleteUserApi = (id) => {
  console.log(id);
  return (dispatch) => {
    dispatch(deleteUserRequest());
    api
      .delete(`QuanLyNguoiDung/XoaNguoiDung?TaiKhoan=${id}`)
      .then((result) => {
        dispatch(deleteUserSuccess(result.data.content));
      })
      .catch((error) => {
        dispatch(deleteUserFail(error));
      });
  };
};
const deleteUserRequest = () => {
  return {
    type: ActionTypes.DETELE_USER_REQUEST,
  };
};
const deleteUserSuccess = (data) => {
  return {
    type: ActionTypes.DETELE_USER_SUCCESS,
    payload: data,
  };
};
const deleteUserFail = (error) => {
  return {
    type: ActionTypes.DETELE_USER_FAIL,
    payload: error,
  };
};
export default actDeleteUserApi;
