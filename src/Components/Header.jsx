// import React from 'react'
import Logo from '../../Logos/png/logo-no-background.png';
import Popular from '../../Logos/png/fire.png';
import Upcoming from '../../Logos/png/ticket.png';
import Toprated from '../../Logos/png/top-rated.png';
import Theater from '../../Logos/png/theater.png';
import './Header.css'
import { IoSearch } from "react-icons/io5";
import { NavLink } from 'react-router-dom'
import { useState } from 'react';

const Header = () => {
    const [focus, setFocus] = useState(false);
    return (
        <div id='navigate-bar' className='shadow-sm'>
            <div className="brand d-flex align-items-center">
                <img src={Logo} alt="filmstars" id='logo' />
                <NavLink to='/' className='logo-name text-decoration-none'>FilmmieS</NavLink>
            </div>
            <div id='searchbox' className={focus === true ? "d-flex focus" : "d-flex"}>
                <input type="text" onFocus={() => { setFocus(!false) }} placeholder='Search movies here' />
                <button className='' onClick={() => { setFocus(false) }}><IoSearch /></button>
            </div>
            <NavLink className='text-decoration-none text' to='/movies/popular'><img src={Popular} alt="popularmovies" /><span>Popular</span></NavLink>
            <NavLink className='text-decoration-none text' to='/movies/newArrival'><img src={Upcoming} alt="UpcomingMovies" /><span>New Arrivals</span></NavLink>
            <NavLink className='text-decoration-none text' to='/movies/toprated'><img src={Toprated} alt="topatedmovies" /><span>Top Rated</span></NavLink>
            <div id='dropdown'>

              <div className="dropdown-toggle dropdown-toggle-split" data-bs-toggle="dropdown" aria-expanded="false" id='combine-dropdown'>
              <button type="button" id='splitter' className="btn text-white">Categories</button>
                
                </div>  
                <ul className="dropdown-menu">
                    <li><NavLink className="dropdown-item text-decoration-none" to='/movies/popular'><img src={Popular} alt="popularmovies" /><span>Popular</span></NavLink></li>
                    <li><hr className="dropdown-divider m-0 p-0" /></li>
                    <li><NavLink className="dropdown-item text-decoration-none" to='/movies/newArrival'><img src={Upcoming} alt="upcoming" /><span>Upcoming</span></NavLink></li>
                    <li><hr className="dropdown-divider m-0 p-0" /></li>
                    <li><NavLink className="dropdown-item text-decoration-none" to='/movies/toprated'><img src={Toprated} alt="toprated" /><span>Top Rated</span></NavLink></li>
                    <li><hr className="dropdown-divider m-0 p-0" /></li>
                    <li><NavLink className="dropdown-item text-decoration-none" to='/'><img src={Theater} alt="Home" /><span>Home</span></NavLink></li>
                </ul>
            </div>

            <NavLink className='button text-decoration-none' to='/signin'>Signin</NavLink>
        </div>
    )
}

export default Header