import React, {Component} from 'react';
import {connect} from 'react-redux';
import { ListingList } from './ListingList';
import { MapWithAMarker } from '../map/googleMap.js'


export class Listing extends Component {

  render(){

    console.log(this.props)
    let listing = this.props.listings.filter(listing => listing.id === this.props.match.params.id)

    return(
      <div>{listing.title}</div>
      <section id='listingDetails'>
        <div className='upper-section'>
          <div className='row'>
            <div className='col-md-6'>
              <img src={listing.image} alt=''></img>
            </div>
            <div className='col-md-6'>
              <MapWithAMarker
                googleMapURL="https://maps.googleapis.com/maps/api/js?key=AIzaSyCzQYcT7ZyXcNN2a0mtm-shH68WR9bCk34&libraries=geometry,drawing,places"
                loadingElement={<div style={{ height: `100%` }} />}
                containerElement={<div style={{ height: `360px` }} />}
                mapElement={<div style={{ height: `100%` }} />}
              />
            </div>
          </div>
        </div>

        <div className='details-section'>
          <div className='row'>
            <div className='col-md-8'>
              <div className='listing'>
                <h2 className={`listing-type ${listing.category}`}>{listing.shared} {listing.category}</h2>
                <h1 className='listing-title'>{listing.title}</h1>
                <h2 className='listing-city'>{listing.city}</h2>
                <div className='listing-room-info'>
                  <span><i className='fa fa-building'></i>{listing.bedrooms} bedrooms</span>
                  <span><i className='fa fa-user'></i> {listing.bedrooms + 4} guests</span>
                  <span><i className='fa fa-bed'></i> {listing.bedrooms + 2} beds</span>
                </div>
                <p className='listing-description'>
                  {listing.description}
                </p>
                <hr></hr>
                <div className='listing-assets'>
                  <h3 className='title'>Assets</h3>
                  <div className='row'>
                    <div className='col-md-6'>
                      <span><i className='fa fa-asterisk'></i> Cooling</span>
                      <span><i className='fa fa-thermometer'></i> Heating</span>
                      <span><i className='fa fa-location-arrow'></i> Iron</span>
                    </div>
                    <div className='col-md-6'>
                      <span><i className='fa fa-desktop'></i> Working area</span>
                      <span><i className='fa fa-cube'></i> Washing machine</span>
                      <span><i className='fa fa-cube'></i> Dishwasher</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className='col-md-4'>BOOKING</div>
          </div>
        </div>
      </section>
    )
  }
}

const mapStateToProps = (state) => {
  console.log('listings', state.listings)
  return{
    listings: state.listings
  }
}

export default connect(mapStateToProps)(Listing)
