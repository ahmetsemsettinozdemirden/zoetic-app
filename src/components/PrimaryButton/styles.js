import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {
    paddingVertical: 16,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#3c2865',
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
  disabled: {
    backgroundColor: '#ccc',
  },
  text: {
    color: '#fafafa',
  }
});

export default styles;
