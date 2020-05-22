import React, { useState, useCallback, useEffect } from 'react';
import { View } from 'react-native';
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
  const [hasStore, setHasStore] = useState(false);
  const [userInfo, setUserInfo] = useState<User | null>(null);
  const navigation = useNavigation();

  useFocusEffect(
    useCallback(async (): any => {
      try {
        const response = await api.get(`stores`);
        response.data.forEach((item: Store) => {
          if (item.owner_id === user?.id) {
            setHasStore(true);
          }
        });
      } catch (error) {
        setHasStore(false);
      }
    }, []),
  );

  useEffect(() => {
    setUserInfo(user as User);
  }, [user]);

  const userDosentHasStore = useCallback(() => {
    return (
      <BodyView>
        <BodyText>Você ainda não possui uma loja ! </BodyText>
        <Button onPress={() => navigation.navigate('Store')}>
          Cadastrar loja
        </Button>
      </BodyView>
    );
  }, [navigation]);

  const userHasStore = useCallback(() => {
    return (
      <ButtonsContainer>
        <Button onPress={() => navigation.navigate('Store')}>
          Editar Loja
        </Button>
        <DeleteButton>Excluir loja</DeleteButton>
      </ButtonsContainer>
    );
  }, [navigation]);

  return (
    <Container>
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
