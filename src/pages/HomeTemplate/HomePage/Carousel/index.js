import React from 'react';
import { useDispatch } from 'react-redux';
import { actCarousel } from './duck/action';
import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import CarouselItem from './CarouselItem';
import { Carousel } from 'antd';

export default function Banner() {
    const data = useSelector((state) => state.CarouselReducer.data);

    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(actCarousel())
    }, []);

    const renderdata = () => {
        return (data?.map((item,index) => {
            return (
                <CarouselItem key={item.index} item={item}  />
            )
        }))
    }

    return (
        <Carousel autoplay>
            {renderdata()}
        </Carousel>
    )
}

