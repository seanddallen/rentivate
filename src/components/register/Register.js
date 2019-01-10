import React from 'react';
import RegisterForm from './RegisterForm';
import { Redirect } from 'react-router-dom';

import * as actions from '../../actions/authActions';

export class Register extends React.Component {

  constructor() {
    super();

    this.state = {
      errors: [],
      redirect: false
    }
  }

  registerUser = (userData) => {
    actions.register(userData).then(
      registered => this.setState({redirect: true}),
      errors => this.setState({errors})
    );
  }

  render() {
    const { errors, redirect } = this.state;

    if (redirect) {
      return <Redirect to={{pathname: '/login', state: { successRegister: true }}} />
    }

    return (
      <section id='register' style={{marginBottom: '300px'}}>
        <div className='rtv-form'>
          <div className='row'>
            <div className='col-md-5 mt-5'>
              <h1>Register</h1>
              <RegisterForm submitCb={this.registerUser} errors={errors} />
            </div>
            <div className='col-md-6 ml-auto'>
              <div className="catchphrase" style={{width: '100%', borderRadius: '10px', backgroundColor: '#a9a9a9'}}>
                <h2 className="text-center mb-4" style={{color: '#00778F', fontSize: '40px'}}><b>For Renters</b></h2>
                <hr style={{borderColor: '#FC473F', width: '30%'}}></hr>
                <h3 className="text-center mt-4"><b>Buy Nothing, Own Everything.</b></h3>
                <h5 className="text-center mt-3" style={{fontSize: '16px'}}>Rent anything with just a few clicks away.</h5>
              </div>
            </div>
          </div>
        </div>
      </section>
    )
  }
}
