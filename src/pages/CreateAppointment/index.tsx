import React from 'react';

import { Container, Title } from './styles';

import { useAuth } from '../../hooks/auth';

import Button from '../../components/Button';

const CreateAppointment: React.FC = () => {
  const { signOut } = useAuth();

  return (
    <Container>
      <Title>GoBarber CreateAppointment</Title>
      <Button onPress={signOut}>Sair</Button>
    </Container>
  );
};

export default CreateAppointment;
