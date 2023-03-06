import React, { useState } from "react";
import { AddUserApi } from "./duck/action";
import { useDispatch } from "react-redux";

export default function AddUser({ renderUser }) {
  const dispatch = useDispatch();

  const [state, setState] = useState({
    taiKhoan: "",
    matKhau: "",
    email: "",
    soDt: "",
    maNhom: "GP15",
    hoTen: "",
    maLoaiNguoiDung: "KhachHang",
  });
  // console.log(state);
  const handleOnChange = (e) => {
    const { name, value } = e.target;
    setState({
      ...state,
      [name]: value,
    });
    console.log(state);
  };

  const handleOnSubmit = (e) => {
    e.preventDefault();
    dispatch(AddUserApi(state));

    renderUser();
  };

  return (
    <div
      className="modal fade 	.d-none"
      id="exampleModal"
      tabIndex={-1}
      role="dialog"
      aria-labelledby="exampleModalLabel"
      aria-hidden="true"
    >
      <form onSubmit={handleOnSubmit}>
        <div className="modal-dialog" role="document">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="exampleModalLabel">
                Thêm Người Dùng Mới
              </h5>
              <button
                type="button"
                className="close"
                data-dismiss="modal"
                aria-label="Close"
              >
                <span aria-hidden="true">×</span>
              </button>
            </div>
            <div className="modal-body">
              <div className="form-group">
                <label> Tài Khoản </label>
                <input
                  type="text"
                  name="taiKhoan"
                  className="form-control"
                  onChange={handleOnChange}
                />
              </div>
              <div className="form-group">
                <label> Họ Tên </label>
                <input
                  type="text"
                  name="hoTen"
                  className="form-control"
                  onChange={handleOnChange}
                />
              </div>
              <div className="form-group">
                <label> Email </label>
                <input
                  type="text"
                  name="email"
                  className="form-control"
                  onChange={handleOnChange}
                />
              </div>
              <div className="form-group">
                <label> Số Điện Thoại </label>
                <input
                  type="text"
                  name="soDt"
                  className="form-control"
                  onChange={handleOnChange}
                />
              </div>
              <div>
                <select>
                  <option value="">Chọn loại người dùng</option>
                  <option value="KhachHang">Khách Hàng</option>
                  <option value="QuanTri">Quản Trị Viên</option>
                </select>
              </div>
            </div>
            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-secondary"
                data-dismiss="modal"
                id="btn-close"
              >
                Close
              </button>
              <button
                type="submit"
                className="btn btn-primary"
                onClick={() => {
                  const modal = document.getElementById("btn-close");
                  modal.click();
                }}
              >
                Thêm
              </button>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
}
