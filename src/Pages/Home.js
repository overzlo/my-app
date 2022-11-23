import React, { Component } from 'react'
import CarouselBox from '../components/CarouselBox'
import MovieCard from '../components/MovieCard'
import MultiCarusel from '../components/MultiCarusel'
import Movie from '../components/Movie'
import NewcinemaSlider from '../components/NewcinemaSlider'
import Anime from '../components/Anime'
import Cartoons from '../components/Cartoons'
import Universe from '../components/Universe'
import MovieTabs from '../components/MovieTabs'
export default class Home extends Component {
    render() {
        return (
            <><header><CarouselBox /></header>
                <main>
                    
                    <Universe /> 
                    
                    <NewcinemaSlider />
                    <MultiCarusel />


                   

                    < Movie />
                    <Anime />
                    <Cartoons />


                </main>




            </>







        )



    }
}
