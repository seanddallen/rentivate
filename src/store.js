import {createStore, combineReducers} from 'redux'
import usersReducer from './reducers/usersReducer'
import { listingsReducer } from './reducers/listingsReducer'
import { selectedListingReducer } from './reducers/listingsReducer'
import bookingsReducer from './reducers/bookingsReducer'
// import messagesReducer from './reducers/messagesReducer'


const rootReducer = combineReducers({
  users: usersReducer,
  listings: listingsReducer,
  listing: selectedListingReducer,
  bookings: bookingsReducer,
  // messages: postsReducer
})

export default rootReducer
