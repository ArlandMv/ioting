import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Constants from 'expo-constants';
//navigation
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
//components
import Home from './screens/Home';
import Login from './screens/Login';
import SignUp from './screens/SignUp';

const Stack = createStackNavigator();

const globalScreenOptions = {
  headerStyle: {
    backgroundColor: "#621FF7", //#621FF7 dark purple #2C6BED BLUE
  },
  headerTintColor: "#fff",
  headerTitleStyle: {
    fontWeight: "bold",
  },
}

function MyStack() {
  return (
    <Stack.Navigator screenOptions={globalScreenOptions}>
      <Stack.Screen name="SignUp" component={SignUp} />
      <Stack.Screen name="Login" component={Login} />
      <Stack.Screen name="Home" component={Home} />
    </Stack.Navigator>
  )
}

//Temporal Backend
import firebase from 'firebase/app';
if (firebase.app.length == 0) {
  firebase.initializeApp(Constants.manifest.web.config.firebase)
}

export default function App() {
  //const [usuario, setUsuario] = UseState(null); //inicialmente null para verificar
  //const [cargandoUsuario, setCargandoUsuario ] = useState(true);
  return (
    <NavigationContainer>
      <MyStack />
    </NavigationContainer>
  );
};

//how to implement??
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});