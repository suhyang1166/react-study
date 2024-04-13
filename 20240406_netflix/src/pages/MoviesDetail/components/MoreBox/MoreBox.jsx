import React, { useState } from "react";
import Reviews from "../Reviews/Reviews";
import RecommendMovie from "../RecommendMovie/RecommendMovie";

const MoreBox = () => {
  // 현재 보여줄 컴포넌트를 관리하는 상태 변수 (초기 값은 'reviews')
  const [currentView, setCurrentView] = useState("reviews");

  // 버튼 클릭 시 상태 변수를 업데이트하는 핸들러 함수
  const handleButtonClick = (view) => {
    setCurrentView(view);
  };

  return (
    <div>
      <div>
        {/* 리뷰 버튼: 클릭 시 'reviews'로 설정 */}
        <button onClick={() => handleButtonClick("reviews")}>리뷰</button>
        {/* 추천 버튼: 클릭 시 'recommendMovie'로 설정 */}
        <button onClick={() => handleButtonClick("recommendMovie")}>
          추천 영화
        </button>
      </div>

      {/* currentView에 따라 컴포넌트를 조건부 렌더링 */}
      {currentView === "reviews" && <Reviews />}
      {currentView === "recommendMovie" && <RecommendMovie />}
    </div>
  );
};

export default MoreBox;
