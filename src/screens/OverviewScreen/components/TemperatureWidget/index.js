import React from 'react'
import {View, Text} from 'react-native'
import styles from './styles';
import { Icon } from 'react-native-elements';

const TemperatureWidget = props => (
  <View style={styles.container}>
    <View style={styles.row}>
      <Icon name='thermometer-full' color='#fafafa' size={32} containerStyle={{paddingRight: 8}} type="font-awesome"/>
      <Text style={styles.title}>Temperature</Text>
    </View>
    <View style={styles.valueRow}>
      <Text style={styles.valueText}>{props.temperature ? props.temperature : '-'}</Text>
      <Text style={styles.fahrText}>°F</Text>
    </View>
  </View>
)

export default TemperatureWidget