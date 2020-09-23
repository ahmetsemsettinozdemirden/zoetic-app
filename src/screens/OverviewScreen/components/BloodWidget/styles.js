import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#09bdc6',
    padding: 16,
    borderRadius: 12,
    // shadow
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.23,
    shadowRadius: 2.62,
    elevation: 4,
  },
  row: {
    flexDirection: 'row',
  },
  title: {
    color: '#fafafa',
    fontSize: 14,
    fontWeight: '700',
  },
  // value row
  valueColumn: {
    flexDirection: 'column',
    justifyContent: 'flex-end',
    alignItems: 'flex-end',
    paddingTop: 96,
  },
  valueRow: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
    alignItems: 'flex-end',
  },
  systolicPressureText: {
    color: '#fafafa',
    fontSize: 48,
    fontWeight: '700',
    lineHeight: 48,
  },
  seperatorText: {
    color: '#fafafa',
    fontSize: 36,
    fontWeight: '700',
    lineHeight: 36,
  },
  diastolicPressureText: {
    color: '#d90000',
    fontSize: 36,
    fontWeight: '700',
    lineHeight: 36,
  },
  mmHgText: {
    color: '#fafafa',
    fontSize: 16,
    fontWeight: '300',
    lineHeight: 16,
  },
});

export default styles;
