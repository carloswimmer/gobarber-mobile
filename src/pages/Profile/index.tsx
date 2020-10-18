import React from 'react';

import { Container, Title } from './styles';

import { useAuth } from '../../hooks/auth';

import Button from '../../components/Button';

const Profile: React.FC = () => {
  const { signOut } = useAuth();

  return (
    <Container>
      <Title>GoBarber Profile</Title>
      <Button onPress={signOut}>Sair</Button>
    </Container>
  );
};

export default Profile;
