import axios from 'axios'
export const FETCH_LISTINGS = 'FETCH_LISTINGS'
export const ADD_LISTING = 'ADD_LISTING'
export const UPDATE_LISTING = 'UPDATE_LISTING'
export const REMOVE_LISTING = 'REMOVE_LISTING'

export const fetchListings = () => {
  return dispatch =>  {
    fetch('http://localhost:8000/listings')
      .then(res => res.json())
      .then(listings => {
        dispatch({
        type: FETCH_LISTINGS,
        payload: listings
      })
    })
  }
}

export const addListing = (newListing) => {
  console.log(newListing)
  return async (dispatch) => {
    let listing = await axios.post(`http://localhost:8000/addbucket/${newListing.id}`, newListing)
    console.log(listing);
    dispatch({
      type: ADD_LISTING,
      payload: listing.data[0]
    })
  }
}

export const removeListing = (listing) => {
  console.log('reducer listing', listing)
  return async (dispatch) => {
    let thelisting = await axios.delete(`http://localhost:8000/removebucket/${listing.id}`, listing)
    dispatch({
      type: REMOVE_LISTING,
      payload: listing
    })
  }
}

export const updateListing = (listing) => {
  return async (dispatch) => {
    let theListing = await axios.put(`http://localhost:8000/updateListing/${listing.id}`, listing)
    dispatch({
      type: UPDATE_LISTING,
      payload: theListing.data
    })
  }
}
