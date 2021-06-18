import React from "react";

export default function WeatherDetails() {
  return (
    <div className="weatherDetails">
      <div className="row">
        <div className="col-8">
          <h1 id="cityName">San Diego</h1>
          <div className="daysoftheweek">
            <span className="day-time" id="day-time">
              Wednesday 15:00
            </span>
            ,
            <span className="weather-description" id="weather-description">
              Sunny
            </span>
          </div>
          <div className="temperature-container">
            <img
              src="https://ssl.gstatic.com/onebox/weather/64/sunny.png"
              alt="clear"
              id="weather-icon"
            />
            <span className="current-temp" id="current-temp">
              67
            </span>
            <span className="temp-conversion">
              <a href="#" id="fahrenheitLink" className="active">
                °F
              </a>{" "}
              |
              <a href="#" id="celsiusLink">
                °C
              </a>
            </span>
          </div>
        </div>
        <div className="col-4">
          <div className="current-details" id="current-details">
            <ul>
              <li>
                Feels-like:
                <span className="feels-like" id="feels-like">
                  17
                </span>
                °F
              </li>
              <li>
                Humidity:
                <span className="humidity" id="humidity">
                  64
                </span>
                %
              </li>
              <li>
                Wind:
                <span className="windspeed" id="windspeed">
                  8
                </span>
                mph
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
