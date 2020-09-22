import * as types from './types'
import axios from 'axios'
import config from 'app/config'
import * as utils from 'app/lib/utils'

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
export function addMeasurement(requestBody) {
  return function(dispatch, getState) {
    dispatch(addMeasurementRequest())
    return axios.post(`${config.apiGateway.URL}/measurement`, requestBody)
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

// Select date
export function selectDate(date) {
  return function(dispatch) {
    dispatch({
      type: types.SELECT_DATE,
      date: date
    });
    dispatch(getMeasurement(utils.toIsoDate(date)));
  }
}