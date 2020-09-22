import createReducer from 'app/lib/createReducer';
import * as types from 'app/actions/types';

const initialState = {
  thermometer: {
    temperature: null,
    loading: false,
  },
  error: null,
};

export const deviceReducer = createReducer(initialState, {
  // Thermometer
  [types.MEASURE_TEMPERATURE_LOADING](state, action) {
    return {
      ...state,
      thermometer: {
        temperature: null,
        loading: true,
      },
    };
  },
  [types.MEASURE_TEMPERATURE_VALUE](state, action) {
    return {
      ...state,
      thermometer: {
        temperature: action.thermometer.temperature,
        loading: false,
      },
      error: null,
    };
  },
  [types.MEASURE_TEMPERATURE_FAILURE](state, action) {
    return {
      ...state,
      thermometer: {
        temperature: null,
        loading: false,
      },
      error: action.error,
    };
  },
});