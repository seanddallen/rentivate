import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { BookingCard, PaymentCard } from './BookingCard';

import * as actions from '../../actions/bookingsActions';
import * as action from '../../actions/authActions';
import * as act from '../../actions/paymentActions';

class BookingManage extends React.Component {

  state = {
    pendingPayments: []
  }

  componentDidMount() {
    this.props.dispatch(actions.fetchUserBookings());
    this.getPendingPayments();
  }

  getPendingPayments(){
    act.getPendingPayments()
      .then(pendingPayments => this.setState({pendingPayments}))
      .catch(err => console.error(err))
  }

  acceptPayment(payment){
    act.acceptPayment(payment)
      .then(status => {this.getPendingPayments()})
      .catch(err => console.error(err))
  }

  declinePayment(payment){
    act.declinePayment(payment)
      .then(status => {this.getPendingPayments()})
      .catch(err => console.error(err))
  }

  renderBookings(bookings) {
    return bookings.map((booking, index) => <BookingCard booking={booking} key={index} />);
  }

  renderPayments(payments){
    return payments.map((payment, index) => <PaymentCard booking={payment.booking} payment={payment} paymentBtns={this.renderPaymentButtons} key={index} />);
  }

  renderPaymentButtons = (payment) => {
    return(
      <div>
        <button onClick={() => this.declinePayment(payment)} className="btn btn-danger" style={{marginRight: '10px'}}>Decline</button>
        <button onClick={() => this.acceptPayment(payment)} className="btn btn-success">Accept</button>
      </div>
    )
  }


  render() {
    const { data: bookings, isFetching } = this.props.userBookings;
    const { pendingPayments } = this.state;

    return (
      <React.Fragment>
        <section id="userBookings">
          <h1 className="page-title">My Bookings</h1>
          <div className="row">
          { this.renderBookings(bookings) }
          </div>
          { !isFetching && bookings.length === 0 &&
            <div className="alert alert-warning">
              You have no bookings created.
              <Link style={{'marginLeft': '10px'}} className="btn btn-bwm" to="/rentals">Available Rental</Link>
            </div>
          }
        </section>
        <section id="pendingBookings">
          <h1 className="page-title">Pending Bookings</h1>
          <div className="row">
          { this.renderPayments(pendingPayments) }
          </div>
          { !isFetching && bookings.length === 0 &&
            <div className="alert alert-warning">
              You have no pending bookings.
            </div>
          }
        </section>
      </React.Fragment>
    )
  }
}

function mapStateToProps(state) {
  return {
    userBookings: state.bookings
  }
}

export default connect(mapStateToProps)(BookingManage)
