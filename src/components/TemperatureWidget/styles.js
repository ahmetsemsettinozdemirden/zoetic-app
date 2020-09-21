import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fb2372',
    padding: 16,
    borderRadius: 12,
  },
  title: {
    color: '#fafafa',
    fontSize: 16,
    fontWeight: '600',
  },
  // value row
  valueRow: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
    alignItems: 'flex-end',
    paddingTop: 32,
  },
  valueText: {
    color: '#fafafa',
    fontSize: 48,
    fontWeight: '700',
    lineHeight: 48,
  },
  fahrText: {
    color: '#fafafa',
    fontSize: 16,
    lineHeight: 36,
  },
});

export default styles;
