import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import renderUserApi from "./duck/action";
import Loader from "./../../../component/Loader";
import RenderUser from "./renderUser";

import AddUser from "./renderUser/AddUser";
import Search from "./Search/Search";
import actDeleteUserApi from "./renderUser/Delete/duck/action";
import actEditUserApi from "./renderUser/EditUser/duck/action";

export default function User() {
  const loading = useSelector((state) => state.dataUserReducer.loading);
  const data = useSelector((state) => state.dataUserReducer.data);
  // if (data) console.log(data[0]);
  const [deletetUser, setDeletetUser] = useState("");
  const [searchtUser, setSearchUser] = useState("");
  // const [filterUser, setFiltertUser] = useState(data);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(renderUserApi());
    // setFiltertUser((data) => data.filter((t) => t.includes(searchtUser)));
  }, [deletetUser]);
  // useEffect(() => {
  //   dispatch(renderUserApi());
  // }, []);
  if (loading) return <Loader />;
  const renderDataUser = () => {
    const dataFilter = data?.filter((data) => {
      return data.hoTen.indexOf(searchtUser) !== -1;
    });

    console.log(dataFilter);
    return dataFilter?.map((user) => {
      return (
        <RenderUser
          key={user.taiKhoan}
          user={user}
          handleOnlickDelete={handleOnlickDelete}
          handleOnClickEditUser={handleOnClickEditUser}
        />
      );
    });
  };

  const handleOnlickDelete = (id) => {
    setDeletetUser(id);
    // const idDelete = user.taiKhoan;
    // console.log(idDelete);
    dispatch(actDeleteUserApi(id));
    // renderDataUser();
    // console.log(id);
  };

  const handleOnClickEditUser = (id) => {
    console.log(id);
    dispatch(actEditUserApi(id));
  };

  const handleSearchOnchange = (e) => {
    const wordLowercase = e.target.value.toLowerCase();
    console.log(wordLowercase);
    setSearchUser(wordLowercase);
  };

  return (
    <div className="container">
      <div className="d-flex justify-content-between ">
        <div>
          <Search handleSearchOnchange={handleSearchOnchange} />
        </div>
        <div>
          <button
            className="btn btn-primary"
            type="button"
            data-toggle="modal"
            data-target="#exampleModal"
          >
            Add User
          </button>
          {/* modal  */}
          <AddUser renderUser={() => dispatch(renderUserApi())} />
        </div>
      </div>

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
