import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-between',
  },
  header_container: {
    backgroundColor: '#f2f2f2',
    margin: 10,
  },
  job_title: {
    color: '#37474f',
    fontSize: 20,
    fontWeight: 'bold',
  },
  job_location_title: {
    color: '#0076b5',
    fontWeight: 'bold',
    fontSize: 15,
  },
  job_location: {
    color: '#0076b5',
    fontWeight: 'bold',
    fontSize: 15,
  },
  job_level_title: {
    color: '#0076b5',
    fontWeight: 'bold',
    fontSize: 15,
  },
  job_level: {
    color: '#000',
    fontWeight: 'bold',
    fontSize: 15,
  },
  content_container: {
    backgroundColor: '#fff',
  },
  button_group: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    padding: 10,
    backgroundColor: '#f2f2f2',
  },
  button: {
    flex: 1,
    borderWidth: 1,
    borderColor: '#0076b5',
    backgroundColor: '#0076b5',
    padding: 5,
    margin: 5,
    borderRadius: 5,
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
  },
  favourite_text: {
    color: '#fff',
    fontSize: 16,
  },
  button_remove: {
    flex: 1,
    borderWidth: 1,
    borderColor: '#0076b5',
    backgroundColor: '#fff',
    padding: 5,
    margin: 5,
    borderRadius: 5,
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
  },
  remove_text: {
    color: '#0076b5',
    fontSize: 16,
  },
});
