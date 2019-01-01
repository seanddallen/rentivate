import axios from 'axios';
import authService from 'services/auth-service';
import axiosService from 'services/axios-service';

export const FETCH_RENTALS = 'FETCH_RENTALS';
export const FETCH_RENTAL_BY_ID_SUCCESS = 'FETCH_RENTAL_BY_ID_SUCCESS';
export const FETCH_RENTAL_BY_ID_INIT = 'FETCH_RENTAL_BY_ID_INIT';
export const FETCH_RENTALS_SUCCESS = 'FETCH_RENTALS_SUCCESS';

export const FETCH_USER_BOOKINGS_SUCCESS = 'FETCH_USER_BOOKINGS_SUCCESS';
export const FETCH_USER_BOOKINGS_FAIL = 'FETCH_USER_BOOKINGS_FAIL';
export const FETCH_USER_BOOKINGS_INIT = 'FETCH_USER_BOOKINGS_INIT';


export const FETCH_RENTALS_INIT = 'FETCH_RENTALS_INIT';
export const FETCH_RENTALS_FAIL = 'FETCH_RENTALS_FAIL';

export const UPDATE_RENTAL_SUCCESS = 'UPDATE_RENTAL_SUCCESS';
export const UPDATE_RENTAL_FAIL = 'UPDATE_RENTAL_FAIL';
export const RESET_RENTAL_ERRORS = 'RESET_RENTAL_ERRORS';


export const LOGIN_SUCCESS = 'LOGIN_SUCCESS';
export const LOGIN_FAILURE = 'LOGIN_FAILURE';
export const LOGOUT = 'LOGOUT';

export const RELOAD_MAP = 'RELOAD_MAP';
export const RELOAD_MAP_FINISH = 'RELOAD_MAP_FINISH';


const loginSuccess = () => {
  const username = authService.getUsername();

  return {
    type: LOGIN_SUCCESS,
    username
  }
}

const loginFailure = (errors) => {
  return {
    type: LOGIN_FAILURE,
    errors
  }
}

export const register = (userData) => {
  return axios.post('/api/v1/users/register', userData).then(
    res => res.data,
    err => Promise.reject(err.response.data.errors)
  )
}

export const checkAuthState = () => {
  return dispatch => {
    if (authService.isAuthenticated()) {
      dispatch(loginSuccess());
    }
  }
}

export const login = (userData) => {
  return dispatch => {
    return axios.post('/api/v1/users/auth', userData)
      .then(res => res.data)
      .then(token => {
        authService.saveToken(token);
        dispatch(loginSuccess());
      })
      .catch(({response}) => {
        dispatch(loginFailure(response.data.errors));
      })
  }
}

export const logout = () => {
  authService.invalidateUser();

  return {
    type: LOGOUT
  }
}

export const createBooking = (booking) => {
  return axiosInstance.post('/bookings', booking)
      .then(res => res.data)
      .catch(({response}) => Promise.reject(response.data.errors))
}



export const uploadImage = image => {
  const formData = new FormData();
  formData.append('image', image);

  return axiosInstance.post('/image-upload', formData)
    .then(json => {
      return json.data.imageUrl;
    })
    .catch(({response}) => Promise.reject(response.data.errors[0]))
}
