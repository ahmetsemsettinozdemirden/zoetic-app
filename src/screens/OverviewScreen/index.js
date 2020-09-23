import React, {Component} from 'react';
import {connect} from 'react-redux';
import {View, Text, ScrollView} from 'react-native';
import styles from './styles';
import * as navigationTypes from 'app/navigation/types'
import * as measurementActions from 'app/actions/measurementActions'
import * as utils from 'app/lib/utils'
import {WeekCalendar} from 'react-native-calendars'
import 'intl';
import 'intl/locale-data/jsonp/en'; // or any other locale you need

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
    const { measurement, selectedDate } = this.props.measurementReducer;
    const { temperature } = measurement.temperature;
    const { spo2, pulseRate } = measurement.oximeter;
    const { systolicPressure, diastolicPressure } = measurement.bloodPressure;

    return (
      <View style={styles.container}>
        <Header/>
        <Text testID="stepOne">
          Step One
        </Text>
        <WeekCalendar
            firstDay={1}
            markedDates={{[utils.toIsoDate(selectedDate)]: {selected: true,  selectedColor: '#3c2865'}}}
            onDayPress={(day) => this.props.selectDate(new Date(day.timestamp))}
          />
        <ScrollView>
          <View style={styles.innerContainer}>
            <View style={styles.column}>
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

const Header = ({props}) => (
  <View 
    style={{
      backgroundColor: '#3c2865',
      paddingHorizontal: 20,
      flexDirection: 'column',
      // shadow
      shadowColor: "#000",
      shadowOffset: {
        width: 0,
        height: 2,
      },
      shadowOpacity: 0.23,
      shadowRadius: 2.62,
      elevation: 4,
    }}>
    <Text style={{marginTop: 16, fontSize: 16, color: '#fafafa', fontWeight: '500'}}>{new Intl.DateTimeFormat('en').format()}</Text>
    <Text style={{marginTop: 8, marginBottom: 16, fontSize: 16, color: '#fafafa', fontWeight: '700'}}>How are you feeling today?</Text>
  </View>
)

function mapStateToProps(state) {
  const {measurementReducer} = state;
  return {
    measurementReducer: measurementReducer,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    getMeasurement: () => dispatch(measurementActions.getMeasurement()),
    selectDate: date => dispatch(measurementActions.selectDate(date)),
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(OverviewScreen);
