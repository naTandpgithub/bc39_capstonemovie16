import * as ActionTypes from "./type";

import api from "../../../../../../utils/apiUtil";

const actEditUserApi = (id) => {
  console.log(id);
  return (dispatch) => {
    dispatch(editUserRequest());
    api
      .get(`QuanLyNguoiDung/TimKiemNguoiDung?MaNhom=GP15&tuKhoa=${id}`)
      .then((result) => {
        dispatch(editUserSuccess(result.data.content));
      })
      .catch((error) => {
        dispatch(editUserFail(error));
      });
  };
};
const editUserRequest = () => {
  return {
    type: ActionTypes.EDIT_USER_REQUEST,
  };
};
const editUserSuccess = (data) => {
  return {
    type: ActionTypes.EDIT_USER_SUCCESS,
    payload: data,
  };
};
const editUserFail = (error) => {
  return {
    type: ActionTypes.EDIT_USER_FAIL,
    payload: error,
  };
};
export default actEditUserApi;
