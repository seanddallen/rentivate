import React, {Component} from 'react';
import { connect } from 'react-redux';
import { ListingCard } from './ListingCard';
import { fetchListings } from '../../actions/listingsActions'

export class ListingList extends Component {

  render(){
    console.log(this.props)
    let ListOfListings = this.props.listings.map(listing => <ListingCard key={listing.id} listing={listing}/>)

    return(
      <section id='rentalListing'>
        <h1 className='page-title'>Product Listings</h1>
        <div className='row'>
          {ListOfListings}
        </div>
      </section>
    )
  }
}

function mapStateToProps(state){
  return{
    listings: state.listings
  }
}

export default connect(mapStateToProps, {})(ListingList)
