import React from 'react'
import {TouchableOpacity, View, Text} from 'react-native'
import styles from './styles';

const PrimaryButton = props => (
  <TouchableOpacity onPress={!props.disabled ? props.onPress : () => {}} testID="CompleteButton">
    <View style={[styles.container, props.disabled && styles.disabled]}>
      <Text style={styles.text}>{props.text}</Text>
    </View>
  </TouchableOpacity>
)

export default PrimaryButton