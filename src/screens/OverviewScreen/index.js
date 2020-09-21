import React, {Component} from 'react';
import {connect} from 'react-redux';
import {View, Text} from 'react-native';
import styles from './styles';
import * as measurementActions from 'app/actions/measurementActions'

class OverviewScreen extends Component {
  componentDidMount = () => {
    // this.props.getMeasurement()
  }

  render() {
    return (
      <View style={styles.container}>
        <Text>OverviewScreen</Text>
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
)(OverviewScreen);
