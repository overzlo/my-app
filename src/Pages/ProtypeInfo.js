import React, { Component } from 'react'
import '../components/prototype.css'
import img from '../assets/1.jpg'
export default class ProtypeInfo extends Component {
  render() {
    return (
        <>
        <div className='prototype'>
            <div className='logo'><img>{img}</img></div>
            <div className='info'></div>
         </div></>
      
    )
  }
}
