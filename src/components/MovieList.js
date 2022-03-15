import React, {useState} from 'react';
import MovieCard from './MovieCard.js';
import 'bootstrap/dist/css/bootstrap.min.css';
import Add from './Add.js';
export const MovieList = ({movies,addMovie}) => {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    // <div className='MovieList'>
    <div>
      <button onClick={handleShow}>Add</button>
      <Add addMovie={addMovie} show={show} handleClose={handleClose}/>
    <div class="container"> 
      {movies.map(el => <MovieCard movie={el} />)}
    </div>
    </div>
  )
}
export default MovieList