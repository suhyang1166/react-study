import React, { useState } from "react";
import "./MoreBox.style.css";
import Reviews from "../Reviews/Reviews";
import RecommendMovie from "../RecommendMovie/RecommendMovie";

const MoreBox = () => {
  // 현재 보여줄 컴포넌트를 관리하는 상태 변수 (초기 값은 'reviews')
  const [currentView, setCurrentView] = useState("reviews");

  // 버튼 클릭 시 상태 변수를 업데이트하는 핸들러 함수
  const handleButtonClick = (view) => {
    setCurrentView(view);
  };

  // 각 버튼의 스타일을 조건부로 설정
  const getButtonClass = (view) => {
    // 현재 뷰와 비교하여 일치하면 'active' 클래스를 추가
    return currentView === view ? "more_btn active" : "more_btn";
  };

  return (
    <div className="MoreBox-wrap">
      <div className="MoreBox">
        {/* 리뷰 버튼: 클릭 시 'reviews'로 설정 */}
        <button
          className={getButtonClass("reviews")}
          onClick={() => handleButtonClick("reviews")}
        >
          리뷰
        </button>
        {/* 추천 영화 버튼: 클릭 시 'recommendMovie'로 설정 */}
        <button
          className={getButtonClass("recommendMovie")}
          onClick={() => handleButtonClick("recommendMovie")}
        >
          추천 영화
        </button>
      </div>
      <div className="MoreBox-content">
        {currentView === "reviews" && <Reviews />}
        {currentView === "recommendMovie" && <RecommendMovie />}
      </div>
    </div>
  );
};

export default MoreBox;
