import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import * as types from './types'

import OverviewScreen from 'app/screens/OverviewScreen'
import MeasureScreen from 'app/screens/MeasureScreen'

const overviewHeaderOptions = {
  headerStyle: {
    backgroundColor: '#3c2865',
  },
  headerTintColor: '#fafafa',
  headerTitleStyle: {
    fontWeight: 'bold',
  },
}

const Stack = createStackNavigator()
class Navigator extends React.Component {
  render() {
    return (
      <NavigationContainer>
        <Stack.Navigator initialRouteName={types.OverviewScreen} screenOptions={{...overviewHeaderOptions}}>
          <Stack.Screen
            name={types.OverviewScreen}
            component={OverviewScreen}
            options={{
              title: 'Vitals'
            }}
          />
          <Stack.Screen
            name={types.MeasureScreen}
            component={MeasureScreen}
            options={{
              title: 'Measure Screen'
            }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    );
  }
}

export default Navigator