import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from 'actions';

import './List.css';

import Card from 'components/Card';

class List extends Component {
  state = {
    isGrid: true
  };

  componentDidMount() {
    this.props.fetchProperties();
  }

  renderProperties = () => {
    const { rentValue, sizeValue, photosAvailable, sortOnPrice } = this.props.filters;
    let filteredProperties = this.props.properties
    .filter((property) => {
      return property.rent >= rentValue.min && property.rent <= rentValue.max;
    })
    .filter((property) => {
      return property.propertySize >= sizeValue.min && property.propertySize <= sizeValue.max;
    })
    .filter(property => {
      if(photosAvailable) {
        return property.photoAvailable;
      } else {
        return true;
      }
    });

    if(sortOnPrice === 'asc') {
      filteredProperties = filteredProperties.sort((p1, p2) => {
        return p1.rent - p2.rent;
      });
    } else if(sortOnPrice === 'desc') {
      filteredProperties = filteredProperties.sort((p1, p2) => {
        return p2.rent - p1.rent;
      });
    }

    return filteredProperties.map(property => {
      return <Card key={property.id} property={property} />
    });
  }

  onChangeLayout = (flag) => {
    this.setState({ isGrid: flag });
  }

  render() {
    return (
      <div className="list">
        <div className="layout">
          <button onClick={() => this.onChangeLayout(true)}>Grid</button>
          <button onClick={() => this.onChangeLayout(false)}>Slider</button>
        </div>
        <section className={this.state.isGrid ? 'grid' : 'slider'}>
          { this.renderProperties() }
        </section>
      </div>
    );
  }
}

const mapStateToProps = ({ properties, filters }) => ({
  properties,
  filters
});

export default connect(mapStateToProps, actions)(List);
