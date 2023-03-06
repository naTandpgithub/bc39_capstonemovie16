import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useEffect, useState } from 'react'
import { actListCinema } from './duck/DuckCinema/action';
import CinemaItem from './CinemaItem';
import { actListComplex } from './duck/DuckComplex/action';
import ComplexItem from './ComplexItem';
import MovieItem from './MovieItem';

export default function Cinema() {
    const dispatch= useDispatch();
    useEffect(()=>{
        dispatch(actListCinema());
    },[])

    const listCinema=useSelector((state)=>state.listCinemaReducer.data);
    
    const listComplex= useSelector((state)=>state.ComplexReducer.data);

    const [cinema, setCinema] = useState("BHDStar");
    const [complex,setComplex]=useState("");

    const renderListCinema=()=>{
        return(
            <div className="list_cinema">
                {listCinema?.map(item => {
                    return (
                            <button onClick={() => { setCinema(item.maHeThongRap);
                                 setComplex()}}>
                                <CinemaItem item={item} cinema={cinema} />
                            </button>
                    )
                })}
            </div>
        )
    }

    useEffect(()=>{
       dispatch(actListComplex(cinema))
    },[cinema])
    console.log(listComplex);

    const renderListComplex=()=>{
        return(
            <div className='col-3 list_complex'>
                {listComplex && listComplex[0].lstCumRap.map((item) => {
                    return (
                        <button onClick={() => { setComplex(item) }} className="complex">
                            <ComplexItem item={item} tenHeThongRap={listComplex[0].tenHeThongRap} complex={complex}/>
                            </button>
                    )
                })}
            </div>
        )
    }

    const renderMovie=()=>{
        return(
            <div className='col-6'>
                {complex && complex.danhSachPhim.map((item) => {
                    return (
                        <MovieItem item={item}/>
                    )
                })}
            </div>
        )
    }

    return (
        <section className='section' id='cinema'>
            {renderListCinema()}
            <div className='row cinema_scroll'>
                {renderListComplex()}
                {renderMovie()}
            </div>
        </section>
  )
}
