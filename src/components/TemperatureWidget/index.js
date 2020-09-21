import React from 'react'
import {View, Text} from 'react-native'
import styles from './styles';

const TemperatureWidget = props => (
  <View style={styles.container}>
    <Text style={styles.title}>Temperature</Text>
    <View style={styles.valueRow}>
      <Text style={styles.valueText}>{props.temperature ? props.temperature : '-'}</Text>
      <Text style={styles.fahrText}>°F</Text>
    </View>
  </View>
)

export default TemperatureWidget