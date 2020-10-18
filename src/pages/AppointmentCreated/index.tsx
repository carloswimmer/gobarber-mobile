import React from 'react';

import { Container, Title } from './styles';

import { useAuth } from '../../hooks/auth';

import Button from '../../components/Button';

const AppointmentCreated: React.FC = () => {
  const { signOut } = useAuth();

  return (
    <Container>
      <Title>GoBarber AppointmentCreated</Title>
      <Button onPress={signOut}>Sair</Button>
    </Container>
  );
};

export default AppointmentCreated;
