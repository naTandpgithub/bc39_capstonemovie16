import React from 'react';
import { Link } from 'react-router-dom';

export default function MovieItem(props) {
    const {item}=props
  return (
      <div className='info_movie'>
          <div className='d-flex info'>
              <img src={item.hinhAnh}/>
              <p>{item.tenPhim}</p>
          </div>
          <div className='list_showtime'>{item.lstLichChieuTheoPhim.map((showtime) => {
              return (
                  <Link className='btn-light showtime' to={`/ticketroom/${showtime.maLichChieu}`}>{showtime.ngayChieuGioChieu}</Link>
              )
          })
          }</div>
      </div>
  )
}
