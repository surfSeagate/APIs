import React, { Component } from "react";

const WeatherDisplay = props => {
  return (
    <div className="container">
      {props.city && (
        <div className="row">
          <div className="col-md-6 mx-auto text-center bg-primary mt-5 p-5 rounded">
            {props.city && <h1 className="text-light">{props.city} </h1>}

            {props.description && (
              <h3 className="text-dark"> {props.description}</h3>
            )}

            {props.temp && <h3 className="text-light"> {props.temp} </h3>}

            {props.icon && (
              <img src={`https://openweathermap.org/img/w/${props.icon}.png`} />
            )}

            <ul className="list-group mt-3" id="w-details">
              {props.humidity && (
                <li className="list-group-item">
                  Relative Humidity: {props.humidity}
                </li>
              )}
              {props.pressure && (
                <li className="list-group-item">Pressure: {props.pressure}</li>
              )}
              {props.wind && (
                <li className="list-group-item">Wind: {props.wind}</li>
              )}
            </ul>
          </div>
        </div>
      )}
    </div>
  );
};

export default WeatherDisplay;

// <button
//             type="button"
//             className="btn btn-primary"
//             data-toggle="modal"
//             data-target="#locModal"
//           >
//             Change Location
//           </button>

// <div>
//     {props.city && <p> Location: {props.city}</p>}
//     {props.temp && <p> Temprature: {props.temp} </p>}
//     {props.humidity && <p> Humidity: {props.humidity} </p>}
//     {props.description && <p> Conditions: {props.description} </p>}
//     {props.error && <p>{props.error}</p>}
//   </div>
