import { useEffect, useState } from "react"
import MovieCard from "../MovieCard";
import Skeleton, { SkeletonTheme } from "react-loading-skeleton"
// import axios from 'axios'
import 'react-responsive-carousel/lib/styles/carousel.min.css';
// import React {useState,useEffect}from 'react'

const TopRated = () => {
    const [isLoading, setisLoading] = useState(true);

    const [Toprated, setToprated] = useState([]);
    const urlTopRated = 'https://flimmies-backend.onrender.com/topRated';
useEffect(()=>{
    const fetchData = async () => {
        let response = await fetch(urlTopRated);
        let result = await response.json();
        setToprated(result.results);
        console.log(Toprated);
    }
    fetchData();

},[])
useEffect(()=>{
    setTimeout(()=>{
        setisLoading(false)
    },1500)
},[Toprated])
  return (
    <div id='TopRated-page'>
            <h3 className='category'>Top Rated Movies</h3>
            <div className='flex-moviecard'>
                {Toprated && Toprated.map((movie) => {
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

export default TopRated;