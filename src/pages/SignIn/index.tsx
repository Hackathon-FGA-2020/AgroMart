import React, { useCallback, useRef } from 'react';

import { useFormik } from 'formik';
import * as Yup from 'yup';
import Input from '../../components/Input';
import Button from '../../components/Button';
import { Container, Logo } from './styles';

const SignIn: React.FC = () => {
  const passwordRef = useRef<Input>();

  const handleSubmit = useCallback(data => {
    console.log(data);
  }, []);

  const SCHEMA = Yup.object().shape({
    email: Yup.string().email().required(),
    password: Yup.string().required(),
  });

  const formik = useFormik({
    initialValues: {
      email: '',
      password: '',
    },
    enableReinitialize: true,
    validationSchema: SCHEMA,
    onSubmit: handleSubmit,
  });

  return (
    <Container>
      <Logo />
      <Input
        placeholder="E-mail"
        autoCorrect={false}
        returnKeyType="next"
        onSubmitEditing={() => passwordRef.current.focus()}
        value={formik.values.email}
        onChangeText={formik.handleChange('email')}
      />
      <Input
        placeholder="Senha"
        ref={passwordRef}
        autoCorrect={false}
        returnKeyType="send"
        secureTextEntry
        autoCapitalize="none"
        onSubmitEditing={formik.submitForm}
        value={formik.values.password}
        onChangeText={formik.handleChange('password')}
      />
      <Button onPress={formik.submitForm}>Logar</Button>
    </Container>
  );
};

export default SignIn;
