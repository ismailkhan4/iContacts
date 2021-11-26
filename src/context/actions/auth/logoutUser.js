import { AsyncStorage } from 'react-native';
import { LOGOUT_USER } from '../../../constants/actionTypes';

export default () => (dispatch) => {
  AsyncStorage.removeItem('token');
  AsyncStorage.removeItem('user');
  dispatch({ type: LOGOUT_USER });
};
