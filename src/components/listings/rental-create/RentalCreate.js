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

    this.createRental = this.createRental.bind(this);
  }

  createRental(rentalData) {
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
        <div className='bwm-form'>
          <div className='row'>
            <div className='col-md-5'>
              <h1 className='page-title'>Create Rental</h1>
              <RentalCreateForm submitCb={this.createRental}
                                options={this.rentalCategories}
                                errors={this.state.errors}
                              />
            </div>
            <div className='col-md-6 ml-auto'>
              <div className='image-container'>
                <h2 className='catchphrase'>Hundreds of rentals within just a few clicks.</h2>
                <img src={process.env.PUBLIC_URL + '/img/create-rental.jpg'} alt=''/>
              </div>
            </div>
          </div>
        </div>
      </section>
    )
  }
}
