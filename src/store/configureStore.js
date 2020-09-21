import {createStore, compose, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import {persistStore, persistCombineReducers} from 'redux-persist';
import storage from '@react-native-community/async-storage';
import {createLogger} from 'redux-logger';

import rootReducers from 'app/reducers'; // where reducers is a object of reducers

const config = {
  key: 'ZoeticApp',
  storage,
  blacklist: ['measurementReducer'],
  debug: true, // to get useful logging
};

const middlewares = [];

middlewares.push(thunk);

if (__DEV__) {
  middlewares.push(createLogger());
}

const reducers = persistCombineReducers(config, rootReducers);
const enhancers = [applyMiddleware(...middlewares)];
const persistConfig = {enhancers};
const store = createStore(reducers, undefined, compose(...enhancers));
const persistor = persistStore(store, persistConfig, () => {
    console.log('Test', store.getState());
});
const configureStore = () => {
  return {persistor, store};
};

export default configureStore;
