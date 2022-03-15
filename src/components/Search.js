import React, {useState} from 'react';
import StarRatingComponent from 'react-star-rating-component';
const Search = () => {
    const [rating, setRating] = useState(1)
    const onStarClick=(nextValue, prevValue, name)=> {
    setRating(nextValue);
    }
  return (
    <div>
        <input type="text" placeholder="Search..."/>
          <StarRatingComponent 
          name="rate1" 
          starCount={5}
          value={rating}
          onStarClick={onStarClick}
        />
    </div>
  )
}
export default Search