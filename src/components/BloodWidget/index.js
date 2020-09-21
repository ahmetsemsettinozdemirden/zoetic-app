import React from 'react'
import {View, Text} from 'react-native'
import styles from './styles';

const BloodWidget = props => (
  <View style={styles.container}>
    <Text style={styles.title}>Blood</Text>
    <View style={styles.valueColumn}>
      <View style={styles.valueRow}>
        <Text style={styles.systolicPressureText}>{props.systolicPressure ? props.systolicPressure : '-'}</Text>
        <Text style={styles.seperatorText}>/</Text>
        <Text style={styles.diastolicPressureText}>{props.diastolicPressure ? props.diastolicPressure : '-'}</Text>
      </View>
      <Text style={styles.mmHgText}>mmHg</Text>
    </View>
  </View>
)

export default BloodWidget