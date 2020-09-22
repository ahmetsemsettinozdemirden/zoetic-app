/*
 * combines all the existing reducers
 */
import * as deviceReducer from './deviceReducer'
import * as measurementReducer from './measurementReducer'

export default Object.assign({}, deviceReducer, measurementReducer);