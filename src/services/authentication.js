import {AsyncStorage} from 'react-native';

export const isSignedIn = async () => {
  const token = await AsyncStorage.getItem('userData');
  return token !== null ? true : false;
};

export const getToken = async () => {
  const userTokenJson = await AsyncStorage.getItem('userData');
  const userToken = JSON.parse(userTokenJson);
  return userToken.token;
};

export const getName = async () => {
  const userDataJSON = await AsyncStorage.getItem('userData');
  const userData = JSON.parse(userDataJSON);
  return userData.userName;
};
