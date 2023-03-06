import React from 'react'

export default function Cinema(props) {
  const { item,cinema } = props
  return (
    <div className={item.maHeThongRap}>
      <img src={item.logo} width={100} height={100} />
    </div>)
}

//  style={item.maHeThongRap===cinema.maHeThongRap?{opacity:1}:{}}
