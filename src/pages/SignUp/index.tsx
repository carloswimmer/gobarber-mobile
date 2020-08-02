import React, { useEffect, useState, useCallback } from 'react'
import {
  Image,
  KeyboardAvoidingView,
  Platform,
  View,
  ScrollView,
  Keyboard
} from 'react-native';
import Icon from 'react-native-vector-icons/Feather';
import { useNavigation } from '@react-navigation/native';

import Input from '../../components/Input';
import Button from '../../components/Button';

import logoImg from '../../assets/logo.png';

import {
  Container,
  Title,
  BackToSignIn,
  BackToSignInText
} from './styles';

const SignUp: React.FC = () => {
  const [showCreateAccount, setShowCreateAccount] = useState(true)
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
          contentContainerStyle={{ minHeight: 100 }}
        >
          <Container>
            <Image source={logoImg} />

            <View>
              <Title>Crie sua conta</Title>
            </View>

            <Input name="name" icon="user" placeholder="Nome"/>
            <Input name="email" icon="mail" placeholder="E-mail"/>
            <Input name="password" icon="lock" placeholder="Senha"/>

            <Button onPress={() => {}}>
              Cadastrar
            </Button>

          </Container>
        </ScrollView>
      </KeyboardAvoidingView>

      {showCreateAccount && (
        <BackToSignIn onPress={() => navigation.goBack()}>
          <Icon name="arrow-left" size={20} color="#fff"/>

          <BackToSignInText>
            Voltar para logon
          </BackToSignInText>

        </BackToSignIn>
      )}
    </>
  );
}

export default SignUp;
