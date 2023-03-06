import React from 'react'

export default function InfoMovie(props) {
    const {data}=props
  return (
      <div className='movie_detail'>
          <div className='movie_info'>
              <div className='row'>
                  <div className='col-4'>
                      <img className='img_info' src={data.hinhAnh}/>
                  </div>
                  <div className='col-8 info_main'>
                      <h1>{data.tenPhim}</h1>
                      <p>{data.moTa}</p>
                      <p>Ngày khỏi chiếu: 
                        <br/>{data.ngayKhoiChieu}</p>
                      <p>Đánh giá: {data.danhGia}/10</p>
                  </div>
              </div>
          </div>
      </div>
  )
}
