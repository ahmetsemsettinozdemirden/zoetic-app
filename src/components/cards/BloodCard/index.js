import React from 'react'
import {View, Text, ActivityIndicator} from 'react-native'
import { TouchableOpacity } from 'react-native-gesture-handler';
import styles from './styles';

const Content = props => (
  <View style={styles.dataContainer}>
    {props.systolicPressure
    ? <Text style={styles.contentText}>{props.systolicPressure}</Text>
    : <Text style={{...styles.contentText, ...styles.contentEmptyText}}>0</Text>}
    <Text>/</Text>
    {props.diastolicPressure
    ? <Text style={styles.contentText}>{props.diastolicPressure}</Text>
    : <Text style={{...styles.contentText, ...styles.contentEmptyText}}>0</Text>}
  </View>
)

const Button = props => (
  <View style={styles.buttonContainer}>
    <TouchableOpacity onPress={props.onPress}>
      <Text style={styles.buttonText}>Wear <Text style={{fontWeight: '600'}}>Blood Pressure Monitor</Text> to view Blood Pressure.</Text>
    </TouchableOpacity>
  </View>
)

const LoadingIndicator = props => (
  <View style={styles.loadingContainer}>
    <ActivityIndicator />
  </View>
)

const BloodCard = props => (
  <View style={styles.container}>
    <Text style={styles.title}>Blood</Text>
    <View style={styles.contentContainer}>
      <Content systolicPressure={props.systolicPressure} diastolicPressure={props.diastolicPressure}/>
      {props.buttonVisible && <Button onPress={props.onPress}/>}
      {props.loading && <LoadingIndicator />}
    </View>
  </View>
)


export default BloodCard