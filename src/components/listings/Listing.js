import React, {Component} from 'react';
import {connect} from 'react-redux';
import { ListingList } from './ListingList';


export class Listing extends Component {

  render(){

    console.log(this.props)
    let listing = this.props.listings.filter(listing => listing.id === this.props.match.params.id)

    return(
      <div>{listing.title}</div>
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
