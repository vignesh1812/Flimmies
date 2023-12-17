import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { IoMdStar } from "react-icons/io";
import { MdLocalMovies } from "react-icons/md";
import { GiFilmSpool } from "react-icons/gi";
import axios from 'axios';
import './MovieDetails.css';
const urlMovieDetails = 'https://flimmies-backend.onrender.com/MovieDetails';
const MovieDetails = () => {
    const [MovieDetails, setMovieDetails] = useState([]);
    const { id } = useParams();
    useEffect(() => {
        const fetchMovieDetails = async () => {
            try {
                const response = await axios.post(urlMovieDetails, { id: `${id}` })
                console.log(response.data);
                setMovieDetails(response.data)

            }
            catch (err) {
                if (err) throw err
            }


        }
        fetchMovieDetails();
    }, [id])
    return (
        <div id='Movie-Details'>
            <div className='details'>
                <h2 className='Movie-title'><span id='title-icon' className='pe-1'><MdLocalMovies /></span>{MovieDetails.title}</h2>
                <div className='Moviebadges'>

                    <p className='Moviebadge'>{MovieDetails.imdbrating} <span id='starrate'><IoMdStar /></span>Rating</p>

                    <p className='Moviebadge'>{MovieDetails.type}</p>
                    <p className='Moviebadge'>{MovieDetails.genre}</p>
                    <p className='Moviebadge'>{MovieDetails.language}</p>
                    <p className='Moviebadge'>{MovieDetails.released}</p>

                </div>
                <p><span className='pe-1'><GiFilmSpool /></span>Runtime : {MovieDetails.runtime}</p>
                <p className='synopsis'>
                    {MovieDetails.synopsis}
                </p>

            </div>
            <div>
                <img src={MovieDetails.imageurl} alt={MovieDetails.title} />
            </div>
        </div>
    )
}

export default MovieDetails