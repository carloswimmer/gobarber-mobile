import React, { useEffect, useState, useCallback, useRef } from 'react'
import {
  Image,
  KeyboardAvoidingView,
  Platform,
  View,
  ScrollView,
  Keyboard,
  TextInput,
  Alert
} from 'react-native';
import Icon from 'react-native-vector-icons/Feather';
import { useNavigation } from '@react-navigation/native';
import { Form } from '@unform/mobile';
import { FormHandles } from '@unform/core';
import * as Yup from 'yup';

import getValidationErrors from '../../utils/getValidationErrors';
import api from '../../services/api';

import Input from '../../components/Input';
import Button from '../../components/Button';

import logoImg from '../../assets/logo.png';

import {
  Container,
  Title,
  BackToSignIn,
  BackToSignInText
} from './styles';

interface SignUpFormData {
  name: string;
  email: string;
  password: string;
}

const SignUp: React.FC = () => {
  const formRef = useRef<FormHandles>(null);
  const emailInputRef = useRef<TextInput>(null);
  const passwordInputRef = useRef<TextInput>(null);

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

  const handleSignUp = useCallback(async (data: SignUpFormData) => {
    try {
      formRef.current?.setErrors({});

      const schema = Yup.object().shape({
        name: Yup.string().required('Nome obrigatório'),
        email: Yup.string()
          .required('E-mail obrigatório')
          .email('Digite um e-mail válido'),
        password: Yup.string().min(6, 'No mínimo 6 dígitos'),
      });

      await schema.validate(data, {
        abortEarly: false,
      })

      await api.post('/users', data);

      Alert.alert(
        'Cadastro realizado com sucesso!',
        'Você já pode fazer seu login.'
      )

      navigation.navigate('SignIn');

    } catch (err) {
      if (err instanceof Yup.ValidationError) {
        const errors = getValidationErrors(err);

        formRef.current?.setErrors(errors);

        return;
      }

      Alert.alert(
        'Erro no cadastro',
        'Ocorreu um erro ao fazer cadastro, tente novamente mais tarde.'
      )
    }
  }, [navigation])

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
              <Title>Crie sua conta</Title>
            </View>

            <Form ref={formRef} onSubmit={handleSignUp}>
              <Input
                name="name"
                icon="user"
                placeholder="Nome"
                autoCapitalize="words"
                returnKeyType="next"
                onSubmitEditing={() => {
                  emailInputRef.current?.focus()
                }}
              />
              <Input
                ref={emailInputRef}
                name="email"
                icon="mail"
                placeholder="E-mail"
                autoCorrect={false}
                autoCapitalize="none"
                keyboardType="email-address"
                returnKeyType="next"
                onSubmitEditing={() => {
                  passwordInputRef.current?.focus()
                }}
              />
              <Input
                ref={passwordInputRef}
                name="password"
                icon="lock"
                placeholder="Senha"
                secureTextEntry={
                  formRef.current?.getFieldError('password') !==
                  'No mínimo 6 dígitos'
                }
                textContentType="newPassword"
                returnKeyType="send"
                onSubmitEditing={() => {
                  formRef.current?.submitForm();
                }}
              />

              <Button
                onPress={() => {
                  formRef.current?.submitForm();
                }}
              >
                Cadastrar
              </Button>
            </Form>

          </Container>
        </ScrollView>
      </KeyboardAvoidingView>

      {showCreateAccount && (
        <BackToSignIn onPress={() => navigation.goBack()}>
          <Icon name="arrow-left" size={20} color="#fff" />

          <BackToSignInText>
            Voltar para logon
          </BackToSignInText>

        </BackToSignIn>
      )}
    </>
  );
}

export default SignUp;
