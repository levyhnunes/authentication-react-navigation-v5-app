import React from "react";
import { View, Button, AsyncStorage } from "react-native";

import { AuthContext } from "../../services/context";
// import { Container } from './styles';


const Main = () => {

  const { signOut } = React.useContext(AuthContext);

  const sair = () => {
    AsyncStorage.removeItem("userData");
    signOut();
  };

  return (
    <View>
      <Button title="SAIR" onPress={sair} />
    </View>
  );
};

export default Main;
