import React from "react";

const WeatherBox = ({ weather, cityImg }) => {
  const temperatureC =
    weather && weather.main ? weather.main.temp.toFixed(1) : "";
  const temperatureF =
    weather && weather.main
      ? ((weather.main.temp * 9) / 5 + 32).toFixed(1)
      : "";

  return (
    <div
      className="boxWrap"
      style={{ backgroundImage: `url(/img/${cityImg})` }}
    >
      <section>
        <h1 className="site">
          {weather?.name || "날씨를 가져오는데 실패했습니다."}
        </h1>
        <div className="text">
          <h3>{`${temperatureC} °C / ${temperatureF} °F`}</h3>
          <div className="weather-icon">
            {weather && (
              <img
                src={`http://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png`}
                alt="weather-icon"
              ></img>
            )}
          </div>
          <h4>{weather?.weather[0]?.description}</h4>
        </div>
      </section>
    </div>
  );
};

export default WeatherBox;
