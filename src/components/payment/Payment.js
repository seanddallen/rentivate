import React from 'react'
import CheckoutForm from './CheckoutForm'
import {Elements} from 'react-stripe-elements';

class Payment extends React.Component {

  render (){
    return(
      <Elements>
        <CheckoutForm />
      </Elements>
    )
  }
}

export default Payment
