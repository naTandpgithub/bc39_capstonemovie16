import React from 'react'
import { Link } from 'react-router-dom'
import { StarOutlined, StarFilled, PlayCircleOutlined  } from '@ant-design/icons'

export default function ListMovieItem(props) {
    const { item,index,load } = props;
    const counts = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
    const renderStarFill = (score) => {
        let countstar = counts.filter((item) => item <= score);
        return countstar.map((itemcount) => <StarFilled />)
    }
    const renderStaroutlined = (score) => {
        let countstar = counts.filter((item) => item > score);
        return countstar.map((itemcount) => <StarOutlined />)
    }

    return (

        <div className="card ListMovieItem" style={index<10?{display:"block"}:{display:load}}>
            <div className="card-top">
                <img className='card-img-top' src={item.hinhAnh} alt="" />
                <Link to={`/detail/${item.maPhim}`} className='overlay'>
                    <PlayCircleOutlined className='play'/>
                </Link>
            </div>
            <div className="card-body">
                <Link className="card-title" to={`/detail/${item.maPhim}`}>{item.tenPhim}</Link>
                <p>{renderStarFill(item.danhGia)}{renderStaroutlined(item.danhGia)}</p>
            </div>
        </div>

    )
}
