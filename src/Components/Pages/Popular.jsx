import { useEffect, useState } from "react"
import MovieCard from "../MovieCard";
import Skeleton, { SkeletonTheme } from "react-loading-skeleton"
// import axios from 'axios'
import 'react-responsive-carousel/lib/styles/carousel.min.css';
// import React {useState,useEffect}from 'react'

const Popular = () => {
    const [Popular, setPopular] = useState([]);
    const [isLoading, setisLoading] = useState(true);

    const urlPopular = 'https://flimmies-backend.onrender.com/popularData';
useEffect(()=>{
    const fetchData = async () => {
        let response = await fetch(urlPopular);
        let result = await response.json();
        setPopular(result.results);
        console.log(Popular);
    }
    fetchData();

},[])
useEffect(()=>{
    setTimeout(()=>{
        setisLoading(false)
    },1500)
},[Popular])
  return (
    <div id='popular-page'>
            <h3 className='category'>Popular Movies</h3>
            <div className='flex-moviecard'>
                {Popular && Popular.map((movie) => {
                     return isLoading
                     ?
                     <div className="cards">
                         <SkeletonTheme color="#202020" highlightColor="#444">
                             <Skeleton height={330} duration={2} />
                         </SkeletonTheme>
                     </div> :(<MovieCard key={movie.imdb} image={movie.imageurl} title={movie.title} id={movie.imdbid} rating={movie.imdbrating} released={movie.released} about={movie.synopsis} type={movie.type} genre={movie.genre} />)

                })
                }
            </div>

            </div>
  )
}

export default Popular