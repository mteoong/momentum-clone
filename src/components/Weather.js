import React, { Component } from "react";

import { getCurrLocation, callWeatherApi } from "../utils";

class Weather extends Component {
    constructor(props) {
        super(props);
        this.state = {
            icon: "",
            temperature: "",
            location: "",
        }
    }
    
    componentDidMount = () => {
        let getWeather = async() => {
            let location = await getCurrLocation();
            let weather = await callWeatherApi();
            this.setState({
                icon: weather.weather[0].icon || "03n",
                temperature: weather.main.temp || "57",
                location: weather.name,
            });
          }
          getWeather();
    }
    
    render() {
        return (
            <div className="weather-container">
                <div className="weather-info">
                    <div className="white temp"> 
                        <img
                        src={`http://openweathermap.org/img/wn/${this.state.icon}@2x.png`}
                        width="50"
                        alt="Weather Icon based on forecast"
                        className="weather-pic"
                        />
                        <div> {`${parseInt(this.state.temperature)}°`} </div>
                    </div>
                    <div className="white loc"> {this.state.location} </div>
                </div>
            </div>
        );
    }
}

export default Weather;