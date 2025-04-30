import React, { useState, useEffect } from "react";
import { fetchWeather } from "../services/service";

const Weather = () => {
  const [location, setLocation] = useState("");
  const [weather, setWeather] = useState(null);
  const [error, setError] = useState(null);

  const fetchWeatherData = async (location) => {
    try {
      const response = await fetchWeather(location);
      if (!response.isSuccess) {
        setError("Failed to fetch weather data");
        return;
      }
      setWeather(response.data);
      setError(null);
    } catch (err) {
      setError("Failed to fetch weather data");
    }
  };

  useEffect(() => {
    const fetchData = async () => {
      await fetchWeatherData(location);
    };

    fetchData();
  }, [location]);

  const handleLocationChange = (e) => {
    setLocation(e.target.value);
  };

  const handleSearch = () => {
    fetchWeatherData(location);
  };

  return (
    <div className="weather">
      <h2>Weather</h2>
      <div className="weather-controls">
        <input
          type="text"
          value={location}
          onChange={handleLocationChange}
          placeholder="Enter location"
        />
        <button onClick={handleSearch}>Search</button>
      </div>
      {error && !!location && <p className="error">{error}</p>}
      {weather && (
        <div className="weather-info">
          <h3>{weather.name}</h3>
          <p>Temperature: {weather.main.temp}°C</p>
          <p>Condition: {weather.weather[0].description}</p>
          <p>Humidity: {weather.main.humidity}%</p>
          <p>Wind Speed: {weather.wind.speed} m/s</p>
        </div>
      )}
    </div>
  );
};

export default Weather;
