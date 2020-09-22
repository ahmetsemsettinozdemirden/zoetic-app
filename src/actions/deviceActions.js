import * as types from './types'
import * as utils from 'app/lib/utils'
import * as measurementActions from './measurementActions';

// Thermometer
export function measureTemperature() {
  return function(dispatch, getState) {
    dispatch(measureTemperatureLoading())
    return generateFakeThermometerData()
      .then(thermometer => {
        dispatch(measureTemperatureValue(thermometer))
        dispatch(measurementActions.addMeasurement({temperature: thermometer}))
      })
      .catch(error => {
        dispatch(measureTemperatureFailure(error));
      });
  };
}

async function generateFakeThermometerData() {
  await utils.sleep(1000);
  return {
    temperature: parseFloat((Math.random() * 100).toFixed(1))
  };
}

export function measureTemperatureLoading() {
  return {
    type: types.MEASURE_TEMPERATURE_LOADING,
  };
}

export function measureTemperatureValue(thermometer) {
  return {
    type: types.MEASURE_TEMPERATURE_VALUE,
    thermometer: thermometer,
  };
}

export function measureTemperatureFailure(error) {
  return {
    type: types.MEASURE_TEMPERATURE_FAILURE,
    error,
  };
}

// Blood Pressure
export function measureBloodPressure() {
  return function(dispatch, getState) {
    dispatch(measureBloodPressureLoading())
    return generateFakeBloodPressureData()
      .then(bloodPressure => {
        dispatch(measureBloodPressureValue(bloodPressure))
        dispatch(measurementActions.addMeasurement({bloodPressure}))
      })
      .catch(error => {
        dispatch(measureBloodPressureFailure(error));
      });
  };
}

async function generateFakeBloodPressureData() {
  await utils.sleep(1000);
  return {
    systolicPressure: Math.floor(Math.random() * 100),
    diastolicPressure: Math.floor(Math.random() * 100),
  };
}

export function measureBloodPressureLoading() {
  return {
    type: types.MEASURE_BLOOD_PRESSURE_LOADING,
  };
}

export function measureBloodPressureValue(bloodPressure) {
  return {
    type: types.MEASURE_BLOOD_PRESSURE_VALUE,
    bloodPressure: bloodPressure,
  };
}

export function measureBloodPressureFailure(error) {
  return {
    type: types.MEASURE_BLOOD_PRESSURE_FAILURE,
    error,
  };
}

// Oximeter
export function measureOximeter() {
  return function(dispatch, getState) {
    dispatch(measureOximeterLoading())
    return generateFakeOximeterData()
      .then(oximeter => {
        dispatch(measureOximeterValue(oximeter))
        dispatch(measurementActions.addMeasurement({oximeter}))
      })
      .catch(error => {
        dispatch(measureOximeterFailure(error));
      });
  };
}

async function generateFakeOximeterData() {
  await utils.sleep(1000);
  return {
    spo2: Math.floor(Math.random() * 100),
    pulseRate: Math.floor(Math.random() * 100),
  };
}

export function measureOximeterLoading() {
  return {
    type: types.MEASURE_OXIMETER_LOADING,
  };
}

export function measureOximeterValue(oximeter) {
  return {
    type: types.MEASURE_OXIMETER_VALUE,
    oximeter: oximeter,
  };
}

export function measureOximeterFailure(error) {
  return {
    type: types.MEASURE_OXIMETER_FAILURE,
    error,
  };
}