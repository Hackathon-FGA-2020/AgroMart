import React, { useState, useCallback, useEffect } from 'react';
import { View, Alert } from 'react-native';
import { useAuth } from '../../hooks/auth';
import api from '../../services/api';
import {
  Container,
  Title,
  BodyText,
  BodyView,
  PictureProfile,
  ButtonsContainer,
} from './styles';
import Button from '../../components/Button';
import DeleteButton from '../../components/DeleteButton';
import Input from '../../components/Input';

interface User {
  name: string;
  email: string;
  id: string;
}

const Profile: React.FC = () => {
  const { user } = useAuth();
  const [hasStore, setHasStore] = useState(false);
  const [userInfo, setUserInfo] = useState<User | null>(null);

  const changeUserHasStore = useCallback(async () => {
    try {
      await api.post(`stores/${userInfo?.id}`);
      Alert.alert('tem loja');
      setHasStore(true);
    } catch (error) {
      Alert.alert('Não foi possível carregar informação de loja');
    }
  }, []);

  useEffect(() => {
    setUserInfo(user as User);
  }, [user]);

  useEffect(() => {
    changeUserHasStore();
  }, [changeUserHasStore]);

  const userDosentHasStore = useCallback(() => {
    return (
      <BodyView>
        <BodyText>Você ainda não possui uma loja ! </BodyText>
        <Button>Cadastrar loja</Button>
      </BodyView>
    );
  }, []);

  const userHasStore = useCallback(() => {
    return (
      <ButtonsContainer>
        <Button>Editar Loja</Button>
        <DeleteButton>Excluir loja</DeleteButton>
      </ButtonsContainer>
    );
  }, []);

  return (
    <Container>
      <View style={{ paddingBottom: 40 }}>
        <PictureProfile />
      </View>
      <Title>Informações Pessoais :</Title>
      {userInfo ? (
        <>
          <Input label="Nome" value={userInfo.name} editable={false} />
          <Input label="Email" value={userInfo.email} editable={false} />
        </>
      ) : null}
      {hasStore ? userHasStore() : userDosentHasStore()}
    </Container>
  );
};

export default Profile;
