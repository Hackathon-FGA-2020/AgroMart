import React, { useState, useCallback, useEffect } from 'react';
import {
  ScrollView,
  TouchableOpacity,
  Linking,
  View,
  Text,
  Platform,
} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { useRoute } from '@react-navigation/native';
import api from '../../services/api';
import { useAuth } from '../../hooks/auth';

import {
  Container,
  ContainerD,
  CustomImage,
  Title,
  Subtitle,
  Divider,
  HeaderRow,
  IconsCircle,
  IconsRow,
  BodyTitle,
  Description,
  SingleProduct,
  ProductText,
  DescriptionView,
  HourText,
  HourView,
} from './styles';

interface StoreProps {
  id: string;
  banner: string;
  name: string;
  city: string;
  contact_number: string;
  description: string;
  open_at: string;
  close_at: string;
  localization: object;
  products: Array<any>;
}

const StoreDetail: React.FC = () => {
  const route = useRoute();
  const { user } = useAuth();
  const [storeInfo, setStoreInfo] = useState({} as StoreProps);

  const getStoreData = useCallback(async () => {
    try {
      const response = await api.get(`stores/${route.params?.storeId}`);
      setStoreInfo(response.data);
    } catch (error) {
      console.log(error);
    }
  }, [route.params]);

  useEffect(() => {
    getStoreData();
  }, [getStoreData]);

  const isLogged = useCallback(async () => {
    if (user === undefined) {
      return false;
    }
    return true;
  }, []);

  const handleWhatsAppMessage = useCallback(async () => {
    await Linking.openURL(
      `https://wa.me/55${storeInfo.contact_number}`,
    ).catch(err => console.log(err));
  }, []);

  const teste = useCallback(async () => {
    const scheme = Platform.OS === 'ios' ? 'maps:' : 'geo:';
    const url = `${scheme}${storeInfo.localization?.latitude},${storeInfo.localization?.longitude}`;
    console.log(storeInfo.localization.latitude);
    Linking.openURL(url);
  }, []);

  const loggedButtons = useCallback(() => {
    return (
      <IconsRow>
        <TouchableOpacity onPress={handleWhatsAppMessage}>
          <IconsCircle>
            <Icon name="whatsapp" size={20} color="#fff" />
          </IconsCircle>
        </TouchableOpacity>
        <TouchableOpacity onPress={teste}>
          <IconsCircle>
            <Icon name="routes" size={20} color="#fff" />
          </IconsCircle>
        </TouchableOpacity>
      </IconsRow>
    );
  }, []);

  return (
    <Container>
      <CustomImage
        source={{
          uri: `http://localhost:3333/files/${storeInfo.banner}`,
        }}
      />
      <ContainerD>
        <HeaderRow>
          <Title>{storeInfo.name}</Title>
          <HourView>
            <HourText>Horário</HourText>
            <HourText>
              {storeInfo.open_at}
-{storeInfo.close_at}
            </HourText>
          </HourView>
        </HeaderRow>
        <HeaderRow>
          <Subtitle>{storeInfo.city}</Subtitle>
          {isLogged ? loggedButtons() : <View />}
        </HeaderRow>
        <Divider />
        <ScrollView>
          <DescriptionView>
            <BodyTitle>Descrição :</BodyTitle>
            <Description>{storeInfo.description}</Description>
          </DescriptionView>
          <DescriptionView>
            <BodyTitle>Produtos :</BodyTitle>
            {storeInfo.products ? (
              storeInfo.products.map((item: any) => (
                <SingleProduct>
                  <ProductText>
                    -
{item.name}
                  </ProductText>
                  <ProductText>
                    $
{item.price}
                  </ProductText>
                </SingleProduct>
              ))
            ) : (
              <Text>Produtos não encontrados</Text>
            )}
          </DescriptionView>
        </ScrollView>
      </ContainerD>
    </Container>
  );
};
export default StoreDetail;
