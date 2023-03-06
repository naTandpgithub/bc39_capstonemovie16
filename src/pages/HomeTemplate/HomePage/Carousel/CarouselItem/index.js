import React from 'react';
import { Link } from 'react-router-dom';

export default function CarouselItem(prop) {
    const { item } = prop;

    return (
        <div className='carouselItem' style={{ backgroundImage: `linear-gradient(rgba(38, 38, 45, 0), rgb(38, 38, 45)),url(${item.hinhAnh})` }}>
            <div className='carouselContent'>
                <Link className='btn-light' to={`detail/${item.maPhim}`}>Detail</Link>
            </div>
        </div>

    )
}
