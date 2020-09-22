import React from 'react'
import {View, Text, ActivityIndicator} from 'react-native'
import { TouchableOpacity } from 'react-native-gesture-handler';
import styles from './styles';
import { Icon } from 'react-native-elements';

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
    <Icon name='thermometer-full' color='#3c2865' size={20} containerStyle={{width:36, paddingLeft: 16}} type="font-awesome"/>
    <Text style={styles.title}>Body</Text>
    <View style={styles.contentContainer}>
      {props.temperature
      ? <View style={styles.dataContainer}>
          <Text style={styles.contentText}>{props.temperature}</Text>
          <Text style={styles.unitText}>°F</Text>
        </View>
      : <View style={styles.dataContainer}>
          <Text style={{...styles.contentText, ...styles.contentEmptyText}}>0</Text>
          <Text style={styles.unitText}>°F</Text>
        </View>}
      {props.buttonVisible && <Button onPress={props.onPress} />}
      {props.loading && <LoadingIndicator />}
    </View>
  </View>
)


export default TemperatureCard