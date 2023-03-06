import React from "react";
import EditUser from "./EditUser/editUser";

// =prop = {

export default function RenderUser(prop) {
  const { user, handleOnlickDelete, handleOnClickEditUser } = prop;
  // const dispatch = useDispatch();

  return (
    <>
      <tr>
        <td>{user.taiKhoan}</td>
        <td>{user.hoTen}</td>
        <td>{user.email}</td>
        <td>{user.soDT}</td>
        <td>{user.maLoaiNguoiDung}</td>
        <td>
          <button
            className="btn btn-danger"
            onClick={() => handleOnlickDelete(user.taiKhoan)}
          >
            Delete
          </button>
          <button
            className="btn btn-info"
            onClick={() => handleOnClickEditUser(user.taiKhoan)}
            type="button"
            data-toggle="modal"
            data-target="#editModal"
          >
            Edit
          </button>
          <EditUser />
        </td>
      </tr>
    </>
  );
}
