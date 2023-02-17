import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import renderUserApi from "./duck/action";
import Loader from "./../../../component/Loader";
import RenderUser from "./renderUser";
export default function User() {
  const loading = useSelector((state) => state.dataUserReducer.loading);
  const data = useSelector((state) => state.dataUserReducer.data);
  console.log(data);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(renderUserApi());
  }, []);
  // useEffect(() => {
  //   dispatch(renderUserApi());
  // }, []);
  if (loading) return <Loader />;
  const renderDataUser = () => {
    return data?.map((user) => {
      return <RenderUser key={user.taiKhoan} user={user} />;
    });
  };
  return (
    <div className="container">
      <table
        className="table 
      "
      >
        <thead>
          <tr>
            <th>Tài khoản</th>
            <th>Họ tên</th>
            <th>Email</th>
            <th>Số điện thoại</th>
            <th>Loại người dùng</th>
          </tr>
        </thead>
        <tbody>{renderDataUser()}</tbody>
      </table>
    </div>
  );
}
