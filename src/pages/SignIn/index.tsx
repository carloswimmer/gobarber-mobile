import React, { useEffect, useState, useCallback } from 'react'
import {
  Image,
  KeyboardAvoidingView,
  Platform,
  View,
  ScrollView,
  Keyboard
} from 'react-native';
import Icon from 'react-native-vector-icons/Feather'
import { useNavigation } from '@react-navigation/native';

import Input from '../../components/Input';
import Button from '../../components/Button';

import logoImg from '../../assets/logo.png';

import {
  Container,
  Title,
  ForgotPassword,
  ForgotPasswordText,
  CreateAccountButton,
  CreateAccountButtonText
} from './styles';

const SignIn: React.FC = () => {
  const [showCreateAccount, setShowCreateAccount] = useState(true);
  const navigation = useNavigation();

  useEffect(() => {
    Keyboard.addListener('keyboardDidShow', _hideCreateAccount);
    Keyboard.addListener('keyboardDidHide', _showCreateAccount);

    return () => {
      Keyboard.removeListener('keyboardDidShow', _hideCreateAccount);
      Keyboard.removeListener('keyboardDidHide', _showCreateAccount);
    }
  }, [])

  const _hideCreateAccount = useCallback(() => {
    setShowCreateAccount(false);
  }, []);

  const _showCreateAccount = useCallback(() => {
    setShowCreateAccount(true);
  }, []);

  return (
    <>
      <KeyboardAvoidingView
        style={{ flex: 1 }}
        behavior={Platform.OS === 'ios' ? 'padding' : undefined}
        enabled
      >
        <ScrollView
          keyboardShouldPersistTaps="handled"
          contentContainerStyle={{ flexGrow: 1 }}
        >
          <Container>
            <Image source={logoImg} />

            <View>
              <Title>Faça seu logon</Title>
            </View>

            <Input name="email" icon="mail" placeholder="E-mail"/>
            <Input name="password" icon="lock" placeholder="Senha"/>

            <Button onPress={() => {console.log('ok')}}>Entrar</Button>

            <ForgotPassword onPress={() => {}}>
              <ForgotPasswordText>
                Esqueci minha senha
              </ForgotPasswordText>
            </ForgotPassword>

          </Container>
        </ScrollView>
      </KeyboardAvoidingView>

      {showCreateAccount && (
        <CreateAccountButton onPress={() => navigation.navigate('SignUp')}>
          <Icon name="log-in" size={20} color="#ff9000"/>

          <CreateAccountButtonText>
            Criar uma conta
          </CreateAccountButtonText>

        </CreateAccountButton>
      )}
    </>
  );
}

export default SignIn;
