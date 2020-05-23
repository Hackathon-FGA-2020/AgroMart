import React, { useState, useCallback, useEffect } from 'react';
import { View, Alert } from 'react-native';
import { useNavigation, useFocusEffect } from '@react-navigation/native';
import Feather from 'react-native-vector-icons/Feather';
import { useAuth } from '../../hooks/auth';

import api from '../../services/api';

import {
  Container,
  Title,
  BodyText,
  BodyView,
  PictureProfile,
  ButtonsContainer,
  SignOutButton,
  SignOutText,
} from './styles';
import Button from '../../components/Button';
import DeleteButton from '../../components/DeleteButton';
import Input from '../../components/Input';
import ArrowBackComponent from '../../components/ArrowBackComponent';

interface User {
  name: string;
  email: string;
  id: string;
}

interface Store {
  owner_id: string;
}

const Profile: React.FC = () => {
  const { user, signOut } = useAuth();
  const [store, setStore] = useState(null);
  const [hasStore, setHasStore] = useState(false);
  const [userInfo, setUserInfo] = useState<User | null>(null);
  const navigation = useNavigation();

  const handleDeleteStore = useCallback(async (): Promise<void> => {
    try {
      await api.delete(`stores/${user?.id}`);
      Alert.alert('Loja excluida!', 'Sua loja foi excluida com sucesso');
      setHasStore(false);
    } catch {
      Alert.alert('Erro!', 'Erro ao excluir loja');
    }
  }, [user]);

  useFocusEffect(
    useCallback((): any => {
      api
        .get(`stores?userId=${user?.id}`)
        .then(response => {
          if (response.data.length === 1) {
            setStore(response.data[0]);
            setHasStore(true);
          }
        })
        .catch(e => {
          setHasStore(false);
        });
    }, [user, handleDeleteStore]),
  );

  useEffect(() => {
    setUserInfo(user as User);
  }, [user]);

  const userDosentHasStore = useCallback(() => {
    return (
      <BodyView>
        <BodyText>Você ainda não possui uma loja ! </BodyText>
        <Button onPress={() => navigation.navigate('Store', { store: null })}>
          Cadastrar loja
        </Button>
      </BodyView>
    );
  }, [navigation]);

  const userHasStore = useCallback(() => {
    return (
      <ButtonsContainer>
        <Button onPress={() => navigation.navigate('Store', { store })}>
          Editar Loja
        </Button>
        <DeleteButton onPress={() => handleDeleteStore()}>
          Excluir loja
        </DeleteButton>
      </ButtonsContainer>
    );
  }, [hasStore, navigation]);

  return (
    <Container>
      <ArrowBackComponent />
      <View style={{ paddingBottom: 40, alignSelf: 'center' }}>
        <PictureProfile />
      </View>
      <Title>Informações Pessoais :</Title>
      {userInfo ? (
        <>
          <Input label="Nome" value={userInfo.name} editable={false} />
          <Input label="Email" value={userInfo.email} editable={false} />
        </>
      ) : null}
      {!hasStore ? userDosentHasStore() : userHasStore()}
      <SignOutButton onPress={() => signOut()}>
        <Feather name="log-out" size={20} color="#f24245" />
        <SignOutText>Finalizar Sessão</SignOutText>
      </SignOutButton>
    </Container>
  );
};

export default Profile;
