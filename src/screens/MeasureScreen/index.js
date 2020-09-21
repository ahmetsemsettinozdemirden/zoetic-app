import React, {Component} from 'react';
import {connect} from 'react-redux';
import {View, Text} from 'react-native';
import styles from './styles';
import * as measurementActions from 'app/actions/measurementActions'

class MeasureScreen extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text>MeasureScreen</Text>
      </View>
    );
  }
}

function mapStateToProps(state) {
  const {measurementReducer} = state;
  return {
    measurement: measurementReducer,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    getMeasurement: () => dispatch(measurementActions.getMeasurement()),
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(MeasureScreen);
