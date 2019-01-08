import axios from 'axios';
import authService from 'services/authService';
import axiosService from 'services/axiosService';

export const UPLOAD_IMAGE = 'UPLOAD_IMAGE'

const axiosInstance = axiosService.getInstance();

export const getPendingPayments = () => {
  return axiosInstance.get('/payments')
    .then(res => res.data)
    .catch(({response}) => Promise.reject(response.data.errors))
}

export const acceptPayment = (payment) => {
  return axiosInstance.post('/payments/accept', payment)
  .then(res => res.data)
  .catch(({response}) => Promise.reject(response.data.errors))
}


export const declinePayment = (payment) => {
  return axiosInstance.post('/payments/decline', payment)
    .then(res => res.data)
    .catch(({response}) => Promise.reject(response.data.errors))
}
