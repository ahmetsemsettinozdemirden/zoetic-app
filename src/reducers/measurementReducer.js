import createReducer from 'app/lib/createReducer';
import * as types from 'app/actions/types';

const initialState = {
  selectedDate: new Date(),
  measurement: {
    temperature: {
      temperature: null
    },
    oximeter: {
      spo2: null,
      pulseRate: null
    },
    bloodPressure: {
      systolicPressure: null,
      diastolicPressure: null,
    },
  },
  isFetching: false,
  error: null,
};

export const measurementReducer = createReducer(initialState, {
  // Get Measurements
  [types.GET_MEASUREMENT_REQUEST](state, action) {
    return {
      ...state,
      isFetching: true,
    };
  },
  [types.GET_MEASUREMENT_SUCCESS](state, action) {
    return {
      ...state,
      measurement: action.measurement,
      isFetching: false,
      error: null,
    };
  },
  [types.GET_MEASUREMENT_FAILURE](state, action) {
    return {
      ...state,
      isFetching: false,
      error: action.error,
    };
  },
  // Add Measurements
  [types.ADD_MEASUREMENT_REQUEST](state, action) {
    return {
      ...state,
      isFetching: true,
    };
  },
  [types.ADD_MEASUREMENT_SUCCESS](state, action) {
    return {
      ...state,
      isFetching: false,
      error: null,
    };
  },
  [types.ADD_MEASUREMENT_FAILURE](state, action) {
    return {
      ...state,
      isFetching: false,
      error: action.error,
    };
  },
  // Select Date
  [types.SELECT_DATE](state, action) {
    return {
      ...state,
      selectedDate: action.date,
    };
  },
});