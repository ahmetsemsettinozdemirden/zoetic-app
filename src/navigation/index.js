import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import * as types from './types'

import OverviewScreen from 'app/screens/OverviewScreen'
import MeasureScreen from 'app/screens/MeasureScreen'
import { StatusBar } from 'react-native'

const overviewHeaderOptions = {
  headerStyle: {
    backgroundColor: '#3c2865',
    elevation: 0,
    shadowOpacity: 0,
    borderBottomWidth: 0,
  },
  headerTintColor: '#fafafa',
  headerTitleStyle: {
    fontWeight: 'bold',
  },
  headerBackTitleVisible: false,
}

const Stack = createStackNavigator()
class Navigator extends React.Component {
  render() {
    return (
      <NavigationContainer>
        <StatusBar barStyle="light-content" />
        <Stack.Navigator initialRouteName={types.OverviewScreen} screenOptions={{...overviewHeaderOptions}}>
          <Stack.Screen
            name={types.OverviewScreen}
            component={OverviewScreen}
            options={{
              title: 'Vitals',
            }}
          />
          <Stack.Screen
            name={types.MeasureScreen}
            component={MeasureScreen}
            options={{
              title: 'Measure Screen',
            }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    );
  }
}

export default Navigator