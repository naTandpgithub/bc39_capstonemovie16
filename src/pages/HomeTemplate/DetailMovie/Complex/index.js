import React from 'react'

export default function Complex(props) {
    const { item,complex } = props
    return (
        <div className='d-flex'>
            <img src={item.hinhAnh} />
            <div>
                <p>{item.tenCumRap}</p>
                <a>{item.diaChi}</a>
            </div>
        </div>)
}

// style = { complex.maCumRap === item.maCumRap ? { opacity: "1" } : {} }