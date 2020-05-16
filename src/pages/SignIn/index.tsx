import React from 'react';

import Input from '../../components/Input';
import Button from '../../components/Button';

import { Container } from './styles';

const SignIn: React.FC = () => {
  return (
    <Container>
      <Input />
      <Input />
      <Button>Logar</Button>
    </Container>
  );
};

export default SignIn;
