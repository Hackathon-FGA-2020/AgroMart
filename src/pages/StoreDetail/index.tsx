import React, { useState, useCallback, useEffect } from 'react';
import { ScrollView, TouchableOpacity, Linking } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
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
  ProductName,
  DescriptionView,
} from './styles';

const StoreDetail: React.FC = () => {
  const handleWhatsAppMessage = useCallback(async () => {
    await Linking.openURL(`https://wa.me/5561981796897`).catch(err =>
      console.log(err),
    );
  }, []);

  return (
    <Container>
      <CustomImage
        source={{
          uri:
            'https://lh3.googleusercontent.com/proxy/1dLY00Aw46RsGVuAFTEcwVCO9Y4T3HoTiPPVLFy-MefC8HMuWLewr2DRtSTAOTACONgSThaFj0i8rOj_AvtToVVZjw',
        }}
      />
      <ContainerD>
        <Title>Fazenda Cenourão</Title>
        <HeaderRow>
          <Subtitle>Brazlandia</Subtitle>
          <IconsRow>
            <TouchableOpacity onPress={handleWhatsAppMessage}>
              <IconsCircle>
                <Icon name="whatsapp" size={20} color="#fff" />
              </IconsCircle>
            </TouchableOpacity>
            <IconsCircle>
              <Icon name="routes" size={20} color="#fff" />
            </IconsCircle>
          </IconsRow>
        </HeaderRow>
        <Divider />
        <ScrollView>
          <DescriptionView>
            <BodyTitle>Descrição :</BodyTitle>
            <Description>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            </Description>
          </DescriptionView>
          <DescriptionView>
            <BodyTitle>Produtos :</BodyTitle>
            <SingleProduct>
              <ProductName>- Alface</ProductName>
              <ProductName>$10</ProductName>
            </SingleProduct>
          </DescriptionView>
        </ScrollView>
      </ContainerD>
    </Container>
  );
};
export default StoreDetail;
