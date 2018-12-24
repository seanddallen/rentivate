import axios from 'axios'
export const FETCH_LISTINGS = 'FETCH_LISTINGS'
export const FETCH_LISTINGS_SUCCESS = 'FETCH_LISTINGS_SUCCESS'
export const FETCH_LISTINGS_FAIL = 'FETCH_LISTINGS_FAIL'
export const FETCH_LISTING_BY_ID = 'FETCH_LISTING_BY_ID'
export const FETCH_LISTING_BY_ID_SUCCESS = 'FETCH_LISTING_BY_ID_SUCCESS'

export const ADD_LISTING = 'ADD_LISTING'
export const UPDATE_LISTING = 'UPDATE_LISTING'
export const REMOVE_LISTING = 'REMOVE_LISTING'



//ACTION TYPES

const fetchListingByIdInit = () => {
  return {
    type: FETCH_LISTING_BY_ID
  }
}

const fetchListingByIdSuccess = (rental) => {
  return {
    type: FETCH_LISTING_BY_ID_SUCCESS,
    rental
  }
}

const fetchListingsInit = () => {
  return {
    type: FETCH_LISTINGS
  }
}

const fetchListingsSuccess = (rentals) => {
  return {
    type: FETCH_LISTINGS_SUCCESS,
    rentals
  }
}

const fetchListingsFail = (errors) => {
  return {
    type: FETCH_LISTINGS_FAIL,
    errors
  }
}

//AXIOS CALLS

export const fetchListingById = (listingId) => {
  return function(dispatch) {
    dispatch(fetchListingByIdInit());

    axios.get(`/api/v1/listings/${listingId}`)
      .then(res => res.data )
      .then(rental => dispatch(fetchListingByIdSuccess(listing))
    );
  }
}


// export const fetchListings = () => {
//   return dispatch =>  {
//     fetch('http://localhost:8000/listings')
//       .then(res => res.json())
//       .then(listings => {
//         dispatch({
//         type: FETCH_LISTINGS,
//         payload: listings
//       })
//     })
//   }
// }
//
// export const addListing = (newListing) => {
//   console.log(newListing)
//   return async (dispatch) => {
//     let listing = await axios.post(`http://localhost:8000/addbucket/${newListing.id}`, newListing)
//     console.log(listing);
//     dispatch({
//       type: ADD_LISTING,
//       payload: listing.data[0]
//     })
//   }
// }
//
// export const removeListing = (listing) => {
//   console.log('reducer listing', listing)
//   return async (dispatch) => {
//     let thelisting = await axios.delete(`http://localhost:8000/removebucket/${listing.id}`, listing)
//     dispatch({
//       type: REMOVE_LISTING,
//       payload: listing
//     })
//   }
// }
//
// export const updateListing = (listing) => {
//   return async (dispatch) => {
//     let theListing = await axios.put(`http://localhost:8000/updateListing/${listing.id}`, listing)
//     dispatch({
//       type: UPDATE_LISTING,
//       payload: theListing.data
//     })
//   }
// }
