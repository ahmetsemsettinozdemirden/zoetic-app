import * as types from './types'
import axios from 'axios'
import config from 'app/config'

// Get Measurement
export function getMeasurement() {
  return function(dispatch, getState) {
    const {measurementReducer} = getState()
    dispatch(getMeasurementRequest([]))
    return axios.get(`${config.apiGateway.URL}/storefront/restaurant?regionId=${measurementReducer.region.id}`)
      .then(res => {
        dispatch(getMeasurementSuccess(res.data))
      })
      .catch(error => {
        if(error.message === 'Network Error')
          return dispatch(getMeasurementFailure({error: 'Network Error'}))
        dispatch(getMeasurementFailure(error.response.data));
      });
  };
}

export function getMeasurementRequest() {
  return {
    type: types.GET_MEASUREMENT_REQUEST,
  };
}

export function getMeasurementSuccess() {
  return {
    type: types.GET_MEASUREMENT_SUCCESS,
  };
}

export function getMeasurementFailure(error) {
  return {
    type: types.GET_MEASUREMENT_FAILURE,
    error,
  };
}
