import React, {Component} from 'react';
import {connect} from 'react-redux';
import {View} from 'react-native';
import styles from './styles';
import * as measurementActions from 'app/actions/measurementActions'

import TemperatureCard from 'app/components/cards/TemperatureCard'
import BloodCard from 'app/components/cards/BloodCard'
import OximeterCard from 'app/components/cards/OximeterCard'
import { ScrollView } from 'react-native-gesture-handler';

class MeasureScreen extends Component {
  render() {
    return (
      <View style={styles.container}>
        <ScrollView style={styles.scrollView}>
          <TemperatureCard loading={false} buttonVisible={true} temperature={null} />
          <BloodCard loading={true} buttonVisible={false} systolicPressure={null} diastolicPressure={null} />
          <OximeterCard loading={false} buttonVisible={false} spO2={96} pulseRate={78} />
        </ScrollView>
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
