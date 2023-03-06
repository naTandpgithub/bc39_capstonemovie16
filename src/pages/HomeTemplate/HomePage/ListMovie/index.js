import React, { useState } from 'react'
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { actListMovie } from './duck/action';
import ListMovieItem from './ListMovieItem';

export default function ListMovie() {
    const ListMovie = useSelector((state) => state.listMovieReducer.data);
    const [load,setLoad]=useState("none")


    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(actListMovie())
    }, []);

    const renderShowingMovie = () => {
        let showingMovie = ListMovie.filter((movie) => movie.dangChieu===true)
        return showingMovie?.map((item, index) => {
            return (
                <ListMovieItem key={item.index} item={item} index={index} load={load}/>
            )
        })
        } 
      
    const renderComingsoonMovie = () => {
        let comingsoonMovie = ListMovie.filter((movie) => movie.sapChieu === true)
        return (comingsoonMovie?.map((item,index) => {
            return (
                <ListMovieItem key={item.index} item={item} index={index} load={load} />
            )
        }))
    }
    return (
        <section className='section' id='listMovie'>
            <div className='listMovie_tab'>
                <ul className="nav nav-tabs ">
                    <li className="nav-item">
                        <a className="nav-link active" data-toggle="tab" href="#showing">Showing</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" data-toggle="tab" href="#comingsoon">Coming soon</a>
                    </li>
                </ul>
            </div>
            <div className="tab-content ">
                <div id="showing" className=" tab-pane active">
                    <div className='listmovie d-flex flex-wrap justify-content-center'>
                        {ListMovie && renderShowingMovie()}
                    </div>
                    <div className='d-flex justify-content-center'>
                        <button class="btn-light" onClick={() => {
                            setLoad("block")
                        }} style={load === "block" ? { display: "none" } : {}}
                        >Load more</button>

                        <button class="btn-light" onClick={() => {
                            setLoad("none")
                        }} style={load === "none" ? { display: "none" } : {}}
                        >Shorten</button>
                    </div>
                </div>
                <div id="comingsoon" className="container tab-pane fade">
                    <div className='listmovie d-flex flex-wrap justify-content-center'>
                        {ListMovie && renderComingsoonMovie()}
                    </div>
                    <button class="btn-light" onClick={() => {
                        setLoad("block")
                    }} style={load === "block" ? { display: "none" } : {}}
                    >Load more</button>
                    <button class="short_listmovie" onClick={() => {
                        setLoad("none")
                    }} style={load === "none" ? { display: "none" } : {}}
                    >Shorten</button>
                </div>
            </div>
        </section>
    )
}
