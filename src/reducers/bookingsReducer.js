import { FETCH_BOOKINGS } from '../actions/bookingsActions'

export default (state = [], action) => {
  switch (action.type) {

    case FETCH_BOOKINGS:
      return action.payload

    default:
      return state
  }
}
