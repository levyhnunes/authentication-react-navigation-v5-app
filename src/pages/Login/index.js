import React from "react";
import { View, Button, AsyncStorage } from "react-native";

import { AuthContext } from "../../services/context";
// import { Container } from './styles';

const Login = () => {

  const { signIn } = React.useContext(AuthContext);

  const logar = () => {
    AsyncStorage.setItem(
      "userData",
      JSON.stringify({ userName: "Usuario Teste", token: "hdehfkenioi312" })
    );

    signIn();
  };

  return (
    <View>
      <Button title="ENTRAR" onPress={logar} />
    </View>
  );
};

export default Login;
