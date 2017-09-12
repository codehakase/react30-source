import React, { Component } from 'react';
import './App.css';
import WeatherDisplay from './WeatherDisplay';

class App extends Component {
  constructor() {
    super();
    this.state = {
      activePlace: 0
    };
  }
  render() {
    const places = [
      {name: "Asokoro", zipCode: "900231"},
      {name: "Maitama", zipCode: "900271"},
      { name: "Santa Cruz", zipCode: "95062" },
      { name: "Honolulu", zipCode: "96803" }
    ];

    const activePlace = this.state.activePlace;
    return (
      <div className="App">
        {
          places.map((place, index) => (
            <button
              key={index}
              onClick={() => {this.setState({
                activePlace: index
              });
             }}
             >
             {place.name}
            </button>
          ))
        }
        <WeatherDisplay 
          key={activePlace}
          zipCode={places[activePlace].zipCode}
          />
      </div>
    );
  }
}

export default App;