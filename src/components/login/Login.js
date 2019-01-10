import React from 'react';
import LoginForm from './LoginForm';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import * as actions from '../../actions/authActions';

class Login extends React.Component {

  constructor() {
    super();
  }

  loginUser = (userData) => {
    this.props.dispatch(actions.login(userData));
  }

  render() {
    const { isAuth, errors } = this.props.auth;
    const { successRegister } = this.props.location.state || false;

    if (isAuth) {
      return <Redirect to={{pathname: '/categories'}} />
    }

    return (
      <section id="login" style={{marginBottom: '300px'}}>
        <div className="rtv-form">
          <div className="row">
            <div className="col-md-5 mt-5">
              <h1>Login</h1>
              {
                successRegister &&
                  <div className='alert alert-success'>
                    <p> Registration successful. You may login now. </p>
                  </div>
              }
              <LoginForm submitCb={this.loginUser} errors={errors}/>
            </div>
            <div className="col-md-6 ml-auto">
              <div className="image-container">
                <div className='image-container'>
                  <div className="catchphrase" style={{width: '106%', borderRadius: '10px', backgroundColor: '#a9a9a9'}}>
                    <h2 className="text-center mb-4" style={{color: '#00778F', fontSize: '40px'}}><b>For Owners</b></h2>
                    <hr style={{borderColor: '#FC473F', width: '30%'}}></hr>
                    <h3 className="text-center mt-4"><b>Collect Cash, Not Dust.</b></h3>
                    <h5 className="text-center mt-3" style={{fontSize: '16px'}}>Start making money on your unused items.</h5>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    )
  }
}

function mapStateToProps(state) {
  return {
    auth: state.auth
  }
}

export default connect(mapStateToProps)(Login)
