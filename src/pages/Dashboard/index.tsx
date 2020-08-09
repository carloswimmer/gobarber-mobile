import React from 'react';

import { Container, Title } from './styles';

import { useAuth } from '../../hooks/auth';

import Button from '../../components/Button';

const Dashboard: React.FC = () => {
  const { signOut } = useAuth();

  return (
    <Container>
      <Title>GoBarber Dashboard</Title>
      <Button onPress={() => signOut()}>Sair</Button>
    </Container>
  );
}

export default Dashboard;
