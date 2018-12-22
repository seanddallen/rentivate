import React from 'react';
import {Link} from 'react-router-dom';


export function ListingCard(props){

  const listing = props.listing;

  return (
    <div className='col-md-3 col-xs-6'>
      <Link to={`/listings/${listing.id}`}>
        <div className='card bwm-card'>
          <img className='card-img-top' src='http://via.placeholder.com/350x250' alt=''></img>
          <div className='card-block'>
            <h6 className='card-subtitle'>{listing.title} &#183; {listing.state}</h6>
            <h4 className='card-title'>{listing.description}</h4>
            <p className='card-text'>${listing.dailyRate} per Day &#183; Free Cancelation</p>
          </div>
        </div>
      </Link>
    </div>
  )
}
