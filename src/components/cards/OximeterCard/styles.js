import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#eaeaea',
    borderRadius: 12,
    marginBottom: 16,
    // shadow
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.20,
    shadowRadius: 1.41,
    elevation: 2,
  },
  title: {
    color: '#3a3a3a',
    fontSize: 16,
    fontWeight: '600',
    paddingLeft: 4,
    width: 80,
  },
  // content
  contentContainer: {
    flex: 1,
    alignItems: 'flex-end',
  },
  contentText: {
    color: '#3c2865',
    fontSize: 36,
    fontWeight: '600',
    paddingVertical: 36,
  },
  titleText: {
    color: '#3a3a3a',
    fontSize: 12,
    fontWeight: '600',
    paddingRight: 6,
  },
  unitText: {
    color: '#3a3a3a',
    fontSize: 12,
    fontWeight: '400',
    marginTop: 20,
  },
  contentEmptyText: {
    color: '#aaa',
  },
  // button
  buttonContainer: {
    backgroundColor: '#3c2865cc',
    position: 'absolute',
    width: '100%',
    height: '100%',
    borderRadius: 12,
  },
  buttonText: {
    flexWrap: 'wrap',
    color: '#fafafa',
    fontSize: 14,
    fontWeight: '300',
    textAlign: 'center',
    paddingVertical: 36,
  },
  // loading
  loadingContainer: {
    position: 'absolute',
    width: '100%',
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  // data
  dataContainer: {
    flexDirection: 'row',
    justifyContent: 'flex-end', 
    alignItems: 'center',
    paddingRight: 24,
  },
});

export default styles;
