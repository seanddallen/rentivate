import { FETCH_LISTINGS, FETCH_LISTING_BY_ID_SUCCESS, FETCH_LISTING_BY_ID, FETCH_LISTINGS_SUCCESS, FETCH_LISTINGS, FETCH_LISTINGS_FAIL } from '../actions/listingsActions'
// import { FETCH_LISTING } from '../actions/listingsActions'

const initialState = {
  listings: {
    data: [],
    errors: []
  },
  listing: {
    data: {},
    errors: []
  }
}

export const listingsReducer = (state = initialState.listings, action) => {
  switch(action.type) {
    case FETCH_LISTINGS:
      return {...state, data: [], errors: []};
    case FETCH_LISTINGS_SUCCESS:
      return {...state, data: action.listings};
    case FETCH_LISTINGS_FAIL:
      return Object.assign({}, state, {errors: action.errors, data: []});
    default:
      return state;
  }
}

export const selectedListingReducer = (state = initialState.listing, action) => {
  switch(action.type) {
    case FETCH_LISTING_BY_ID:
      return {...state, data: {}};
    case FETCH_LISTING_BY_ID_SUCCESS:
      return Object.assign({}, state, { data: action.listing});
    default:
      return state;
  }
}




// let listings = [{
//   id: '1',
//   title: "BoomBox",
//   state: "AZ",
//   street: "Haupt strasse",
//   category: "electronics",
//   condition: "good",
//   image: "http://via.placeholder.com/350x250",
//   description: "Very nice item",
//   dailyRate: 33,
//   createdAt: "24/12/2017"
//   },
//   {
//   id: '2',
//   title: "BoomBox",
//   state: "AZ",
//   street: "Haupt strasse",
//   category: "electronics",
//   condition: "good",
//   image: "http://via.placeholder.com/350x250",
//   description: "Very nice item",
//   dailyRate: 33,
//   createdAt: "24/12/2017"
//   },
//   {
//   id: '3',
//   title: "BoomBox",
//   state: "AZ",
//   street: "Haupt strasse",
//   category: "electronics",
//   condition: "good",
//   image: "http://via.placeholder.com/350x250",
//   description: "Very nice item",
//   dailyRate: 33,
//   createdAt: "24/12/2017"
//   },
//   {
//   id: '4',
//   title: "BoomBox",
//   state: "AZ",
//   street: "Haupt strasse",
//   category: "electronics",
//   condition: "good",
//   image: "http://via.placeholder.com/350x250",
//   description: "Very nice item",
//   dailyRate: 33,
//   createdAt: "24/12/2017"
//   }]
