import './MovieCard.css';
import noimage from '../../Logos/noimage.jpg';
import { FaStar } from "react-icons/fa";
// import { TiStar } from "react-icons/ti";
import { GoDotFill } from "react-icons/go";
import { Link } from 'react-router-dom';
const MovieCard = ({image,id,type,about,genre,title,released,rating}) => {
const titleNew=title;
const imageNew=image;
console.log(imageNew);
  return (
    <Link className="moviecard" to={`/movies/${id}`}>
        <img src={imageNew.length?image:noimage} alt={title} />
        <div className='rating d-flex align-items-center'><span>{rating}</span><span className='star'><FaStar/></span></div>
      <p className={titleNew.length<25?"text-capitalize title":"text-capitalize title titlesmall"}>{title}</p>
      <div className="smaller">
      <p>{type}</p>
      <p><GoDotFill/></p>
      <p>{genre[0]}</p>
      <p><GoDotFill/></p>
      <p>{released}</p>
      </div>

      
    </Link>
  )
}

export default MovieCard