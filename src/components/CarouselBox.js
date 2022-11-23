import React, { Component } from 'react'
import Carousel from 'react-bootstrap/Carousel'
import houseofdragon1 from '../assets/1.jpg'
import houseofdragon2 from '../assets/2.jpg'
import houseofdragon3 from '../assets/3.jpg'

export default class CarouselBox extends Component {
    render() {
        return (
            <Carousel>
                <Carousel.Item>
                    <img className='d-block w-100 '

                        src={houseofdragon1}
                        alt="HOTD"
                    />
                    <Carousel.Caption>
                        <h3>House of The Dragon</h3>
                        <p>House of the Dragon</p>
                    </Carousel.Caption>
                </Carousel.Item>

                <Carousel.Item>
                    <img className='d-block w-100'

                        src={houseofdragon2}
                        alt="HOTD"
                    />
                    <Carousel.Caption>
                        <h3>House of The Dragon</h3>
                        <p>House of the Dragon</p>
                        <p>SOSOSOSOSO</p>
                    </Carousel.Caption>
                </Carousel.Item>
                

                <Carousel.Item>
                    <img className='d-block w-100'

                        src={houseofdragon3}
                        alt="HOTD"
                    />
                    <Carousel.Caption>
                        <h3>House of The Dragon</h3>
                        <p>House of the Dragon</p>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
        )
    }
}
