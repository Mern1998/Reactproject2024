import React, { useState } from "react";
import "./weather.css";
import { useEffect } from "react";

function Weatherapp() {
  const [city, setCity] = useState("Delhi");
  const [weatherData, setWeatherData] = useState(null);
  const [error, setError] = useState(null);

  const currentDate = new Date();

  const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  const month = months[currentDate.getMonth()];
  const day = currentDate.getDate();
  const year = currentDate.getFullYear();

  const formattedDate = `${month} ${day}, ${year}`;

  const API_KEY = "bcda10ba323e88e96cb486015a104d1d"; // Replace 'YOUR_API_KEY' with your actual API key from OpenWeatherMap

  const fetchWeatherData = async () => {
    try {
      const response = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`
      );
      const data = await response.json();
      console.log(data);
      // if (response.ok) {
      setWeatherData(data);
      // setError(null);
      // } else {
      //   setError(data.message);
      //   setWeatherData(null);
      // }
    } catch (error) {
      console.error("Error fetching weather data:", error);
      // setError("Error fetching weather data. Please try again later.");
      // setWeatherData(null);
    }
  };

  useEffect(() => {
    setError(null);
    fetchWeatherData();
  }, []);

  const handleInputChange = (event) => {
    setCity(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    fetchWeatherData();
  };

  const getWeatherIconUrl = (main) => {
    switch (main) {
      case "Clear":
        return "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEhVUNlnLPTPyeQBBTHTY7nBxlRgltMyfiBbgeZmVCCtmBzUg8rkHi_-chBFvvaGp7bALUWaI9dDLtkjBqtg-7bpUi3UMGcMpLhj47RuZCRzKn-yEoClV_4LyIEF2TT_jzvuEeHQ0ZQ9crYj3IN4w_tSc64g0nY8s3bUDN-hPAGQdPIimPeLS7FmMb77FeM/s160/rain_with_cloud.png"; // Path to your sunny weather icon
      case "Rain":
        return "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEgBt8IfXcCCEpLXS_c_nFbb4PjibvrOZwWOml7uLHZS7-xIvRhG0Wgn00OGYJwVk42bMlaTdZiBw6-CXgJwXzWw-2TJOLAMEb3bo36MGixXL3H4MN-6vQ59LDvR5DgIToVel9qRK5KNQpPFaTUnK2sqTWVyUbknuJ6eXxItDyE-p2kBf_-Ds1Feeylg8oU/s160/Tornado.png"; // Path to your rainy weather icon
      case "Snow":
        return "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEhVUNlnLPTPyeQBBTHTY7nBxlRgltMyfiBbgeZmVCCtmBzUg8rkHi_-chBFvvaGp7bALUWaI9dDLtkjBqtg-7bpUi3UMGcMpLhj47RuZCRzKn-yEoClV_4LyIEF2TT_jzvuEeHQ0ZQ9crYj3IN4w_tSc64g0nY8s3bUDN-hPAGQdPIimPeLS7FmMb77FeM/s160/rain_with_cloud.png"; // Path to your snowy weather icon
      case "Haze":
        return "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEgpu91mcuhE3BLOuUQh2JQ6s6rjkUbiU02nW8Xk9LyjtcGkaB2sqNPGPzRfS-ciPZkixdbvP2pOpt7G-Y4W9ApDSKYrpzdYRvqEtNJVrgVma-3VgXIKMG3BkvWC1Y_MwNBrgLuRXymP6uy48qNJIumRiXfYRFcFIMP4PypU5L9CtBI5gA4ZzvvJ9cpmFMo/s316/sun.png"; // Path to your haze weather icon
      // Add more cases for other weather conditions as needed
      default:
        return null;
    }
  };

  return (
    <div className="App">
      <div className="container">
        {weatherData && (
          <>
            <h1 className="container_date">{formattedDate}</h1>
            <div className="weather_data">
              <h2 className="container_city">{weatherData.name}</h2>
              {/* <img className="container_img" src="/thunder.png" width="180px" alt="sss"/> */}
              <img
                className="container_img"
                src={getWeatherIconUrl(weatherData.weather[0].main)}
                width="180px"
                alt="Weather Icon"
              />
              <h2 className="container_degree">{weatherData.main.temp}</h2>
              <h2 className="country_per">
                {weatherData.weather[0].main}
                <span className="degree_icon"></span>
              </h2>
              <form className="form" onSubmit={handleSubmit}>
                <input
                  type="text"
                  class="input"
                  placeholder="Enter city name"
                  value={city}
                  onChange={handleInputChange}
                  required
                />
                
                <button type="submit" className="btn btn-primary">Get</button>
              </form>
            </div>
          </>
        )}
      </div>
    </div>
  );
}

export default Weatherapp;
