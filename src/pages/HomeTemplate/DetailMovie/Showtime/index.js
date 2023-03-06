import { Link } from 'react-router-dom';
import React from 'react'

export default function Showtime(props) {
    const { item } = props
    return (
        <div className='info_movie'>
          <div className='list_showtime'>
                  <Link className='btn-light showtime' to={`/ticketroom/${item.maLichChieu}`}>{item.ngayChieuGioChieu}</Link>
        
        </div>
      </div>
    )
}