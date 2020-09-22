import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#3c2865',
    padding: 16,
    borderRadius: 12,
  },
  title: {
    color: '#fafafa',
    fontSize: 16,
    fontWeight: '600',
  },
  // value section
  column: {
    flexDirection: 'column',
  },
  row: {
    flexDirection: 'row',
  },
  spo2Title: {
    color: '#fafafa',
    fontSize: 16,
    fontWeight: '600',
    paddingBottom: 4,
  },
  prTitle: {
    color: '#fafafa',
    fontSize: 16,
    fontWeight: '600',
    paddingBottom: 4,
  },
  spo2Value: {
    color: '#fafafa',
    fontSize: 54,
    fontWeight: '700',
    lineHeight: 54,
  },
  prValue: {
    color: '#fafafa',
    fontSize: 54,
    fontWeight: '700',
    lineHeight: 54,
  },
  percentage: {
    color: '#fafafa',
    fontSize: 16,
    fontWeight: '300',
    lineHeight: 54,
  },
  bpm: {
    color: '#fafafa',
    fontSize: 16,
    fontWeight: '300',
    lineHeight: 54,
  },
});

export default styles;
