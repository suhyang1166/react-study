import React, { useMemo, useRef, useState } from "react";
import "./Reviews.style.css";
import { useMovieReviewsQuery } from "../../../../hooks/useMovieReviews";
import { useParams } from "react-router-dom";
import Alert from "react-bootstrap/Alert";

const Reviews = () => {
  const { id } = useParams();
  const { data: reviews, isLoading, isError, error } = useMovieReviewsQuery(id);
  const [isShowMore, setIsShowMore] = useState(false);
  const textLimit = useRef(350);

  const commenter = useMemo(() => {
    // `reviews`가 존재하고 배열일 때만 map()을 호출
    if (!reviews || !Array.isArray(reviews)) {
      return [];
    } else {
      return reviews.map((review) => {
        // `isShowMore` 상태에 따라 전체 리뷰 내용 또는 단축된 리뷰 내용을 반환
        if (isShowMore) {
          return review.content;
        } else {
          // `textLimit` 길이까지 잘라서 단축된 리뷰 내용을 반환
          return review.content.slice(0, textLimit.current);
        }
      });
    }
  }, [reviews, isShowMore]);

  if (isLoading) {
    return <h1>Loading...</h1>;
  }
  if (isError) {
    return <Alert variant="danger">{error.message}</Alert>;
  }

  return (
    <div className="Reviews">
      {commenter.map((content, index) => (
        <div className="review_wrap" key={index}>
          <h3>{reviews[index].author}</h3>
          <p>{content}</p>
          {reviews[index].content.length > textLimit.current && (
            <button
              className="review-btn"
              onClick={() => setIsShowMore((prev) => !prev)}
            >
              {isShowMore ? "닫기" : "더보기"}
            </button>
          )}
        </div>
      ))}
    </div>
  );
};

export default Reviews;
