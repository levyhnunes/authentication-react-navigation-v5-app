import React from "react";
import { View, Button, AsyncStorage } from "react-native";
import * as Google from 'expo-google-app-auth';

import { AuthContext } from "../../services/context";
// import { Container } from './styles';

const Login = () => {

  const { signIn } = React.useContext(AuthContext);

  async function signInWithGoogleAsync() {
    try {
      const result = await Google.logInAsync({
        androidClientId: YOUR_CLIENT_ID_HERE,
        // iosClientId: YOUR_CLIENT_ID_HERE,
        scopes: ['profile', 'email'],
      });

      console.log(JSON.stringify(result));
  
      if (result.type === 'success') {
        logar(result.accessToken, result.user.email, result.user.name);
      } else {
        console.log('cancelado');
      }
    } catch (e) {
      console.log('error', e);
    }
  }

  const logar = (accessToken, email, name) => {
    AsyncStorage.setItem(
      "userData",
      JSON.stringify({ userName: name, userEmail: email, token: accessToken })
    );

    signIn();
  };

  return (
    <View>
      <Button title="ENTRAR" onPress={signInWithGoogleAsync} />
    </View>
  );
};

export default Login;
