import React, {Component} from 'react';
import {connect} from 'react-redux';
import {View} from 'react-native';
import styles from './styles';
import { ScrollView } from 'react-native-gesture-handler';
import * as deviceActions from 'app/actions/deviceActions'

import TemperatureCard from 'app/components/cards/TemperatureCard'
import BloodCard from 'app/components/cards/BloodCard'
import OximeterCard from 'app/components/cards/OximeterCard'
import PrimaryButton from '../../components/PrimaryButton';

class MeasureScreen extends Component {
  render() {
    const { thermometer, bloodPressure, oximeter } = this.props.deviceReducer;

    return (
      <View style={styles.container}>
        <ScrollView style={styles.scrollView}>
          <TemperatureCard
            loading={thermometer.loading}
            buttonVisible={!thermometer.temperature && !thermometer.loading}
            temperature={thermometer.temperature}
            onPress={() => this.props.measureTemperature()}
          />
          <BloodCard
            loading={bloodPressure.loading}
            buttonVisible={!bloodPressure.systolicPressure && !bloodPressure.diastolicPressure && !bloodPressure.loading}
            systolicPressure={bloodPressure.systolicPressure}
            diastolicPressure={bloodPressure.diastolicPressure}
            onPress={() => this.props.measureBloodPressure()}
          />
          <OximeterCard
            loading={oximeter.loading}
            buttonVisible={!oximeter.spo2 && !oximeter.pulseRate && !oximeter.loading}
            spo2={oximeter.spo2}
            pulseRate={oximeter.pulseRate}
            onPress={() => this.props.measureOximeter()}
          />
        </ScrollView>
        <View style={styles.button}>
          <PrimaryButton
            text="COMPLETE"
            disabled={!thermometer.temperature && !bloodPressure.systolicPressure && !oximeter.spo2}
            onPress={() => this.props.navigation.pop()}
          />
        </View>
      </View>
    );
  }
}

function mapStateToProps(state) {
  const {deviceReducer} = state;
  return {
    deviceReducer: deviceReducer,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    measureTemperature: () => dispatch(deviceActions.measureTemperature()),
    measureBloodPressure: () => dispatch(deviceActions.measureBloodPressure()),
    measureOximeter: () => dispatch(deviceActions.measureOximeter()),
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(MeasureScreen);
