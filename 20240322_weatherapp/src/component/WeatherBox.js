import React from "react";

const WeatherBox = ({ weather }) => {
  console.log(weather);

  return (
    <div className="boxWrap">
      <section>
        <h1 className="site">{weather?.name}</h1>
        <div className="text">
          <h3>
            {`${(weather?.main.temp).toFixed(1)}℃`} /
            {`${(weather?.main.temp * 1.8 + 32).toFixed(1)}℃`}
          </h3>
          <h4>{weather?.weather[0]?.description}</h4>
        </div>
      </section>
    </div>
  );
};

export default WeatherBox;
