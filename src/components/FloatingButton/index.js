import React from 'react'
import {TouchableOpacity, Text} from 'react-native'
import styles from './styles';

const FloatingButton = props => (
  <TouchableOpacity style={styles.button} onPress={props.onPress}>
    <Text style={styles.text}>{props.text}</Text>
  </TouchableOpacity>
)

export default FloatingButton