import React, { useMemo, useRef, useState } from "react";
import "./Reviews.style.css";
import { useMovieReviewsQuery } from "../../../../hooks/useMovieReviews";
import { useParams } from "react-router-dom";
import Alert from "react-bootstrap/Alert";

const Reviews = () => {
  const { id } = useParams();
  const { data: reviews, isLoading, isError, error } = useMovieReviewsQuery(id);
  const textLimit = useRef(350);

  // 각 리뷰에 대한 isShowMore 상태를 배열로 관리
  const [isShowMoreArray, setIsShowMoreArray] = useState([]);

  // 초기 상태 설정 (모든 리뷰의 `isShowMore`를 false로 설정)
  React.useEffect(() => {
    if (reviews) {
      setIsShowMoreArray(reviews.map(() => false));
    }
  }, [reviews]);

  // 각 리뷰의 `isShowMore` 상태를 변경하는 함수
  const handleShowMoreToggle = (index) => {
    setIsShowMoreArray((prev) => {
      const newArray = [...prev];
      newArray[index] = !newArray[index];
      return newArray;
    });
  };

  const commenter = useMemo(() => {
    if (!reviews || !Array.isArray(reviews)) {
      return [];
    } else {
      return reviews.map((review, index) => {
        const isShowMore = isShowMoreArray[index];
        if (isShowMore) {
          return review.content;
        } else {
          return review.content.slice(0, textLimit.current);
        }
      });
    }
  }, [reviews, isShowMoreArray]);

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
              onClick={() => handleShowMoreToggle(index)}
            >
              {isShowMoreArray[index] ? "닫기" : "더보기"}
            </button>
          )}
        </div>
      ))}
    </div>
  );
};

export default Reviews;
