import React, { useState } from 'react';
import { View, SafeAreaView, Text, TextInput, Button, StyleSheet } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import { Formik } from 'formik';
import {
  StyledContainer,
  InnerContainer,
  PageLogo,
  PageTitle,
  SubTitle,
  StyledFormArea,
  LeftIcon,
  StyledTextInput,
  StyledInputLabel,
  RightIcon,
  Colors,
  StyledButton,
} from './../components/styles';
//images
import { Feather } from '@expo/vector-icons';
import logo from './../assets/img/logo.png';
//Colors
const { brand, primary, secondary, purple, darkLight } = Colors;

const Login = () => {
  const [state, setState] = useState({
    email: '',
    password: '',
  });

  const handleChangeText = (text, value) => {
    setState({ ...state, [text]: value });
  };

  return (
    <StyledContainer>
      <StatusBar style="dark" />
      <InnerContainer>
        <PageLogo resizeMode="cover" source={logo} />
        <PageTitle> IoTing!</PageTitle>
        <SubTitle>Ingresar a Cuenta</SubTitle>
        <SafeAreaView>
          <View>
            <Feather name="mail" size={24} color="black" />
            <Text>Correo Electronico:</Text>
          </View>
          <TextInput
            placeholderTextColor={purple}
            placeholder="XYZ@gmail.com"
            onChangeText={(value) => handleChangeText('email', value)}
          ></TextInput>
          <Text></Text>
          <View>
            <Feather name="lock" size={24} color="black" />
            <Text>Contraseña:</Text>
          </View>
          <TextInput
            placeholderTextColor={purple}
            placeholder="********"
            secureTextEntry={true}
            onChangeText={(value) => handleChangeText('password', value)}
          ></TextInput>
          <Text></Text>
          <Button title="Ingresar" onPress={() => console.log(state)} />
        </SafeAreaView>
      </InnerContainer>
    </StyledContainer>
  );
};
export default Login;

/* const MyTextInput = (label, icon, ...props) => {
  return (
    <View>
      <LeftIcon>
        <Ionicons name={icon} size={30} color={brand} />
      </LeftIcon>
      <StyledInputLabel>{label}</StyledInputLabel>
      <StyledTextInput {...props} />
    </View>
  );
};
 */
const styles = StyleSheet.create({
  container: {
    paddingTop: 23,
  },
  input: {
    margin: 15,
    height: 40,
    borderColor: '#7a42f4',
    borderWidth: 1,
  },
  submitButton: {
    backgroundColor: '#7a42f4',
    padding: 10,
    margin: 15,
    height: 40,
  },
  submitButtonText: {
    color: 'white',
  },
});
