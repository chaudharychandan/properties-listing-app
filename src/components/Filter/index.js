import React, { Component } from 'react';
import { connect } from 'react-redux';
import InputRange from 'react-input-range';
import * as actions from 'actions';

import 'react-input-range/lib/css/index.css';

import './Filter.css';

const defaultFilter = {
  sizeValue: { min: 0, max: 2000 },
  rentValue: { min: 0, max: 40000 },
  photosAvailable: false,
  sortOnPrice: ''
};

class Filter extends Component {
  state = {
    filters: defaultFilter
  };

  onSizeChange = (value) => {
    this.setState({ sizeValue: value });
    this.props.applyFilters({ sizeValue: value });
  }

  onRentChange = (value) => {
    this.setState({ rentValue: value });
    this.props.applyFilters({ rentValue: value });
  }

  onChangePhotosAvailable = (event) => {
    this.setState({ photosAvailable: event.target.checked });
    this.props.applyFilters({ photosAvailable: event.target.checked });
  }

  onReset = () => {
    this.setState({ filters: defaultFilter });
    this.props.applyFilters({ ...defaultFilter });
  }

  onSort = (event) => {
    this.setState({ sortOnPrice: event.target.value });
    this.props.applyFilters({ sortOnPrice: event.target.value });
  }

  componentWillReceiveProps(nextProps) {
    this.setState({ filters: nextProps.filters });
  }

  render() {
    return (
      <div className="filter">
        <fieldset>
          <legend>Filter Properties</legend>
          <div>
            <label htmlFor="size">Size</label>
            <InputRange
              type="range"
              name="size"
              step={10}
              minValue={0}
              maxValue={2000}
              value={this.state.filters.sizeValue}
              onChange={value => this.onSizeChange(value)}
            />
          </div>
          <div>
            <label htmlFor="rent">Rent</label>
            <InputRange
              type="range"
              name="rent"
              step={10}
              minValue={0}
              maxValue={40000}
              value={this.state.filters.rentValue}
              onChange={value => this.onRentChange(value)}
            />
          </div>
          <div>
            <label>Photos Available</label>
            <input type="checkbox" value={this.state.filters.photosAvailable} onChange={this.onChangePhotosAvailable} />
          </div>
          <div>
            <div>Sort By Price</div>
            <select onChange={(event) => this.onSort(event)} value={this.state.filters.sortOnPrice}>
              <option value={''}>None</option>
              <option value={'asc'}>Ascending</option>
              <option value={'desc'}>Decending</option>
            </select>
          </div>
          <div>
            <button onClick={this.onReset}>Reset</button>
          </div>
        </fieldset>
      </div>
    );
  }
}

const mapStateToProps = ({ filters }) => ({
  filters
});

export default connect(mapStateToProps, actions)(Filter);
