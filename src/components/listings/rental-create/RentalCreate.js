import React from 'react';
import RentalCreateForm from './RentalCreateForm';
import { Redirect } from 'react-router-dom';

import * as actions from '../../../actions/listingsActions';

export class RentalCreate extends React.Component {

  constructor() {
    super();

    this.state = {
      errors: [],
      redirect: false
    }

    this.rentalCategories = ['appliances', 'camping', 'clothing', 'electronics', 'equipment', 'furniture', 'games', 'general', 'household', 'instruments', 'media', 'recreational', 'sporting', 'tools',  'vehicles'];
  }

  createRental = (rentalData) => {
    actions.createRental(rentalData).then(
      (rental) => this.setState({redirect: true}),
      (errors) => this.setState({errors}))
  }

  render() {
    if (this.state.redirect) {
      return <Redirect to={{pathname:'/categories'}}/>
    }

    return (
      <section id='newRental' style={{marginBottom: '40px'}}>
        <div className='rtv-form'>
          <div className='row'>
            <div className='col-md-3'></div>
            <div className='col-md-6'>
              <h1 className='page-title'>Create Rental</h1>
              <RentalCreateForm submitCb={this.createRental}
                                options={this.rentalCategories}
                                errors={this.state.errors}
                              />
            </div>
            <div className='col-md-3'></div>
          </div>
        </div>
      </section>
    )
  }
}
