// import react from 'react'
import {BrowserRouter, Route, Routes} from "react-router-dom"
import './App.css'
import Header from './Components/Header'
import Page404 from './Components/page404'
import Home from './Components/Pages/Home'
import Popular from './Components/Pages/Popular'
import NewArrival from './Components/Pages/NewArrival'
import TopRated from "./Components/Pages/TopRated"
import MovieDetails from "./Components/Pages/MovieDetails"
import Register from './Components/Register'

function App() {
  return (
    <>
    <BrowserRouter>
    <Header/>
    <Routes>
      
      <Route index path='/' Component={Home}/>
      <Route path='/movies/popular' Component={Popular}/>
      <Route path='/movies/newArrival' Component={NewArrival}/>
      <Route path='/movies/toprated' Component={TopRated}/>
      <Route path='/movies/:id' Component={MovieDetails}/>
      <Route path='/signin' Component={Register}/>
      <Route path='*' Component={Page404}/>
    </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
