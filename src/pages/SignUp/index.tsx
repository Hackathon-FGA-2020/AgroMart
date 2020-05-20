import React, { useCallback, useRef, useState } from 'react';
import { TextInput, Alert } from 'react-native';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { useNavigation } from '@react-navigation/native';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import { ScrollView } from 'react-native-gesture-handler';
import api from '../../services/api';
import Input from '../../components/Input';
import Button from '../../components/Button';
import {
  Container,
  Logo,
  EyeButton,
  AnimationCircule,
  AppName,
  BackLoginButton,
  BackLoginButtonText,
} from './styles';

const SignIn: React.FC = () => {
  const emailRef = useRef<TextInput | any>();
  const passwordRef = useRef<TextInput | any>();
  const confirmPasswordRef = useRef<TextInput | any>();
  const [passwordSecure, setPasswordSecure] = useState(true);
  const [loading, setLoading] = useState(false);
  const navigation = useNavigation();

  const handleSubmit = useCallback(async data => {
    try {
      setLoading(true);
      const body = {
        name: data.name,
        email: data.email,
        password: data.password,
      };
      await api.post('users', body);
      navigation.goBack();
    } catch (error) {
      Alert.alert('Erro ao cadastrar usuario');
    }
    setLoading(false);
  }, []);

  const SCHEMA = Yup.object().shape({
    name: Yup.string().required(),
    email: Yup.string().email().required(),
    password: Yup.string().required(),
    confirmPassword: Yup.string().required(),
  });

  const formik = useFormik({
    initialValues: {
      name: '',
      email: '',
      password: '',
      confirmPassword: '',
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
    <ScrollView>
      <Container>
        <Logo />
        <AppName>AgroMart</AppName>
        <Input
          placeholder="Name"
          autoCorrect={false}
          returnKeyType="next"
          onSubmitEditing={() => emailRef.current.focus()}
          value={formik.values.name}
          onChangeText={formik.handleChange('name')}
          icon={<MaterialIcons name="person" color="#9f9f9f" size={20} />}
          hasError={formik.touched.name && !!formik.errors.name}
        />
        <Input
          placeholder="E-mail"
          ref={emailRef}
          autoCorrect={false}
          returnKeyType="next"
          onSubmitEditing={() => passwordRef.current.focus()}
          value={formik.values.email}
          onChangeText={formik.handleChange('email')}
          icon={<MaterialIcons name="email" color="#9f9f9f" size={20} />}
          hasError={formik.touched.email && !!formik.errors.email}
        />
        <Input
          placeholder="Senha"
          ref={passwordRef}
          autoCorrect={false}
          returnKeyType="send"
          secureTextEntry={passwordSecure}
          autoCapitalize="none"
          onSubmitEditing={() => confirmPasswordRef.current.focus()}
          value={formik.values.password}
          onChangeText={formik.handleChange('password')}
          icon={<MaterialIcons name="lock" color="#9f9f9f" size={20} />}
          passLock={<ButtonPasswordSecure />}
          hasError={formik.touched.password && !!formik.errors.password}
        />
        <Input
          placeholder="Confirmar Senha"
          ref={confirmPasswordRef}
          autoCorrect={false}
          returnKeyType="send"
          secureTextEntry={passwordSecure}
          autoCapitalize="none"
          onSubmitEditing={formik.submitForm}
          value={formik.values.confirmPassword}
          onChangeText={formik.handleChange('confirmPassword')}
          icon={<MaterialIcons name="lock" color="#9f9f9f" size={20} />}
          passLock={<ButtonPasswordSecure />}
          hasError={
            formik.touched.confirmPassword && !!formik.errors.confirmPassword
          }
        />
        <Button onPress={formik.submitForm}>
          {loading ? <AnimationCircule /> : 'Cadastrar'}
        </Button>
        <BackLoginButton
          onPress={() => {
            navigation.goBack();
          }}
        >
          <BackLoginButtonText>Voltar para o Login</BackLoginButtonText>
        </BackLoginButton>
      </Container>
    </ScrollView>
  );
};

export default SignIn;
