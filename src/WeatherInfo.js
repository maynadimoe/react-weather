import React from "react";
import FormattedDate from "./FormattedDate";
import WeatherIcon from "./WeatherIcon";
import WeatherTemperature from "./WeatherTemperature";

export default function WeatherInfo(props) {
  return (
    <div className="WeatherInfo">
      <h1>{props.data.city}</h1>

      <div className="row mt-3">
        <div className="col-6">
          <span>
            <FormattedDate date={props.data.date} />
          </span>
          <span className="text-capitalize">{props.data.description}</span>
          <span>
            <br />
            Humidity: {props.data.humidity}%
          </span>
          <span>
            {" "}
            <br /> Wind: {props.data.wind} km/h
          </span>
        </div>
        <div className="col-lg-6 col-md-6 col-sm-8">
          <div className="d-flex justify-content-end">
            <div>
              <WeatherIcon code={props.data.icon} size={52} />
            </div>

            <div>
              <WeatherTemperature celsius={props.data.temperature} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
