import React from 'react';
import StarRatingComponent from 'react-star-rating-component';

export const MovieCard = ({movie}) => {

  return (
  <div class="container">
  <div class="card">
    <div class="card__header">
      <img src={movie.posterUrl} alt="card__image" class="card__image"></img>
    </div>
    <div class="card__body">
      <h4>{movie.title}</h4>
      <StarRatingComponent 
          name="rate1" 
          starCount={5}
          value={movie.rate}
         />
      <span class="tag tag-blue">{movie.ficheTechnique}</span>
      <p>{movie.description}</p>
    </div>
  </div>
</div>
  )
}
export default MovieCard