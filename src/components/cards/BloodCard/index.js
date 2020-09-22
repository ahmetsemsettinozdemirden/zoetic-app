import React from 'react'
import {View, Text, ActivityIndicator} from 'react-native'
import { TouchableOpacity } from 'react-native-gesture-handler';
import styles from './styles';
import { Icon } from 'react-native-elements';

const Content = props => (
  <View style={styles.dataContainer}>
    {props.systolicPressure && props.diastolicPressure
      ? <>
          <Text style={styles.contentText}>{props.systolicPressure}</Text>
          <Text style={styles.slash}>/</Text>
          <Text style={styles.diastolicText}>{props.diastolicPressure}</Text>
          <Text style={styles.unitText}>mmHg</Text>
        </>
      : <>
          <Text style={{...styles.contentText, ...styles.contentEmptyText}}>0</Text>
          <Text style={{...styles.slash, ...styles.contentEmptyText}}>/</Text>
          <Text style={{...styles.contentText, ...styles.contentEmptyText}}>0</Text>
          <Text style={{...styles.unitText, ...styles.contentEmptyText}}>mmHg</Text>
        </>
    }
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
    <Icon name='tint' color='#3c2865' size={20} containerStyle={{width:32, paddingLeft: 16}} type="font-awesome"/>
    <Text style={styles.title}>Blood</Text>
    <View style={styles.contentContainer}>
      <Content systolicPressure={props.systolicPressure} diastolicPressure={props.diastolicPressure}/>
      {props.buttonVisible && <Button onPress={props.onPress}/>}
      {props.loading && <LoadingIndicator />}
    </View>
  </View>
)


export default BloodCard