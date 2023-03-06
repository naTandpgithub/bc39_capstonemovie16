import React from 'react'
import { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { actDetailMovie } from './duck/action';
import { useParams } from "react-router-dom"
import InfoMovie from './InfoMovie';
import Cinema from './Cinema';
import Complex from './Complex';
import Showtime from './Showtime';

export default function Detailmovie() {
    const [cinema, setCinema] = useState();
    const [complex, setComplex] = useState();

    const param = useParams();

    const data = useSelector((state) => state.detailMovieReducer.data);

    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(actDetailMovie(param.id))
    }, [param.id])

    const rendercinema = () => {
        return (
            <div className='list_cinema'>
                {data?.heThongRapChieu.map(item => {
                    return (
                        <div>
                         <button onClick={() => { setCinema(item); setComplex() }}>
                            <Cinema item={item} cinem={cinema}/>
                         </button>
                        </div>
                    )
                })}
            </div>
        )
    }

    const renderComplex = () => {
        return (
            <div className='col-3 list_complex '>
                {cinema?.cumRapChieu.map(item => {
                    return (
                        
                            <button onClick={() => { setComplex(item) }}className="complex">
                                <Complex item={item} complex={complex}/>
                            </button>
                    
                    )
                })}
            </div>
        )
    }
    const renderShowTime = () => {
        return (
            <div className='col-6'>
                {complex?.lichChieuPhim.map(item => {
                    return (
                        <div>
                            <buttone>
                                <Showtime item={item}/>
                            </buttone>
                        </div>
                    )
                })}
            </div>
        )
    }

    return (
        <section className='section' id='detail'>
            {data && <InfoMovie data={data} />}
            {data && rendercinema()}

            <div className='row justify-content-center'>
                {cinema && renderComplex()}
                {complex && renderShowTime()}
            </div>
        </section>
    )
}