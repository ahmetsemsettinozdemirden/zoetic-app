import React from 'react';
import {ActivityIndicator} from 'react-native';
import {Provider} from 'react-redux';
import {PersistGate} from 'redux-persist/es/integration/react';
import Navigator from 'app/navigation';
import configureStore from 'app/store/configureStore';
import {ThemeProvider} from 'react-native-elements';

const {persistor, store} = configureStore();

class App extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <PersistGate loading={<ActivityIndicator />} persistor={persistor}>
          <ThemeProvider>
            <Navigator />
          </ThemeProvider>
        </PersistGate>
      </Provider>
    );
  }
}

export default App