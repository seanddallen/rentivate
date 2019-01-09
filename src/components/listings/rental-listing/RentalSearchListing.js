import React from 'react';
import { RentalList } from './RentalList';
import { connect } from 'react-redux';

import { toUpperCase } from '../../../services/helpers';
import * as actions from '../../../actions/listingsActions';


class RentalSearchListing extends React.Component {

  constructor() {
    super();

    this.state = {
      searchedCity: ''
    }
  }

  componentWillMount() {
    this.searchRentalsByCity();
  }

  componentDidUpdate(prevProps) {
    const currentUrlParam = this.props.match.params.city;
    const prevUrlParam = prevProps.match.params.city;

    if (currentUrlParam !== prevUrlParam) {
      this.searchRentalsByCity();
    }
  }

  searchRentalsByCity() {
    const searchedCity = this.props.match.params.city;
    this.setState({searchedCity});

    this.props.dispatch(actions.fetchRentals(searchedCity));
  }

  renderTitle() {
    const { errors, data } = this.props.rentals;
    const { searchedCity } = this.state;
    let title = '';

    if (errors.length > 0) {
      title = errors[0].detail;
    }

    if(data.length > 0) {
      title = `${toUpperCase(searchedCity)} Rentals`;
    }

    return <h1 className="page-title">{title}</h1>
  }

  render() {
    return (
      <section id="rentalListing" style={{marginBottom: '540px'}}>
        {this.renderTitle()}
        <RentalList rentals={this.props.rentals.data} />
      </section>
    )
  }
}

function mapStateToProps(state) {
  return {
    rentals: state.rentals
  }
}

export default connect(mapStateToProps)(RentalSearchListing)
