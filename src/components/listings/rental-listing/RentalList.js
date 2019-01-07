import React from 'react';
// import RentalCard from '../rental-card/RentalCard';
import RentalCard from './RentalCard';

export class RentalList extends React.Component {

  renderRentals() {
    return this.props.rentals
    .map((rental, index) => {
      return (
          <RentalCard key={index}
                      colNum='col-md-3 col-xs-6'
                      rental={rental}/>
        )
    });
  }
  render() {

    console.log('rental props', this.props)

    return (
      <div className="row" style={{display: 'flex', justifyContent: 'center'}}>
        {this.renderRentals()}
      </div>
    )
  }
}

// let rentalList = this.props.rentals.filter(rental => rental.category == this.props.match.params.category)
//    .map((rental, index) => <RentalCard key={index} colNum='col-md-3 col-xs-6' rental={rental}/>)
