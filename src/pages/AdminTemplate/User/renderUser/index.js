import React from "react";

// =prop = {

export default function RenderUser(prop) {
  const { user } = prop;
  return (
    <>
      {" "}
      <tr>
        <td>{user.taiKhoan}</td>
        <td>{user.hoTen}</td>
        <td>{user.email}</td>
        <td>{user.soDT}</td>
        <td>{user.maLoaiNguoiDung}</td>
      </tr>
    </>
  );
}
