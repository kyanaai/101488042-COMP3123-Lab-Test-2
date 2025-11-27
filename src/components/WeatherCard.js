import React from 'react';

const WeatherCard = ({ data, isLoading, error }) => {
  if (isLoading) {
    return <div className="card info">Loading...</div>;
  }

  if (error) {
    return <div className="card error">{error}</div>;
  }

  if (!data) {
    return (
      <div className="card info">
        Search for a city to see the weather.
      </div>
    );
  }

  return (
    <div className="card">
      <div className="card-header">
        <h2>
          {data.city}, {data.country}
        </h2>
      </div>

      <div className="card-main">
        <div className="temp-section">
          <span className="temp">{Math.round(data.temp)}°C</span>
          <span className="feels-like">
            Feels like {Math.round(data.feelsLike)}°C
          </span>
          <span className="description">
            {data.description.charAt(0).toUpperCase() + data.description.slice(1)}
          </span>
        </div>

        <div className="icon-section">
          <img src={data.iconUrl} alt={data.description} />
        </div>
      </div>

      <div className="card-footer">
        <div className="detail">
          <span className="label">Humidity</span>
          <span className="value">{data.humidity}%</span>
        </div>
        <div className="detail">
          <span className="label">Wind</span>
          <span className="value">{data.windSpeed} m/s</span>
        </div>
      </div>
    </div>
  );
};

export default WeatherCard;