import React, { Component } from 'react';

class WeatherDisplay extends Component {
	constructor() {
		super();
		this.state = {
			weatherData: null
		}
	}

	componentDidMount() {
		const zipCode = this.props.zipCode;
		const URL = "http://api.openweathermap.org/data/2.5/weather?q=" +
      zipCode +
      "&appid=b1b35bba8b434a28a0be2a3e1071ae5b&units=imperial";
     fetch(URL).then(res => res.json()).then(json => {
     	this.setState({
     		weatherData: json
     	});
     });
	}

	render() {
		const weatherData = this.state.weatherData;
		if (!weatherData) return <div>Loading</div>;
		const weather = weatherData.weather[0];
		const icon = "http://openweathermap.org/img/w/" + weather.icon + ".png";

		return (
			<div>
				<h1>
					{weather.main} in {weatherData.name}
					<img src={icon} alt={weatherData.description} />
				</h1>
				<p>Current: {weatherData.main.temp}°</p>
		    <p>High: {weatherData.main.temp_max}°</p>
		    <p>Low: {weatherData.main.temp_min}°</p>
		    <p>Wind Speed: {weatherData.wind.speed} mi/hr</p>
			</div>
		);
	}
}

export default WeatherDisplay; 