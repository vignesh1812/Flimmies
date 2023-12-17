import { useEffect, useState } from "react"
import MovieCard from "../MovieCard";
// import React {useState,useEffect}from 'react'
import Skeleton, { SkeletonTheme } from "react-loading-skeleton"
// import axios from 'axios'
import 'react-responsive-carousel/lib/styles/carousel.min.css';

const NewArrival = () => {
    const [isLoading, setisLoading] = useState(true);

    const [Arrival, setArrival] = useState([]);
    const urlPopular = 'https://flimmies-backend.onrender.com/NewArrival';
useEffect(()=>{
    const fetchData = async () => {
        let response = await fetch(urlPopular);
        let result = await response.json();
        setArrival(result.results);
        console.log(Arrival);
    }
    fetchData();

},[Arrival])
useEffect(()=>{
    setTimeout(()=>{
        setisLoading(false)
    },1500)
},[])
  return (
    <div id='newArrival-page'>
            <h3 className='category'>New Arrival Movies</h3>
            <div className='flex-moviecard'>
                {Arrival && Arrival.map((movie) => {
                     return isLoading
                     ?
                     <div className="cards">
                         <SkeletonTheme color="#202020" highlightColor="#444">
                             <Skeleton height={330} duration={2} />
                         </SkeletonTheme>
                     </div> : (<MovieCard key={movie.imdb} image={movie.imageurl} title={movie.title} id={movie.imdbid} rating={movie.imdbrating} released={movie.released} about={movie.synopsis} type={movie.type} genre={movie.genre} />)

                })
                }
            </div>

            </div>
  )
}

export default NewArrival;