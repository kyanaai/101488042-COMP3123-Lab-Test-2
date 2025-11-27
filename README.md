# 101488042 – COMP3123 – Lab Test 2 – Weather Dashboard
Kiana Nezafat Yazdi
Student ID:101488042

This project is a simple weather dashboard built with React that consumes the OpenWeatherMap Current Weather API.  
Users can search for a city and see real-time weather information such as temperature, feels-like temperature, description, humidity, wind speed, and an icon representing the conditions.

---

## Features

- Search weather data by city name
- Fetches live data from **OpenWeatherMap** using `fetch`
- Displays:
  - City and country
  - Temperature (°C)
  - Feels like temperature
  - Weather description
  - Weather icon from OpenWeatherMap
  - Humidity
  - Wind speed
- Clean, responsive UI
- React best practices:
  - Functional components
  - `useState` for managing city, loading, error, and data
  - `useEffect` for fetching default city on initial load
  - Props for passing data between components

---

## Tech Stack

- **React** (Create React App)
- **JavaScript (ES6+)**
- **CSS** for styling
- **OpenWeatherMap Current Weather Data API**
- HTTP calls with **`fetch`**

Default Page:
![alt text](<Screenshot 2025-11-27 at 9.10.25 AM.png>)

Search London:
![alt text](<Screenshot 2025-11-27 at 9.10.42 AM.png>)