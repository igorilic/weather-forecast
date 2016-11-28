import React, {Component} from 'react';
import { connect } from 'react-redux';
import WeatherChart from '../components/weather-chart';
import WeatherMap from '../components/weather-map';

// actions
import * as actions from '../actions/index';
import {bindActionCreators} from 'redux';

class WeatherList extends Component {

  renderWeather(cityData) {
    const name = cityData.city.name;
    const {lon, lat} = cityData.city.coord;
    const temp = cityData.list.map(day => {
      return day.main.temp - 273;
    });
    const pressure = cityData.list.map(day => {
      return day.main.pressure;
    });
    const humidity = cityData.list.map(day => {
      return day.main.humidity;
    });
    return (
      <tr key={cityData.city.id}>
        <td><WeatherMap lon={lon} lat={lat}/>{name}</td>
        <td>
          <WeatherChart data={temp} color="green" unit="&deg; C"/>
        </td>
        <td>
          <WeatherChart data={pressure} color="red" unit=" hPa"/>
        </td>
        <td>
          <WeatherChart data={humidity}  color="purple" unit="%"/>
        </td>
      </tr>
    );
  }


  render() {
    return(
      <table className="table table-hover table-fixed">
        <thead>
          <tr>
            <th>City</th>
            <th>Temperat</th>
            <th>Pressure</th>
            <th>Humidity</th>
          </tr>
        </thead>
        <tbody>
         {this.props.weather.map(this.renderWeather)}
        </tbody>
      </table>
    )
  }
}

function mapStateToProps({weather}) {
  return {
    weather
  };
}

// function mapDispatchToProps(dispatch) {
//   return bindActionCreators({fetchWeather: actions.fetchWeather}, dispatch);
// }

export default connect(mapStateToProps)(WeatherList);

