import React, { Component } from 'react'
import {  Card} from 'react-bootstrap'
import { dataDigitalBestSeller } from './data';

export default class newcinema extends Component {
    render() {
        return (
            <div >
                {dataDigitalBestSeller.map((item) => (
                    <Card className="bg-dark text-white">
                        <Card.Img 
                            src={
                                item.linkImg
                            } 
                           />
                        <Card.ImgOverlay>   
                            <Card.Title>{item.title}</Card.Title>
                            <Card.Text>
                                This is a wider card with supporting text below as a natural lead-in
                                to additional content. This content is a little bit longer.
                            </Card.Text>
                            <Card.Text>Last updated 3 mins ago</Card.Text>
                        </Card.ImgOverlay>
                    </Card>
                ))}
            </div>
        )
    }
}
