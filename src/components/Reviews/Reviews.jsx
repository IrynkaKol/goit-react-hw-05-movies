import { useState, useEffect } from 'react';
import { useParams } from 'react-router';
import { fetchReviewsInfo } from '../../services/apiService';

export const Reviews = () => {
  const { id } = useParams();
  const [reviews, setReviews] = useState([]);
  useEffect(() => {
    fetchReviewsInfo(id)
    .then(setReviews);
  }, [id]);

  return (
    <div>
        {reviews?.length === 0 && (
            <p>We don't have any reviews for this movie</p>
        )}
      <h1>Reviws</h1>
      {reviews.map(review => (
        <li key={review.id}>
            Author: {review.author}
            <p>{review.content}</p>
        </li>
      ))}
    </div>
  );
};