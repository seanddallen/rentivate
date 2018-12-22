import { FETCH_LISTINGS } from '../actions/listingsActions'
// import { FETCH_LISTING } from '../actions/listingsActions'

let listings = [{
  id: '1',
  title: "BoomBox",
  state: "AZ",
  street: "Haupt strasse",
  category: "electronics",
  condition: "good",
  image: "http://via.placeholder.com/350x250",
  description: "Very nice item",
  dailyRate: 33,
  createdAt: "24/12/2017"
  },
  {
  id: '2',
  title: "BoomBox",
  state: "AZ",
  street: "Haupt strasse",
  category: "electronics",
  condition: "good",
  image: "http://via.placeholder.com/350x250",
  description: "Very nice item",
  dailyRate: 33,
  createdAt: "24/12/2017"
  },
  {
  id: '3',
  title: "BoomBox",
  state: "AZ",
  street: "Haupt strasse",
  category: "electronics",
  condition: "good",
  image: "http://via.placeholder.com/350x250",
  description: "Very nice item",
  dailyRate: 33,
  createdAt: "24/12/2017"
  },
  {
  id: '4',
  title: "BoomBox",
  state: "AZ",
  street: "Haupt strasse",
  category: "electronics",
  condition: "good",
  image: "http://via.placeholder.com/350x250",
  description: "Very nice item",
  dailyRate: 33,
  createdAt: "24/12/2017"
  }]

export default (state = listings, action) => {
  switch (action.type) {

    case FETCH_LISTINGS:
      return action.payload

    default:
      return state
  }
}
