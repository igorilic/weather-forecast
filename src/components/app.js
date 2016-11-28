/**
 * Main app layout file
 */

import React, {Component} from 'react';
// Containers
import SearchBar from '../containers/search-bar';
import WeatherList from '../containers/weather-list';
// CSS
import './app.scss';

/* eslint-disable no-console */

export default class App extends Component {
  render() {
    return(
      <div>
        <SearchBar/>
        <WeatherList/>
      </div>
    );
  }
}
