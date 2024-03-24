import React from "react";
import { Button } from "react-bootstrap";

const WeatherButton = ({ cities, selectedCity, currentCity }) => {
  console.log(cities);
  return (
    <div className="buttonWrap">
      <Button
        variant={`${selectedCity == null ? "outline-light" : "light"}`}
        onClick={() => currentCity("current")}
      >
        Current Location
      </Button>
      {cities.map((city) => (
        <Button
          variant={`${selectedCity == city ? "outline-light" : "light"}`}
          onClick={() => {
            return currentCity(city);
          }}
        >
          {city}
        </Button>
      ))}
    </div>
  );
};

export default WeatherButton;
