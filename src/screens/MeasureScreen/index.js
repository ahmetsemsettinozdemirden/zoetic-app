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
    const { thermometer } = this.props.deviceReducer;

    return (
      <View style={styles.container}>
        <ScrollView style={styles.scrollView}>
          <TemperatureCard
            loading={thermometer.loading}
            buttonVisible={!thermometer.temperature && !thermometer.loading}
            temperature={thermometer.temperature}
            onPress={() => this.props.measureTemperature()}
          />
          <BloodCard loading={true} buttonVisible={false} systolicPressure={null} diastolicPressure={null} />
          <OximeterCard loading={false} buttonVisible={false} spO2={96} pulseRate={78} />
        </ScrollView>
        <View style={styles.button}>
          <PrimaryButton
            text="COMPLETE"
            disabled={false}
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
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(MeasureScreen);
