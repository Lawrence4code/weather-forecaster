import React, { Component } from 'react';

class SearchBar extends Component {
  constructor(props) {
    super();
    this.state = { term: '' };
  }

  onInputChange = event => {
    console.log(event.target.value);
    this.setState({ term: event.target.value });
  };

  onFormSubmit(event) {
    event.preventDefault();
    console.log('onFormSubmit triggered.');
  }

  render() {
    return (
      <form className="input-group" onSubmit={this.onFormSubmit}>
        <input
          type="text"
          placeholder="Get a five day forecast in your favourite cities"
          className="form-control"
          value={this.state.term}
          onChange={this.onInputChange}
        />
        <span className="input-group-btn">
          <button type="submit" className="btn btn-primary">
            Submit
          </button>
        </span>
      </form>
    );
  }
}

export default SearchBar;

// 78bdc9f19e18c127562834bc845f3605
