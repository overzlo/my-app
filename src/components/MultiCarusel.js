import React, { useState } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Card from 'react-bootstrap/Card';
import { NavLink } from 'react-router-dom';

import './mult.css';
import { dataDigitalBestSeller } from './data';
import imgGirl from '../assets/1.jpg';

export default function App() {

  const [defaultImage, setDefaultImage] = useState({});
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
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

    <div className='card-card'>
      <Card className='w-100 bg-dark'>
        <Card.Header className='text-light bg-dark' as='h3'>MOST POPULAR</Card.Header>
        <Card.Body className='card-body-body'>
          <div>
            <Slider {...settings}>
              {dataDigitalBestSeller.map((item) => (
                <div className="card-inside">
                  <div className="card-inside-top">
                    <img
                      src=
                      {item.linkImg}
                      alt={item.title}
                      onError={handleErrorImage}
                    />
                    <NavLink to={`/movies/${item.id}`}>{item.title}</NavLink>
                  </div>
                  <div className="card-inside-bottom">
                    <h3>{item.price}</h3>
                    <span className="category">{item.category}</span>
                  </div>
                </div>
              ))}
            </Slider>
          </div>
        </Card.Body>
      </Card>
    </div>
  );
}