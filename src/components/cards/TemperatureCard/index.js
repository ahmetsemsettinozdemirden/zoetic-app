import React from 'react'
import {View, Text, ActivityIndicator} from 'react-native'
import { TouchableOpacity } from 'react-native-gesture-handler';
import styles from './styles';

const Button = props => (
  <View style={styles.buttonContainer}>
    <TouchableOpacity onPress={props.onPress}>
      <Text style={styles.buttonText}>Wear <Text style={{fontWeight: '600'}}>Thermometer</Text> to view Temperature.</Text>
    </TouchableOpacity>
  </View>
)

const LoadingIndicator = props => (
  <View style={styles.loadingContainer}>
    <ActivityIndicator />
  </View>
)

const TemperatureCard = props => (
  <View style={styles.container}>
    <Text style={styles.title}>Body</Text>
    <View style={styles.contentContainer}>
      {props.temperature
      ? <Text style={styles.contentText}>{props.temperature}</Text>
      : <Text style={{...styles.contentText, ...styles.contentEmptyText}}>0</Text>}
      {props.buttonVisible && <Button onPress={props.onPress} />}
      {props.loading && <LoadingIndicator />}
    </View>
  </View>
)


export default TemperatureCard