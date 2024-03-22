import WeatherBox from "./component/WeatherBox";
import WeatherButton from "./component/WeatherButton";
import logo from "./logo.svg";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { useEffect, useState } from "react";

// 1. 앱이 실행되자마자 현재위치기반의 날씨가 보인다
// 2. 날씨정보에는 도시, 섭씨 화씨 날씨상태정보
// 3. 5개의 버튼이 있다(1개는 현재위치, 4개는 다른 도시)
// 4. 도시버튼을 클릭할때마다 도시별 날씨가 나온다
// 5. 현재위치 버튼을 누르면 다시 현재위치 기반의 날씨가 나온다
// 6. 데이터를 들고오는 동안 로딩스피너가 돈다

function App() {
  const [weather, setWeather] = useState(null);

  const getCurrentLocation = () => {
    console.log("getCurrentLocation");
    navigator.geolocation.getCurrentPosition((position) => {
      let lat = position.coords.latitude;
      let lon = position.coords.longitude;
      getWeatherByCurrentLocation(lat, lon);
    });
  };

  const getWeatherByCurrentLocation = async (lat, lon) => {
    const URL = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=df4650871358241dcd5c63e54e443ab8&units=metric`;

    let response = await fetch(URL)
      .then((response) => response.json())
      .then((data) => {
        setWeather(data);
      });
  };

  useEffect(() => {
    getCurrentLocation();
  }, []);

  return (
    <div>
      <article className="wrap">
        <WeatherBox weather={weather}></WeatherBox>
        <WeatherButton></WeatherButton>
      </article>
    </div>
  );
}

export default App;
