import React, { useState } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';



import { Card, ListGroup } from 'react-bootstrap'
import './nsslider.css';
import { datans } from './datans';
import imgGirl from '../assets/1.jpg';

export default function App() {

  const hoverHandler = (e) => {
    e.style.ImgOverlay.display = "inline";
  } 
  const outHandler = () => {
    console.log("onMouseLeave")
  }
  
  const [defaultImage, setDefaultImage] = useState({});
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  const handleErrorImage = (data) => {
    setDefaultImage((prev) => ({
      ...prev,
      [data.target.alt]: data.target.alt,
      linkDefault: imgGirl,
    }));

   
  };

  return (
    <div className='nscard'>
      <Card className='bg-dark'>
        <Card.Header className='text-light bg-dark'  as='h3'>OUR RECOMMENDATION</Card.Header>
        <div>
          <Slider {...settings}>
            {datans.map((item) => (
              <div className='text-img'>
              <Card className="bg-dark">
                  <Card.Img className='card-img'
                    src={
                      item.linkImg
                    }
                  />
                <Card.ImgOverlay className='img-overlay'>
                  <Card.Title className='text-light ' as='h3'>{item.title}</Card.Title>
                  <Card.Text className='text-light' as='h3'>
                    {item.description}
                  </Card.Text>
                  <Card.Text className='text-light' as='h3'>{item.category}</Card.Text>
                  <Card.Text class = 'text-light' as='h3'>{item.year}</Card.Text>

                </Card.ImgOverlay>
              </Card>
              </div>
            ))}
          </Slider>
        </div>
      </Card>
    </div>
  );
}