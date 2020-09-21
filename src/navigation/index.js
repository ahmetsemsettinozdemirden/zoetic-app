import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import * as types from './types'

import OverviewScreen from 'app/screens/OverviewScreen'
import MeasureScreen from 'app/screens/MeasureScreen'

const Stack = createStackNavigator()
class Navigator extends React.Component {
  render() {
    return (
      <NavigationContainer>
        <Stack.Navigator initialRouteName={types.OverviewScreen}>
          <Stack.Screen name={types.OverviewScreen} component={OverviewScreen} options={{title: 'Overview Screen'}} />
          <Stack.Screen name={types.MeasureScreen} component={MeasureScreen} options={{title: 'Measure Screen'}} />
        </Stack.Navigator>
      </NavigationContainer>
    );
  }
}

export default Navigator