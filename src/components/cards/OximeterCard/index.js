import React from 'react'
import {View, Text, ActivityIndicator} from 'react-native'
import { TouchableOpacity } from 'react-native-gesture-handler';
import styles from './styles';

const Content = props => (
  <View style={styles.dataContainer}>
    {props.spo2 && props.pulseRate
      ? <>
          <Text style={styles.titleText}>SpO₂</Text>
          <Text style={styles.contentText}>{props.spo2}</Text>
          <Text style={styles.unitText}>%</Text>
          <Text style={styles.titleText}>PR</Text>
          <Text style={styles.contentText}>{props.pulseRate}</Text>
          <Text style={styles.unitText}>bpm</Text>
        </>
      : <>
          <Text style={{...styles.titleText, ...styles.contentEmptyText}}>SpO₂</Text>
          <Text style={{...styles.contentText, ...styles.contentEmptyText}}>0</Text>
          <Text style={{...styles.unitText, ...styles.contentEmptyText}}>%</Text>
          <Text style={{...styles.titleText, ...styles.contentEmptyText}}>PR</Text>
          <Text style={{...styles.contentText, ...styles.contentEmptyText}}>0</Text>
          <Text style={{...styles.unitText, ...styles.contentEmptyText}}>bpm</Text>
        </>
    }
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
    <Text style={styles.title}>Oxigen</Text>
    <View style={styles.contentContainer}>
      <Content spo2={props.spo2} pulseRate={props.pulseRate}/>
      {props.buttonVisible && <Button onPress={props.onPress}/>}
      {props.loading && <LoadingIndicator />}
    </View>
  </View>
)


export default OximeterCard