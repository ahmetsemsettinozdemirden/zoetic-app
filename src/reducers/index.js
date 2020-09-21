/*
 * combines all the existing reducers
 */
import * as measurementReducer from './measurementReducer'

export default Object.assign({}, measurementReducer);