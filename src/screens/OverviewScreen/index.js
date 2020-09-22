import React, {Component} from 'react';
import {connect} from 'react-redux';
import {View, ScrollView} from 'react-native';
import styles from './styles';
import * as navigationTypes from 'app/navigation/types'
import * as measurementActions from 'app/actions/measurementActions'

import TemperatureWidget from 'app/components/TemperatureWidget'
import BloodWidget from 'app/components/BloodWidget'
import OximeterWidget from 'app/components/OximeterWidget'
import FloatingButton from 'app/components/FloatingButton'

class OverviewScreen extends Component {
  componentDidMount = () => {
    this.props.getMeasurement()
  }

  onFloatingPressed = e => {
    this.props.navigation.navigate(navigationTypes.MeasureScreen)
  }

  render() {
    const { measurement } = this.props.measurementReducer;
    const { temperature } = measurement.temperature;
    const { spo2, pulseRate } = measurement.oximeter;
    const { systolicPressure, diastolicPressure } = measurement.bloodPressure;

    return (
      <View style={styles.container}>
        <ScrollView>
          <View style={styles.innerContainer}>
            <View style={styles.column}>
              {/* TODO: Temperature to Thermometer */}
              <TemperatureWidget temperature={temperature} />
              <View style={{height: 16}}></View>
              <OximeterWidget spo2={spo2} pulseRate={pulseRate}/>
            </View>
            <View style={{width: 16}}></View>
            <View style={styles.column}>
              <BloodWidget systolicPressure={systolicPressure} diastolicPressure={diastolicPressure} />
            </View>
          </View>
        </ScrollView>
        <FloatingButton text="Measure Now" onPress={this.onFloatingPressed}/>
      </View>
    );
  }
}

function mapStateToProps(state) {
  const {measurementReducer} = state;
  return {
    measurementReducer: measurementReducer,
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
)(OverviewScreen);
