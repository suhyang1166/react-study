# 영화사이트 (Movie Site)

[**Website**](https://suu-movie.netlify.app/)

## 🙌 프로젝트 소개

TMDB API를 활용하여 제작된 영화 정보 사이트입니다. 이 사이트를 통해 최신 영화 정보를 확인할 수 있으며, 사용자는 특정 영화를 선택하면 해당 영화에 대한 상세 정보를 볼 수 있습니다. 상태 관리는 `axios`와 `react-query`를 사용하여 처리하였으며, RESTful API 시스템에 맞춰 프로젝트를 진행하였습니다.

## 🖥️ 기술 스택

### Frontend

- React
- react-query
- react-router

### 서비스 배포 환경

- Netlify

## 🗂️ 페이지 구성

- **Homepage**: 영화 배너, 인기 영화 슬라이더, 상위 평가 영화, 예정 영화 등의 정보 제공
- **Movies**: 영화 목록 및 필터링 기능
- **MoviesDetail**: 영화 상세 페이지, 리뷰, 추천 영화 및 미리보기 기능
- **NotFoundPage**: 페이지를 찾을 수 없음 오류 페이지

## ✅ 주요 기능

### 메인 페이지

- **Banner**: 상단에 큰 배너를 통해 최신 영화 정보를 제공하며, 사용자가 클릭하면 해당 영화의 상세 페이지로 이동합니다.
- **Popular Movie Slide**: 인기 영화 목록을 슬라이더로 제공하여 사용자에게 다양한 영화 정보를 시각적으로 제공합니다.
- **Top Rated Movie**: 사용자들에게 상위 평가 영화 정보를 제공합니다.
- **Upcoming Movie**: 다가오는 영화 목록을 표시하여 사용자에게 예고편 및 개봉 예정 정보를 제공합니다.

### 상세 페이지

- 상세 페이지는 선택한 영화의 세부 정보를 보여주며, YouTube 트레일러를 모달 창으로 재생할 수 있도록 구현되었습니다. 또한, 영화 리뷰와 추천 영화를 함께 제공하여 사용자의 선택 폭을 넓혔습니다.

### 무비 페이지

- 무비 페이지에서는 영화 목록을 인기순, 최신순으로 정렬할 수 있으며, 다양한 카테고리로 필터링하여 영화를 탐색할 수 있습니다. 부트스트랩을 활용한 페이지네이션 기능으로 많은 영화 목록을 쉽게 탐색할 수 있도록 하였습니다.

### 오류 페이지

- **NotFoundPage**: 사용자가 접근할 수 없는 페이지에 대한 오류 메시지를 표시합니다.

## 📁 프로젝트 구성
```
public
src
├─ common
│ ├─ MovieCard
│ │ ├─ MovieCard.jsx
│ │ └─ MovieCard.style.css
│ └─ MovieSlider
│ ├─ MovieSlider.jsx
│ └─ MovieSlider.style.css
├─ constants
│ └─ responsive.js
├─ hooks
│ ├─ useMovieDetail.js
│ ├─ useMovieGenre.js
│ ├─ useMoviePreview.js
│ ├─ useMovieRecommendation.js
│ ├─ useMovieReviews.js
│ ├─ useMovies.js
│ ├─ usePopularMovies.js
│ ├─ useSearchMovie.js
│ ├─ useTopRatedMovies.js
│ └─ useUpcomingMovies.js
├─ layout
│ ├─ AppLayout.js
│ └─ AppLayout.style.css
├─ pages
│ ├─ Homepage
│ │ ├─ components
│ │ │ ├─ Banner
│ │ │ │ ├─ Banner.js
│ │ │ │ └─ Banner.style.css
│ │ │ ├─ PopularMovieSlide
│ │ │ │ └─ PopularMovieSlide.jsx
│ │ │ ├─ TopRatedMovie
│ │ │ │ └─ TopRatedMovie.jsx
│ │ │ └─ UpcomingMovie
│ │ │ └─ UpcomingMovie.jsx
│ │ ├─ Homepage.jsx
│ │ └─ Homepage.style.css
│ ├─ Movies
│ │ ├─ component
│ │ │ ├─ Filter
│ │ │ │ ├─ GenresFilter.jsx
│ │ │ │ └─ PopularFilter.jsx
│ │ ├─ MoviePage.jsx
│ │ └─ MoviePage.style.css
│ ├─ MoviesDetail
│ │ ├─ components
│ │ │ ├─ MoreBox
│ │ │ │ ├─ MoreBox.jsx
│ │ │ │ └─ MoreBox.style.css
│ │ │ ├─ Preview
│ │ │ │ ├─ component
│ │ │ │ │ ├─ ModalShow.jsx
│ │ │ │ │ └─ ModalShow.style.css
│ │ │ │ ├─ Preview.jsx
│ │ │ │ └─ Preview.style.css
│ │ │ ├─ RecommendMovie
│ │ │ │ ├─ RecommendMovie.jsx
│ │ │ │ └─ RecommendMovie.style.css
│ │ │ ├─ RecommendMovieCard
│ │ │ │ ├─ RecommendMovieCard.jsx
│ │ │ │ └─ RecommendMovieCard.style.css
│ │ │ └─ Reviews
│ │ │ ├─ Reviews.jsx
│ │ │ └─ Reviews.style.css
│ │ ├─ MovieDetailPage.jsx
│ │ └─ MovieDetailPage.style.css
│ └─ NotFoundPage
│ ├─ NotFoundPage.jsx
│ └─ NotFoundPage.style.css
├─ utils
│ └─ api.js
├─ App.css
├─ App.js
├─ index.css
└─ index.js
```
