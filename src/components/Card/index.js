import React from 'react';

import './Card.css';

const Card = (props) => {
  const { property } = props;
  const { photos, photoAvailable } = property;
  let imageUrl = 'https://images.nobroker.in/images/';
  if (photoAvailable && photos.length > 0) {
    imageUrl +=  `${property.id}/${photos[0].imagesMap.medium}`;
  } else {
    imageUrl = 'https://images.nobroker.in/static/img/resale/1bhk.jpg';
  }

  const getFurnishingType = (type) => {
    switch (type) {
      case 'FULLY_FURNISHED':
        return 'Fully Furnished';
        break;
      case 'SEMI_FURNISHED':
        return 'Semi Furnished';
        break;
      case 'NOT_FURNISHED':
        return 'Not Furnished';
        break;
      default:
        return '';
    }
  }

  return (
    <div className="card">
      <figure>
        <img src={imageUrl} alt={property.description} />
      </figure>
      <div className="details">
        <div>{property.title}</div>
        <div className="rent-size">
        { property.rent !== null ? <span>&#x20b9; {property.rent}</span> : <span>Price Not Available</span> } <span>{property.propertySize} sqft</span>
        </div>        
        <div className="rent-size"><span>Deposit &#x20b9;{property.deposit}</span><span>{getFurnishingType(property.furnishing)}</span></div>
      </div>
    </div>
  );
};

export default Card;