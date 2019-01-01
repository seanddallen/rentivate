import {createStore, applyMiddleware, compose, combineReducers} from 'redux'
import thunk from 'redux-thunk';
// import usersReducer from './reducers/usersReducer'
// import { listingsReducer } from './reducers/listingsReducer'
// import { selectedListingReducer } from './reducers/listingsReducer'
// import bookingsReducer from './reducers/bookingsReducer'
// // import messagesReducer from './reducers/messagesReducer'

import { rentalReducer, selectedRentalReducer } from './rental-reducer';
import { authReducer } from './auth-reducer';
import { rentalMapReducer } from './map-reducer';
import { userBookingsReducer } from './booking-reducer';
import { reducer as formReducer } from 'redux-form';

const rootReducer = combineReducers({
  users: usersReducer,
  // listings: listingsReducer,
  // listing: selectedListingReducer,
  bookings: bookingsReducer,
  rentals: rentalReducer,
  rental: selectedRentalReducer,
  form: formReducer,
  auth: authReducer,
  userBookings: userBookingsReducer,
  map: rentalMapReducer
  // messages: postsReducer
})

export default rootReducer
