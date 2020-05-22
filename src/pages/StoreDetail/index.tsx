import React, { useState, useCallback, useEffect } from 'react';
import { Linking, Platform, Alert } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { useRoute } from '@react-navigation/native';

import api from '../../services/api';
import { useAuth } from '../../hooks/auth';

import {
  Container,
  Content,
  CustomImage,
  Header,
  Title,
  RowView,
  ContentText,
  IconView,
  Body,
  SubTitle,
} from './styles';

interface Location {
  latitude: string;
  longitude: string;
}

interface Product {
  price: number;
  name: string;
}

interface StoreProps {
  id: string;
  banner: string;
  name: string;
  city: string;
  contact_number: string;
  description: string;
  open_at: string;
  close_at: string;
  localization: Location;
  products: Product[];
}

const StoreDetail: React.FC = () => {
  const [storeInfo, setStoreInfo] = useState({} as StoreProps);

  const { user } = useAuth();
  const { params } = useRoute();

  useEffect(() => {
    async function getStoreData(): Promise<void> {
      try {
        const response = await api.get(`stores/${params?.storeId}`);
        setStoreInfo(response.data);
      } catch (error) {
        console.log(error);
      }
    }

    getStoreData();
  }, [params]);

  const handleWhatsAppMessage = useCallback(
    async (phoneNumber: string): Promise<void> => {
      await Linking.openURL(`https://wa.me/55${phoneNumber}`).catch(err =>
        console.log(err),
      );
    },
    [],
  );

  const handleOpenMap = useCallback(async (location: Location): Promise<
    void
  > => {
    const scheme = Platform.OS === 'ios' ? 'maps:0,0?q=' : 'geo:0,0?q=';
    const url = `${scheme}${location.latitude},${location.longitude}`;

    Linking.openURL(url).catch(err => console.log(err));
  }, []);

  return (
    <Container>
      <CustomImage
        source={{
          // uri: `http://10.0.2.2:3333/files/${storeInfo.banner}`,
          uri: `http://localhost:3333/files/${storeInfo.banner}`,
        }}
      />
      <Content>
        <Header>
          <Title>{storeInfo.name}</Title>
          <RowView>
            <ContentText>{storeInfo.city}</ContentText>
            <RowView>
              <IconView
                onPress={() =>
                  user
                    ? handleWhatsAppMessage(storeInfo.contact_number)
                    : Alert.alert(
                        'Sem permissão',
                        'Faça login para visualizar essa informação',
                      )
                }
              >
                <Icon name="whatsapp" size={23} color="#fff" />
              </IconView>
              <IconView onPress={() => handleOpenMap(storeInfo.localization)}>
                <Icon name="routes" size={23} color="#fff" />
              </IconView>
            </RowView>
          </RowView>
        </Header>

        <Body contentContainerStyle={{ flex: 1 }}>
          <SubTitle>Descrição</SubTitle>
          <ContentText>{storeInfo.description}</ContentText>
          <ContentText>{`Abre das ${storeInfo.open_at} ás ${storeInfo.close_at}`}</ContentText>

          <SubTitle>Produtos</SubTitle>
          {storeInfo.products &&
            storeInfo.products.map(product => (
              <RowView key={product.name}>
                <ContentText>{`- ${product.name}`}</ContentText>
                <ContentText>{`R$ ${product.price}`}</ContentText>
              </RowView>
            ))}
        </Body>
      </Content>
    </Container>
  );
};
export default StoreDetail;
