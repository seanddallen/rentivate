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
      height: '100%',
      backgroundColor: '#fbfbfb',
      padding: '5px',
      marginTop: '15px'
    }
  }
}

const buttonStyles = () => {
  return {
    style: {}
  }
}

const paragraphStyles = () => {
  return {
    style: {
      marginTop: '5px',
      fontSize: '11px',
      color: '#aab7c4'
    }
  }
}

class CheckoutForm extends React.Component {

  state = {
    error: undefined
  }

  handleSubmit = (e) => {
    e.preventDefault()
    const { stripe, setPaymentToken } = this.props

    if(stripe){
      stripe.createToken()
        .then((payload) => {
          if(payload.error){
            setPaymentToken(undefined)
            return this.setState({error: payload.error.message})
          }
          setPaymentToken(payload.token.id)
        })
    } else {
      console.error('Stripe has not loaded yet.')
    }

  }

  render(){
    const { error } = this.state;

    return(
      <form {...formStyles()} onSubmit={() => this.handleSubmit}>
        <CardElement {...createOptions()} />
        <p {...paragraphStyles()}>*You will not be charged until approved by owner</p>

        {error && <div className='alert alert-danger alert-payment'> {error} </div>}

        <button {...buttonStyles()} className='btn btn-success'>Confirm Payment</button>
      </form>
    )
  }
}

export default injectStripe(CheckoutForm)
