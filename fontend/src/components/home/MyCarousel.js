import React from 'react'
import { Carousel } from 'antd';
const MyCarousel = () => {
    const contentStyle = {
        height: '650px',
        color: '#fff',
        lineHeight: '650px',
        textAlign: 'center',
        background: '#364d79',
      };
    return (
        <Carousel autoplay={true}>
        <div>
          <h3 style={contentStyle}>1</h3>
        </div>
        <div>
          <h3 style={contentStyle}>2</h3>
        </div>
        <div>
          <h3 style={contentStyle}>3</h3>
        </div>
        <div>
          <h3 style={contentStyle}>4</h3>
        </div>
      </Carousel>
    )
}

export default MyCarousel
