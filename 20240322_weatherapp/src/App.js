import { useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import WeatherBox from "./component/WeatherBox";
import WeatherButton from "./component/WeatherButton";
import ClipLoader from "react-spinners/ClipLoader";

// 1. 앱이 실행되자마자 현재위치기반의 날씨가 보인다
// 2. 날씨정보에는 도시, 섭씨 화씨 날씨상태정보
// 3. 5개의 버튼이 있다(1개는 현재위치, 4개는 다른 도시)
// 4. 도시버튼을 클릭할때마다 도시별 날씨가 나온다
// 5. 현재위치 버튼을 누르면 다시 현재위치 기반의 날씨가 나온다
// 6. 데이터를 들고오는 동안 로딩스피너가 돈다

const cities = ["NEW YORK", "TOKYO", "PARIS", "SEOUL"];
const API_KEY = process.env.REACT_APP_WEATHER_API_KEY;

function App() {
  const [weather, setWeather] = useState(null);
  const [city, setCity] = useState(null);
  const [loading, setLoading] = useState(false);
  const [apiError, setAPIError] = useState("");
  const [cityImg, setCityImg] = useState(null);

  const getCurrentLocation = () => {
    navigator.geolocation.getCurrentPosition((position) => {
      let lat = position.coords.latitude;
      let lon = position.coords.longitude;
      getWeatherByCurrentLocation(lat, lon);
    });
  };

  const getWeatherByCurrentLocation = async (lat, lon) => {
    try {
      let URL = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=df4650871358241dcd5c63e54e443ab8&units=metric`;
      setLoading(true);

      let response = await fetch(URL);
      let data = await response.json();
      setWeather(data);
      // let response = await fetch(URL)
      //   .then((response) => response.json())
      //   .then((data) => setWeather(data));
      setLoading(false);
    } catch (err) {
      setAPIError(err.message);
      setLoading(false);
    }
  };

  const getWeatherByCity = async () => {
    try {
      let URL = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=df4650871358241dcd5c63e54e443ab8&units=metric`;
      setLoading(true);

      let response = await fetch(URL);
      let data = await response.json();
      setWeather(data);
      // let response = await fetch(URL)
      //   .then((response) => response.json())
      //   .then((data) => setWeather(data));
      setLoading(false);
    } catch (err) {
      setAPIError(err.message);
      setLoading(false);
    }
  };

  useEffect(() => {
    if (city === null) {
      setLoading(true);
      getCurrentLocation();
    } else {
      setLoading(true);
      getWeatherByCity();
    }
  }, [city]);

  const currentCity = (city) => {
    if (city === "current") {
      setCity(null);
    } else {
      setCity(city);
    }
  };

  const fetchCityImg = (city) => {
    let imgURL;
    switch (city) {
      case "NEW YORK":
        imgURL = "new_york.jpg";
        break;
      case "TOKYO":
        imgURL = "tokyo.jpg";
        break;
      case "PARIS":
        imgURL = "paris.jpg";
        break;
      case "SEOUL":
        imgURL = "seoul.jpg";
        break;
      case "current":
        imgURL = "seoul.jpg";
    }
    setCityImg(imgURL);
  };

  useEffect(() => {
    if (city !== null) {
      fetchCityImg(city);
    }
  }, [city]);

  return (
    <div>
      {loading ? (
        <ClipLoader color="pink" loading={loading} size={150} />
      ) : !apiError ? (
        <article className="wrap">
          <ClipLoader color="pink" loading={loading} size={150} />
          <WeatherBox weather={weather} cityImg={cityImg}></WeatherBox>
          <WeatherButton
            cities={cities}
            currentCity={currentCity}
            selectedCity={city}
          ></WeatherButton>
        </article>
      ) : (
        apiError
      )}
    </div>
  );
}

export default App;
