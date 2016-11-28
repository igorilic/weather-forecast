import React, {Component} from 'react';
import { connect } from 'react-redux';
// actions
import * as actions from '../actions/index';
import {bindActionCreators} from 'redux';

class SearchBar extends Component {
  constructor(props) {
    super(props);
    this.state = { term: ''};
    this.onInputChange = this.onInputChange.bind(this);
    this.onFormSubmit  = this.onFormSubmit.bind(this);
  }

  onInputChange(event) {
    this.setState({term: event.target.value});
  }

  onFormSubmit(event) {
    event.preventDefault();
    this.props.fetchWeather(this.state.term);
    this.setState({term: ''});
    
  }

  render() {
    return (
      <form onSubmit={this.onFormSubmit} className="input-group search">
        <input
          placeholder="Get a five day forecast..."
          className="form-control"
          value={this.state.term}
          onChange={this.onInputChange}
        />
        <span className="input-group-btn">
          <button type="submit" className="btn btn-secondary">Submit</button>
        </span>
      </form>
    )
  }
}

// function mapStateToProps(state) {
//   return {
//     books: state.books
//   };
// }

function mapDispatchToProps(dispatch) {
  return bindActionCreators({fetchWeather: actions.fetchWeather}, dispatch);
}

export default connect(null, mapDispatchToProps)(SearchBar);

