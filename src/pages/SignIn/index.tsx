import React, { useCallback, useRef, useState } from 'react';
import { TextInput } from 'react-native';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import Input from '../../components/Input';
import Button from '../../components/Button';
import { Container, Logo, EyeButton, AnimationCircule } from './styles';

const SignIn: React.FC = () => {
  const passwordRef = useRef<TextInput | any>();
  const [passwordSecure, setPasswordSecure] = useState(false);
  const [loading, setLoading] = useState(false);
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

  const ButtonPasswordSecure = useCallback(() => {
    return (
      <EyeButton onPress={() => setPasswordSecure(!passwordSecure)}>
        <MaterialIcons name="remove-red-eye" color="#9f9f9f" size={20} />
      </EyeButton>
    );
  }, [passwordSecure]);

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
        icon={<MaterialIcons name="email" color="#9f9f9f" size={20} />}
      />
      <Input
        placeholder="Senha"
        ref={passwordRef}
        autoCorrect={false}
        returnKeyType="send"
        secureTextEntry={passwordSecure}
        autoCapitalize="none"
        onSubmitEditing={formik.submitForm}
        value={formik.values.password}
        onChangeText={formik.handleChange('password')}
        icon={<ButtonPasswordSecure />}
      />
      <Button onPress={formik.submitForm}>
        {loading ? <AnimationCircule /> : 'Logar'}
      </Button>
    </Container>
  );
};

export default SignIn;
