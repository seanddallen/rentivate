
import React from 'react';
import { Link } from 'react-router-dom';
import { toUpperCase } from '../../../services/helpers';

export function RentalDetailInfo(props) {
  const rental = props.rental;

  return (
      <div className='rental'>
        <h1 className='text-center rental-title'>{rental.title}</h1>
        <hr></hr>
        <h2 className={`text-center rental-type ${rental.category}`}>{rental.category} &#183; {rental.city}</h2>
        <hr></hr>
        <p className='text-center rental-description'>
          {rental.description}
        </p>
        <hr></hr>
        <Link className='rental-detail-link' style={{textDecoration: 'none'}} to={'/user/profile'}>
          <div style={{display: 'flex', justifyContent: 'center'}}>
            <button className='btn btn-lg btn-outline-danger' style={{outline: 'solid 1px $secondary-color !important', display: 'flex', justifyContent: 'center', textDecoration: 'none'}}>View Owner Profile</button>
          </div>
        </Link>
      </div>
    )
}
