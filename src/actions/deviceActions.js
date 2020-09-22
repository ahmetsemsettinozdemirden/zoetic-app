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
        // TODO: send data to server
        // dispatch(measurementActions.addMeasurement(thermometer))
      })
      .catch(error => {
        dispatch(measureTemperatureFailure(error));
      });
  };
}

async function generateFakeThermometerData() {
  await utils.sleep(1000);
  return {
    temperature: (Math.random() * 100).toFixed(1)
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
