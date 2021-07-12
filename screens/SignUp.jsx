import React, { useState } from 'react';
import { Image, StyleSheet, View, Text, KeyboardAvoidingView } from 'react-native';
import { Button, Input } from 'react-native-elements';
import { StatusBar } from 'expo-status-bar'; /* ?? */
import { PageLogo } from './../components/styles';

const SignUp = () => {
  const [email, setEmail] = useState('');
  const [password, setpassword] = useState('');
  return (
    <KeyboardAvoidingView behavior="padding" style={styles.container}>
      <StatusBar style="light" />
      {/* <Image source={require('./../assets/img/logo.png')} resizeMode="cover" style={{ width: 200 }} /> */}
      <PageLogo resizeMode="cover" source={require('./../assets/img/logo.png')} />
      <Text></Text>
      <View style={styles.inputContainer}>
        <Input placeholder="Email" autoFocus type="email" value={email} onChange={(text) => setEmail(text)} />
        <Input placeholder="Password" type="Password" value={password} onChange={(text) => setPassword(text)} />
      </View>
      <Button containerStyle={styles.button} title="Ingresar" />
      <Text styles={styles.text}></Text>
      <Button containerStyle={styles.button} type="outline" title="Registrarse" />
      {/* <View style={{ height: 100 }} /> add after adding logo */}
    </KeyboardAvoidingView>
  );
};
export default SignUp;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 10,
  },
  inputContainer: { width: 300 },
  button: { width: 200, marginTop: 10 },
});
