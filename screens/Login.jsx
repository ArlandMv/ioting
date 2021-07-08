import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyledContainer, InnerContainer, PageLogo, PageTitle } from './../components/styles';
import logo from './../assets/img/logo.png';

const Login = () => {
  return (
    <StyledContainer>
      <StatusBar style="auto" />
      <InnerContainer>
        <PageLogo resizeMode="cover" source={logo} />
        <PageTitle> IoTing!</PageTitle>
      </InnerContainer>
    </StyledContainer>
  );
};

export default Login;
