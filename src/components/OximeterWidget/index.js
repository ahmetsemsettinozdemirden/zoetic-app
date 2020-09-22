import React from 'react'
import {View, Text} from 'react-native'
import styles from './styles';
import { Icon } from 'react-native-elements';

const OximeterWidget = props => (
  <View style={styles.container}>
    <View style={styles.row}>
      <Icon name='heartbeat' color='#fafafa' size={32} containerStyle={{paddingRight: 8}} type="font-awesome"/>
      <Text style={styles.title}>Oximeter</Text>
    </View>
    <View style={{...styles.column, paddingTop: 32, alignSelf: 'flex-end'}}>
      <View style={styles.column}>
        <Text style={styles.spo2Title}>SpO₂</Text>
        <View style={styles.row}>
          <Text style={styles.spo2Value}>{props.spo2 ? props.spo2 : '-'}</Text>
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