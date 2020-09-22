import createReducer from 'app/lib/createReducer';
import * as types from 'app/actions/types';

const initialState = {
  thermometer: {
    temperature: null,
    loading: false,
  },
  bloodPressure: {
    systolicPressure: null,
    diastolicPressure: null,
    loading: false,
  },
  oximeter: {
    spo2: null,
    pulseRate: null,
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
  // Blood Pressure
  [types.MEASURE_BLOOD_PRESSURE_LOADING](state, action) {
    return {
      ...state,
      bloodPressure: {
        systolicPressure: null,
        diastolicPressure: null,
        loading: true,
      },
    };
  },
  [types.MEASURE_BLOOD_PRESSURE_VALUE](state, action) {
    return {
      ...state,
      bloodPressure: {
        systolicPressure: action.bloodPressure.systolicPressure,
        diastolicPressure: action.bloodPressure.diastolicPressure,
        loading: false,
      },
      error: null,
    };
  },
  [types.MEASURE_BLOOD_PRESSURE_FAILURE](state, action) {
    return {
      ...state,
      bloodPressure: {
        systolicPressure: null,
        diastolicPressure: null,
        loading: false,
      },
      error: action.error,
    };
  },
  // Oximeter
  [types.MEASURE_OXIMETER_LOADING](state, action) {
    return {
      ...state,
      oximeter: {
        spo2: null,
        pulseRate: null,
        loading: true,
      },
    };
  },
  [types.MEASURE_OXIMETER_VALUE](state, action) {
    return {
      ...state,
      oximeter: {
        spo2: action.oximeter.spo2,
        pulseRate: action.oximeter.pulseRate,
        loading: false,
      },
      error: null,
    };
  },
  [types.MEASURE_OXIMETER_FAILURE](state, action) {
    return {
      ...state,
      oximeter: {
        spo2: null,
        pulseRate: null,
        loading: false,
      },
      error: action.error,
    };
  },
});