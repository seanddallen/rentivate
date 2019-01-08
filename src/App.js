import React, { Component } from 'react';
import { BrowserRouter, Route, Redirect, Switch } from 'react-router-dom';

import { Provider } from 'react-redux';
import { connect } from 'react-redux';

import { ToastContainer } from 'react-toastify';
import Header from 'components/shared/Header';
import Foot from 'components/shared/Footer';
import CategoriesList from 'components/categories/CategoriesList';
import RentalListing from 'components/listings/rental-listing/RentalListing';
import RentalSearchListing from 'components/listings/rental-listing/RentalSearchListing';
import RentalDetail from 'components/listings/rental-detail/RentalDetail';
import RentalUpdate from 'components/listings/rental-detail/RentalUpdate';
import Profile from 'components/profile/Profile';
import { RentalCreate } from 'components/listings/rental-create/RentalCreate';
import Login from 'components/login/Login';
import { Register } from 'components/register/Register';

import { RentalManage } from 'components/listings/rental-manage/RentalManage';
import BookingManage from 'components/bookings/BookingManage';

import { ProtectedRoute } from 'components/shared/auth/ProtectedRoute';
import { LoggedInRoute } from 'components/shared/auth/LoggedInRoute';

import * as actions from './actions/authActions';

import 'App.css';

class App extends Component {

  componentWillMount() {
    this.checkAuthState();
  }

  checkAuthState = () => {
    this.props.dispatch(actions.checkAuthState());
  }

  logout = () => {
    this.props.dispatch(actions.logout());
  }

  render() {
    return (
      <BrowserRouter>
        <div className='App'>
          <ToastContainer />
          <Header logout={this.logout}/>
          <div className='container'>
            <Switch>
              <Route exact path='/' render={() =>  <Redirect to='/categories' /> }/>
              <Route exact path='/rentals' render={() =>  <Redirect to='/categories' /> }/>
              <Route exact path='/categories' component={CategoriesList} />
              <Route exact path='/categories/:id' component={RentalListing} />
              <Route exact path='/rentals/:city/items' component={RentalSearchListing} />
              <ProtectedRoute exact path='/rentals/manage' component={RentalManage} />
              <ProtectedRoute exact path='/bookings/manage' component={BookingManage} />
              <ProtectedRoute exact path='/rentals/new' component={RentalCreate} />
              <Route exact path='/rentals/:id' component={RentalDetail} />
              <Route exact path='/rentals/:id/edit' component={RentalUpdate} />
              <Route exact path='/user/profile' component={Profile} />
              <Route exact path='/login' component={Login} />
              <LoggedInRoute exact path='/register' component={Register} />
            </Switch>
          </div>
          <Foot />
        </div>
      </BrowserRouter>
    );
  }
}

export default connect()(App);
