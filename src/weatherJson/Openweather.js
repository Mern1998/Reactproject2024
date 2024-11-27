import React, { useState } from "react";
import axios from "axios";
import  "./open.css";

function Openweather() {
  let [city, setCity] = useState("");
  let [weather,setWeather]=useState("");
  const handleClick = (e) => {
    setCity(e.target.value);
  };
  const fetchWeather = async () => {
    try {
      const resp = await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${'bcda10ba323e88e96cb486015a104d1d'}&units=metric}`);
           setWeather(resp);
    } catch {}
  };
  const handleCity = () => {
    fetchWeather();
  };
  return (
    <div className="ctn">
        <div className="Input">
          <input type="text" placeholder="Enter the city" value={city}  onChange={handleClick} className="ipt"/>
        </div>
        <button type="button" onClick={handleCity}>
          Get-Weather
        </button>
        {
            weather && (
                <>
                    <div className="weather-info">
                        <h3>
                            {weather.data.name}
                        </h3>
                        <p>
                            {weather.data.main.temp}
                        </p>
                        <p>
                            {weather.data.weather[0].main}
                        </p>
                    </div>
                </>
            )
        }
    </div>
  );
}

export default Openweather;
