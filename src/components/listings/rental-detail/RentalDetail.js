import React from 'react';
import { connect } from 'react-redux';
import { RentalDetailInfo } from './RentalDetailInfo';
import RentalMap from './RentalMap';
import Booking from 'components/bookings/Booking';

import * as actions from '../../../actions/listingsActions';

class RentalDetail extends React.Component {

  componentDidMount() {
    // Dispatch action
    const rentalId = this.props.match.params.id;

    this.props.dispatch(actions.fetchRentalById(rentalId));
  }
  render() {
    const { rental } = this.props;

    if (rental._id) {
      return (
        <section id='rentalDetails'>
          <div className='upper-section'>
            <div className='row'>
              <div className='col-md-6'>
                <img src={rental.image} alt='' style={{height: '360px'}}></img>
              </div>
              <div className='col-md-6'>
                <RentalMap location={`${rental.city}, ${rental.street}`} />
              </div>
            </div>
          </div>

          <div className='details-section'>
            <div className='row'>
              <div className='col-md-3'>
              </div>
              <div className='col-md-6'>
                <RentalDetailInfo rental={rental} />
              </div>
              <div className='col-md-3'>
              </div>
            </div>
          </div>

          <div className='details-section mt-5'>
            <div className='row'>
              <div className='col-md-3'>
              </div>
              <div className='col-md-6'>
               <Booking rental={rental} />
              </div>
              <div className='col-md-3'>
              </div>
            </div>
          </div>
        </section>
      )
    } else {
      return (
        <h1> Loading... </h1>
        )
    }
  }
}

function mapStateToProps(state) {
  return {
    rental: state.rental.data,
    errors: state.rental.errors
  }
}

export default connect(mapStateToProps)(RentalDetail)
