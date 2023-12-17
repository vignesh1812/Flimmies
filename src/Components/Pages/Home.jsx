import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import './Home.css';
import Skeleton, { SkeletonTheme } from "react-loading-skeleton"
// import axios from 'axios'
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import MovieCard from '../MovieCard';
const Home = () => {
    const [Popular, setPopular] = useState([]);
    const [NewArrival, setNewArrival] = useState([]);
    const [TopRated, setTopRated] = useState([]);
    const [Vintage, setVintage] = useState([]);
    const [isLoading, setisLoading] = useState(true);
    // const url = 'https://ott-details.p.rapidapi.com/advancedsearch';
    const urlPopular = 'https://flimmies-backend.onrender.com/popularData';
    const urlNewArrival = 'https://flimmies-backend.onrender.com/newArrival';
    const urlTopRated = 'https://flimmies-backend.onrender.com/topRated';
    const urlVintage = 'https://flimmies-backend.onrender.com/Vintage';

    useEffect(() => {

        const fetchDataNewArrivals = async () => {
            let response = await fetch(urlNewArrival);
            let result = await response.json();
            setNewArrival(result.results);
            console.log(NewArrival);
        }

        fetchDataNewArrivals();

    }, [])
    useEffect(() => {


        const fetchData = async () => {
            let response = await fetch(urlPopular);
            let result = await response.json();
            setPopular(result.results);
            console.log(Popular);
        }

        fetchData();

    }, [])
    useEffect(() => {
        const fetchDataToprated = async () => {
            let response = await fetch(urlTopRated);
            let result = await response.json();
            setTopRated(result.results);
            console.log(TopRated);
        }
        fetchDataToprated();

    }, [])
    useEffect(() => {

        const fetchDataVintage = async () => {
            let response = await fetch(urlVintage);
            let result = await response.json();
            setVintage(result.results);
            console.log(Vintage);
        }
        fetchDataVintage();
    }, [])
    useEffect(() => {
        setTimeout(() => {
            setisLoading(false)
        }, 1500)
    }, [])
    const popularHome = Popular.slice(0, 12);
    const NewArrivalHome = NewArrival.slice(0, 12);
    const TopRatedHome = TopRated.slice(0, 12);
    const VintageHome = TopRated.slice(0, 18);
    return (
        <div id='home'>
            <div id='NewArrival-category'>
                <h3 className='category'>New Arrivals</h3>
                <div className='flex-moviecard'>
                    {NewArrival && NewArrivalHome.map((movie) => {
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
            <div className='view-more'>

                <Link to='/movies/newArrival' className='text-decoration-none view-button'>View More</Link>
            </div>
            <div id='popular-category'>
                <h3 className='category'>Popular Movies</h3>
                <div className='flex-moviecard'>
                    {Popular && popularHome.map((movie) => {

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
            <div className='view-more'>

            <Link to='/movies/popular' className='text-decoration-none view-button'>View More</Link>
            </div>

            <div id='TopRated-category'>
                <h3 className='category'>Top Rated Movies</h3>
                <div className='flex-moviecard'>
                    {TopRated && TopRatedHome.map((movie) => {
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
            <div className='view-more'>

            <Link to='/movies/toprated' className='text-decoration-none view-button'>View More</Link>
            </div>


            <div id='Vintage-category'>
                <h3 className='category'>Vintage Movies</h3>
                <div className='flex-moviecard'>
                    {Vintage && VintageHome.map((movie) => {
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


        </div>
    )
}

export default Home