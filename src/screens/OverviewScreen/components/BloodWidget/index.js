import React from 'react'
import {View, Text} from 'react-native'
import styles from './styles';
import { Icon } from 'react-native-elements';

const BloodWidget = props => (
  <View style={styles.container}>
    <View style={styles.row}>
      <Icon name='tint' color='#fafafa' size={32} containerStyle={{paddingRight: 8}} type="font-awesome"/>
      <Text style={styles.title}>Blood</Text>
    </View>
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