import * as types from './types'
import axios from 'axios'
import config from 'app/config'

// Get Measurement
export function getMeasurement(date) {
  const queryParam = date != null ? `date=${date}` : ''
  return function(dispatch, getState) {
    dispatch(getMeasurementRequest())
    return axios.get(`${config.apiGateway.URL}/measurement?${queryParam}`)
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

export function getMeasurementSuccess(measurement) {
  return {
    type: types.GET_MEASUREMENT_SUCCESS,
    measurement: measurement,
  };
}

export function getMeasurementFailure(error) {
  return {
    type: types.GET_MEASUREMENT_FAILURE,
    error,
  };
}

// Add Measurement
export function addMeasurement() {
  return function(dispatch, getState) {
    dispatch(addMeasurementRequest())
    return axios.post(`${config.apiGateway.URL}/measurement`, {
        temperature: temperature,
        bloodPressure: bloodPressure,
        oximeter: oximeter,
      })
      .then(res => {
        dispatch(addMeasurementSuccess(res.data))
        dispatch(getMeasurement());
      })
      .catch(error => {
        if(error.message === 'Network Error')
          return dispatch(addMeasurementFailure({error: 'Network Error'}))
        dispatch(addMeasurementFailure(error.response.data));
      });
  };
}

export function addMeasurementRequest() {
  return {
    type: types.ADD_MEASUREMENT_REQUEST,
  };
}

export function addMeasurementSuccess() {
  return {
    type: types.ADD_MEASUREMENT_SUCCESS,
  };
}

export function addMeasurementFailure(error) {
  return {
    type: types.ADD_MEASUREMENT_FAILURE,
    error,
  };
}
