import React from 'react';
import { Navigate } from 'react-router-dom';

export default function InfoUser() {
  if (!localStorage.getItem("userLogin")) return <Navigate replace to={"/login"} />
  const user = JSON.parse(localStorage.getItem("userLogin"));
  console.log(user);
  return (
    <section className='section'>
      <div className="row d-flex justify-content-center">
        <div className=' d-flex  flex-column'><div className="card-header">
          <h1 className='section-title'>Register</h1>
        </div>
          <div className="card-body">
            <div>
              <label>Tài Khoản</label>
              <input type="text" className="input form-control-lg" name='taiKhoan' value={user.taiKhoan} />
            </div>
            <div>
              <label>Email</label>
              <input type="text" className="input form-control-lg" name='email' value={user.email}/>
            </div>
            <div>
              <label>Số điện thoại</label>
              <input type="text" className="input form-control-lg" name='soDt' value={user.soDT}/>
            </div>
            <div>
              <label>Họ tên</label>
              <input type="text" className="input form-control-lg" name='hoTen' value={user.hoTen} />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
