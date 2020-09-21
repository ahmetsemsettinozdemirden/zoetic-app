import React from 'react'
import {View, Text} from 'react-native'
import styles from './styles';

const OximeterWidget = props => (
  <View style={styles.container}>
    <Text style={styles.title}>Oximeter</Text>
    <View style={{...styles.column, paddingTop: 64}}>
      <View style={styles.column}>
        <Text style={styles.spO2Title}>SpO₂</Text>
        <View style={styles.row}>
          <Text style={styles.spO2Value}>{props.spO2 ? props.spO2 : '-'}</Text>
          <Text style={styles.percentage}>%</Text>
        </View>
      </View>
      <View style={styles.column}>
        <Text style={styles.prTitle}>PR</Text>
        <View style={styles.row}>
          <Text style={styles.prValue}>{props.pulseRate ? props.pulseRate : '-'}</Text>
          <Text style={styles.bpm}>bpm</Text>
        </View>
      </View>
    </View>
  </View>
)

export default OximeterWidget