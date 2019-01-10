import React from 'react';
import { RentalList } from './RentalList';
import { connect } from 'react-redux';
import RentalSearchInput from '../RentalSearchInput';

import * as actions from '../../../actions/listingsActions';


class RentalListing extends React.Component {

  componentDidMount() {
    this.props.dispatch(actions.fetchRentals());
    this.category = this.props.match.params.id;
  }

  render() {

    // const rentals = this.props.rentals.filter(rental => rental.category == this.props.match.params.id)
    //
    // return (
    //   <section id="rentalListing" style={{marginBottom: '540px'}}>
    //     <RentalSearchInput />
    //     <RentalList rentals={rentals} />
    //   </section>
    const rentals = this.props.rentals.filter(rental => rental.category == this.props.match.params.id)
    const query = `category=${this.category}`;

    return (
      <section id="rentalListing" style={{marginBottom: '600px'}}>
        <RentalSearchInput query={query}/>
        <RentalList rentals={rentals} />
      </section>
    )
  }
}

function mapStateToProps(state) {
  return {
    rentals: state.rentals.data
  }
}

export default connect(mapStateToProps)(RentalListing)
