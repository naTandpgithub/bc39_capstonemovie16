import React from 'react'
import { useState, } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { actUserLogin } from './duck/action';
import { useLocation, useNavigate } from 'react-router-dom';
import { Navigate } from 'react-router-dom';

export default function UserLogin() {
    
    const preRoute = useLocation();
    
    const data = useSelector((state) => state.userLoginReducer);

    const [state, setState] = useState("");
    const dispatch = useDispatch();

    const handleOnchange = (event) => {
        console.log(event.target.value);
        const { name, value } = event.target;
        setState({
            ...state,
            [name]: value,
        })
    }

    const navigate = useNavigate();
    const handleSubmit = (event) => {
        event.preventDefault();
        dispatch(actUserLogin(state, navigate, preRoute))
    }

    const renderNoti=()=>{
        const {error}=data;
        return error && <div className='text-danger'><span>{error.response.data.content}</span></div>
    }

    if (localStorage.getItem("userLogin"))
        return <Navigate replace to={"/"} />;
    return (
        <section className='section' id='userLogin'>
            <div className='container'>
                <form onSubmit={handleSubmit}>
                    <div className='row d-flex justify-content-center'>
                        <div className=' d-flex  flex-column'>
                            <div className="card-header text-center">
                                <h1 className='section-title'>Welcome Back!</h1>
                            </div>
                            <div className="card-body">
                                <div >
                                    <input type="text" className="input form-control-lg" name='taiKhoan' onChange={handleOnchange} placeholder="User" />
                                </div>
                                <div >
                                    <input type="password" className="input form-control-lg" name='matKhau' onChange={handleOnchange} placeholder="Password" />
                                </div>
                                {renderNoti()}
                            </div>
                            <div className="card-footer d-flex  justify-content-center align-items-center">
                                <button className=' btn-light'>Login</button>
                                <div>
                                    <p>Create new account:
                                    </p>
                                    <p><a href="/register">
                                        Rigister
                                    </a></p>
                                </div>
                            </div>
                        </div>
                   </div>
                </form>
            </div>
        </section>
    )
}
