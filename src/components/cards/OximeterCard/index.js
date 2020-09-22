import React from 'react'
import {View, Text, ActivityIndicator} from 'react-native'
import { TouchableOpacity } from 'react-native-gesture-handler';
import styles from './styles';

const Content = props => (
  <View style={styles.dataContainer}>
    {props.spO2
    ? <Text style={styles.contentText}>{props.spO2}</Text>
    : <Text style={{...styles.contentText, ...styles.contentEmptyText}}>0</Text>}
    <Text>/</Text>
    {props.pulseRate
    ? <Text style={styles.contentText}>{props.pulseRate}</Text>
    : <Text style={{...styles.contentText, ...styles.contentEmptyText}}>0</Text>}
  </View>
)

const Button = props => (
  <View style={styles.buttonContainer}>
    <TouchableOpacity onPress={props.onPress}>
      <Text style={styles.buttonText}>Wear <Text style={{fontWeight: '600'}}>Oximeter</Text> to view SpO2 and Pulse Rate.</Text>
    </TouchableOpacity>
  </View>
)

const LoadingIndicator = props => (
  <View style={styles.loadingContainer}>
    <ActivityIndicator />
  </View>
)

const OximeterCard = props => (
  <View style={styles.container}>
    <Text style={styles.title}>SpO2</Text>
    <View style={styles.contentContainer}>
      <Content spO2={props.spO2} pulseRate={props.pulseRate}/>
      {props.buttonVisible && <Button />}
      {props.loading && <LoadingIndicator />}
    </View>
  </View>
)


export default OximeterCard