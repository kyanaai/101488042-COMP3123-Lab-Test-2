import React, { useState, useEffect } from 'react';
import './App.css';
import SearchBar from './components/SearchBar';
import WeatherCard from './components/WeatherCard';

const API_KEY = '72e69b9bf84cc1261ae5a26d4d513d27';

function App() {
  const [city, setCity] = useState('');
  const [weatherData, setWeatherData] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');

  const fetchWeather = async (cityName) => {
    if (!cityName.trim()) {
      setError('Please enter a city name.');
      setWeatherData(null);
      return;
    }

    setIsLoading(true);
    setError('');

    try {
      const response = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${encodeURIComponent(
          cityName.trim()
        )}&appid=${API_KEY}&units=metric`
      );

      if (!response.ok) {
        if (response.status === 404) {
          throw new Error('City not found. Try another one.');
        }
        throw new Error('Something went wrong. Please try again.');
      }

      const json = await response.json();

      const mapped = {
        city: json.name,
        country: json.sys.country,
        temp: json.main.temp,
        feelsLike: json.main.feels_like,
        description: json.weather[0].description,
        iconUrl: `https://openweathermap.org/img/wn/${json.weather[0].icon}@2x.png`,
        humidity: json.main.humidity,
        windSpeed: json.wind.speed,
      };

      setWeatherData(mapped);
    } catch (err) {
      setError(err.message);
      setWeatherData(null);
    } finally {
      setIsLoading(false);
    }
  };

  const handleSearch = () => {
    fetchWeather(city);
  };


  useEffect(() => {
    const defaultCity = "Toronto";
    setCity(defaultCity);
    fetchWeather(defaultCity); 
  }, []);

  return (
    <div className="app">
      <h1 className="title">Weather Dashboard</h1>

      <SearchBar
        city={city}
        onCityChange={setCity}
        onSearch={handleSearch}
      />

      <WeatherCard
        data={weatherData}
        isLoading={isLoading}
        error={error}
      />
    </div>
  );
}

export default App;