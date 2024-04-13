import React from "react";
import "./Homepage.style.css";
import Banner from "./components/Banner/Banner";
import PopularMovieSlide from "./components/PopularMovieSlide/PopularMovieSlide";
import TopRatedMovie from "./components/TopRatedMovie/TopRatedMovie";
import UpcommingMovie from "./components/UpcommingMovie/UpcommingMovie";

// 1. 배너 => popular 영화를 들고와서 첫번째 아이템을 보여주자
// 2. popular movie
// 3. top rated movie
// 4. upcoming movie

const Homepage = () => {
  return (
    <div className="Homepage">
      <h4>
        이런저런 오류가 나서 해결하고 css를 건드리다보니 반응형에 문제가 생겨서
        부트스트랩으로 가져온 메뉴에서부터 문제가 생겼더라구요ㅠㅠ <br /> 조금
        많은 수정이 필요할거같아서 현재 반응형이 거의 안되는 부분 양해
        부탁드립니다ㅠㅠ😭😭😭
      </h4>
      <Banner />
      <PopularMovieSlide />
      <TopRatedMovie />
      <UpcommingMovie />
    </div>
  );
};

export default Homepage;
