import React, { useCallback, useRef, useState } from 'react';
import { TextInput, Alert } from 'react-native';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { useNavigation } from '@react-navigation/native';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import api from '../../services/api';
import Input from '../../components/Input';
import Button from '../../components/Button';
import {
  Container,
  Logo,
  EyeButton,
  AnimationCircule,
  AppName,
} from './styles';

const SignUp: React.FC = () => {
  const passwordRef = useRef<TextInput | any>();
  const passwordConfirmRef = useRef<TextInput | any>();
  const emailRef = useRef<TextInput | any>();
  const [passwordSecure, setPasswordSecure] = useState(false);
  const [loading, setLoading] = useState(false);
  // const navigation = useNavigation();

  const handleSubmit = useCallback(data => {
    try {
      setLoading(true);
      api.post('sessions', data);
      setLoading(false);
      // navigation.goBack();
    } catch (error) {
      Alert.alert('Erro ao fazer login');
    }
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
      <AppName>AgroMart</AppName>
      <Input
        placeholder="Nome"
        autoCorrect={false}
        returnKeyType="next"
        onSubmitEditing={() => emailRef.current.focus()}
        value={formik.values.email}
        onChangeText={formik.handleChange('email')}
        icon={<MaterialIcons name="email" color="#9f9f9f" size={20} />}
      />
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
        onSubmitEditing={() => passwordConfirmRef.current.focus()}
        value={formik.values.password}
        onChangeText={formik.handleChange('password')}
        icon={<ButtonPasswordSecure />}
      />
      <Input
        placeholder="ConfirmarSenha"
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

export default SignUp;
