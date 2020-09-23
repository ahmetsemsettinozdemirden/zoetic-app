import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  button: {
    alignItems:'center',
    justifyContent:'center',
    width:70,
    position: 'absolute',                                          
    bottom: 10,                                                    
    right: 10,
    height:70,
    backgroundColor:'#3c2865',
    borderRadius:100,
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
  text: {
    color: '#fff',
    fontSize: 12,
    fontWeight: '700',
    textAlign: 'center',
  }
});

export default styles;
