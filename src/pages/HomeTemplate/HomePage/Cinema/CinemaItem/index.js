import React from 'react'

export default function CinemaItem(props) {
    const {item, cinema}=props;
  return (
    <div className='cinema_item'>
          <img src={item.logo} width={100} height={100} style={cinema===item.maHeThongRap?{opacity:1}:{}}/>
    </div>
  )
}
