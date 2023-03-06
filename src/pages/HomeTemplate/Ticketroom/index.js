import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useEffect,useState } from 'react';
import { useParams } from 'react-router-dom';
import { actTicketroom } from './duck/duckTicketroom/action';
import InfoTicket from './Infoticket';
import Seat from './Seat';
import { Navigate } from 'react-router-dom';


export default function Ticketroom() {
    const[selectSeat,setSelectSeat]=useState([]);

    const param = useParams();

    const data = useSelector((state) => state.ticketroomReducer.data);

    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(actTicketroom(param.id))
    }, [param.id]);

    const renderInfo=()=>{ 
        return(
            <div className='col-4'>
                <InfoTicket infoTicket={data.thongTinPhim} selectSeat={selectSeat }/>
            </div>
        )
    }

    const handleSelectSeat=(seat)=>{ 
        selectSeat?.map((item) => item.maGhe).indexOf(seat.maGhe) !== -1 
        ? 
        setSelectSeat([...selectSeat]?.filter((item) => {
                return item.maGhe != seat.maGhe;
            }))
        :
         setSelectSeat([...selectSeat, seat])
    }



    if (!localStorage.getItem("userLogin")) return <Navigate replace to={"/login"} />



    const renderSeats=()=>{
        return(
            <div className='col-6'>
                <div className='screen'><p>Screen</p></div>
                <div className='list_seats'>
                    {data?.danhSachGhe.map((seat)=>{
                        return (
                            <button 
                            className='seat' 
                            onClick={seat.daDat?"":() => { handleSelectSeat(seat) }}
                            style={{ backgroundColor: handlecolorSeat (seat)}}
                            ><Seat seat={seat} selectSeat={selectSeat} /></button>
                            )
                    })}
                </div>
            </div>
        )
    }
    
    const handlecolorSeat=(seat)=>{
      if(seat.daDat){
          return "#353536"
      } else if(selectSeat?.map((item) => item.maGhe).indexOf(seat.maGhe) !== -1){
          return "#626ff8"
      } else{
        return "#fff"
      }
    }

    return (
        <section className='section' id='ticketroom'>
            <div className='row'>
                {data && renderSeats()}
                <div className='col-2'>
                    <div className='modal_seat'> 
                        <div className='seat' style={{ backgroundColor: "#fff" }}>
                            <p>vailable</p></div>
                        <div className='seat' style={{ backgroundColor: "#626ff8" }}><p>Selecting</p></div>
                        <div className='seat' style={{ backgroundColor: "#353536" }}><p>Selected</p></div>
                    </div>
                </div>
                {data && renderInfo()}
            </div>
        </section>
        
    )
}