import { actBookTicket } from '../duck/duckBookTicket/action';
import React from 'react';
import { useDispatch } from 'react-redux';

export default function InfoTicket(props) {
  const { infoTicket, selectSeat } = props;
  const dispatch=useDispatch();

  const handleBookTicket = (infoTicket, selectSeat) => {
    const listTicket = {
      maLichChieu: infoTicket.maLichChieu,
      danhSachVe: 
        (selectSeat?.map((seat) => {
          return {
            maGhe: seat.maGhe,
            giaVe: seat.giaVe,
          }
        }))
    }
    dispatch(actBookTicket(listTicket));
  }
  return (
    <div className='info_main'>
      <h1>{infoTicket.tenPhim}</h1>
      <p>Ngày: {infoTicket.ngayChieu}</p>
      <p>Giờ:{infoTicket.gioChieu}</p>
      <p>{infoTicket.tenRap}</p>
      <table className='table table-primary'>
        <thead>
          <th>Số ghê</th>
          <th>Giá</th>
        </thead>
        <tbody>
          {selectSeat?.map((seat) => {
            return (
              <tr>
                <td>{seat.tenGhe}</td>
                <td>{seat.giaVe}</td>
              </tr>
            )
          })}
        </tbody>
      </table>
      <button className='btn btn-success' onClick={() => { handleBookTicket(infoTicket,selectSeat) }}>Đặt vé</button>
    </div>
  )
}