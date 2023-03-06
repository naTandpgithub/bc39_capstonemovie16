import React, { useState } from "react";
import { useSelector } from "react-redux";
export default function EditUser() {
  const loading = useSelector((state) => state.editUserReducer.loadning);
  const data = useSelector((state) => state.editUserReducer.data);

  return (
    <div
      className="modal fade 	.d-none"
      id="editModal"
      tabIndex={-1}
      role="dialog"
      aria-labelledby="exampleModalLabel"
      aria-hidden="true"
    >
      <form>
        <div className="modal-dialog" role="document">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="exampleModalLabel">
                Chỉnh sửa
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
                <input type="text" name="taiKhoan" className="form-control" />
              </div>
              <div className="form-group">
                <label> Họ Tên </label>
                <input type="text" name="hoTen" className="form-control" />
              </div>
              <div className="form-group">
                <label> Email </label>
                <input type="text" name="email" className="form-control" />
              </div>
              <div className="form-group">
                <label> Mật Khẩu </label>
                <input type="text" name="matKhau" className="form-control" />
              </div>
              <div className="form-group">
                <label> Số Điện Thoại </label>
                <input type="text" name="soDt" className="form-control" />
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
                Sửa
              </button>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
}
