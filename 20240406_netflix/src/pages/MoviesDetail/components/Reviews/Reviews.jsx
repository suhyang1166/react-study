import React from "react";
import { useMovieReviewsQuery } from "../../../../hooks/useMovieReviews";
import { useParams } from "react-router-dom";
import Alert from "react-bootstrap/Alert";

const Reviews = () => {
  const { id } = useParams();
  const { data: reviews, isLoading, isError, error } = useMovieReviewsQuery(id);

  console.log("rrr", reviews);

  if (isLoading) {
    return <h1>Loading...</h1>;
  }
  if (isError) {
    return <Alert variant="danger">{error.message}</Alert>;
  }
  return (
    <div>
      {reviews.map((review) => (
        <div className="review_wrap">
          <h3>{`${review.author}`}</h3>
          <p>{`${review.content}`}</p>
        </div>
      ))}
    </div>
  );
};

export default Reviews;
