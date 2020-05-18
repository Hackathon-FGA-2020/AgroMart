import React, { useState, useCallback } from 'react';
import Icon from 'react-native-vector-icons/Feather';
import { View } from 'react-native';
import { Container, Title, BodyText, BodyView } from './styles';
import Buttom from '../../components/Button';
import Input from '../../components/Input';

const Profile: React.FC = () => {
  const [hasStore, setHasStore] = useState(false);
  const [name, setName] = useState('');
  const [email, seEmail] = useState('');

  const userHasStore = useCallback(() => {
    return (
      <BodyView>
        <BodyText>Você ainda não possui uma loja ! </BodyText>
        <Buttom>Cadastrar loja</Buttom>
      </BodyView>
    );
  }, []);

  const userDosentHasStore = useCallback(() => {
    return (
      <View>
        <Buttom>Cadastrar loja</Buttom>
        <Buttom>Excluir loja</Buttom>
      </View>
    );
  }, []);

  return (
    <Container>
      <Title>Informações Pessoais :</Title>
      <Input label="Nome" editable={false} placeholder={name} />
      <Input label="Email" editable={false} placeholder={email} />
      {hasStore ? userHasStore() : userDosentHasStore()}
    </Container>
  );
};

export default Profile;
