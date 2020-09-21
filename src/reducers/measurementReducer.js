import createReducer from 'app/lib/createReducer';
import * as types from 'app/actions/types';

const initialState = {
  measurement: null,
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
});