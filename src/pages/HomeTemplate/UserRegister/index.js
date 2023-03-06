import React from 'react'
import { useState } from 'react'
import { useDispatch } from 'react-redux'
import { actUserRegister } from './duck/action'
import { useNavigate } from 'react-router-dom'

export default function UserRegister() {
    const [state, setState] = useState({
        taiKhoan: "",
        matKhau: "",
        email: "",
        soDt: "",
        maNhom: "GP15",
        hoTen: "",
        maLoaiNguoiDung: "KhachHang",
    })

    const handleOnchange = (e) => {
        const { name, value } = e.target;
        setState({
            ...state,
            [name]: value,
        })
    }

    const navigate = useNavigate()

    const dispatch = useDispatch()

    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch(actUserRegister(state, navigate))
    }



    return (
        <section className="section" id='userRegister'>
            <div className='container'>
                <form onSubmit={handleSubmit}>
                    <div className="row d-flex justify-content-center">
                        <div className=' d-flex  flex-column'><div className="card-header">
                            <h1 className='section-title'>Register</h1>
                        </div>
                            <div className="card-body">
                                <div>
                                    <input placeholder="Tài Khoản" type="text" className="input form-control-lg" name='taiKhoan' onChange={handleOnchange} />
                                </div>
                                <div>
                                    <input placeholder="Mật khẩu" type="password" className="input form-control-lg" name='matKhau' onChange={handleOnchange} />
                                </div>
                                <div>
                                    <input placeholder="Email" type="text" className="input form-control-lg" name='email' onChange={handleOnchange} />
                                </div>
                                <div>
                                    <input placeholder="Số điện thoại" type="text" className="input form-control-lg" name='soDt' onChange={handleOnchange} />
                                </div>
                                <div>
                                    <input placeholder="Họ tên" type="text" className="input form-control-lg" name='hoTen' onChange={handleOnchange} />
                                </div>
                            </div>
                            <div className="card-footer d-flex justify-content-center align-items-center">
                                <button className='btn btn-light'>Create</button>
                                <div>
                                    <p>You have account!</p>
                                    <p><a href='/login'>Login</a></p>
                                </div>
                            </div>
                        </div>
                    </div>
                </form>
            </div>
        </section>

    )
}
