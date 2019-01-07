import React from 'react'
import { injectStripe, CardElement } from 'react-stripe-elements'

const createOptions = () => {
  return {
    style: {
      base: {
        fontSize: '15px',
        color: '#424770',
        letterSpacing: '0.025em',
        fontFamily: 'Source Code Pro, monospace',
        '::placeholder': {
          color: '#aab7c4',
        },
      },
      invalid: {
        color: '#9e2146',
      },
    },
  };
};

const formStyles = () => {
  return {
    style: {
      height: '100px',
      backgroundColor: '#fbfbfb',
      padding: '5px',
      marginTop: '15px'
    }
  }
}



class CheckoutForm extends React.Component {

  handleSubmit = (e) => {
    e.preventDefault()
    const { stripe } = this.props
  }

  render(){
    return(
      <form {...formStyles()} onSubmit={() => this.handleSubmit}>
        <CardElement {...createOptions()} />
        <p>You will not be charged until approved by owner</p>
        <button className='btn btn-success'>Confirm Payment</button>
      </form>
    )
  }
}

export default injectStripe(CheckoutForm)
