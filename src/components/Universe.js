import React, { useState } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Franc from '../Pages/Franc';
import { Route } from 'react-router';

import { BrowserRouter as Router, Routes, Link } from 'react-router-dom';

import { Card, ListGroup, NavLink } from 'react-bootstrap'
import './uni.css';
import { franc } from './franc';
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
    slidesToShow: 3,
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
          <Card.Header className='text-light bg-dark' as='h3'>FRANCHISES</Card.Header>
          <div>
            <Slider {...settings}>
              {franc.map((item) => (
                <div className='text-img'>
                  <Card className="bg-dark ">
                    <Card.Img className='uni-img' 
                      src={
                        item.img
                      }
                    />
                    <Card.ImgOverlay className='img-overlay'>
                      <Card.Title className='text-light ' as={Link} to="/francMCU " >{item.title}</Card.Title>
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