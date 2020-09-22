import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#dadada',
    borderRadius: 12,
    marginBottom: 16,
  },
  title: {
    color: '#3a3a3a',
    fontSize: 16,
    fontWeight: '600',
    paddingLeft: 16,
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
    paddingHorizontal: 24,
    paddingVertical: 36,
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
    paddingHorizontal: 24,
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
    alignItems: 'center'
  },
});

export default styles;
