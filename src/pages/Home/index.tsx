import React, { useState, useRef } from 'react';
import Carousel, { Pagination } from 'react-native-snap-carousel';
import { CARROUSEL1, CARROUSEL2, CARROUSEL3 } from '../../assets/images';

import {
  Container,
  Card,
  PictureCard,
  TitleCard,
  LocationCard,
  HeaderCarrossel,
  HeaderProfile,
  PictureProfile,
  TitleProfile,
  PictureCarrousel,
} from './styles';
import { metrics } from '../../styles';

const _renderItem: any = ({ item }) => {
  return <PictureCarrousel image={item} />;
};

const Home: React.FC = () => {
  const [indexPagination, setIndexPagination] = useState(0);
  return (
    <Container showsVerticalScrollIndicator={false}>
      <HeaderProfile>
        <PictureProfile />
        <TitleProfile>Ola, Caio</TitleProfile>
      </HeaderProfile>
      <HeaderCarrossel>
        <Carousel
          data={[CARROUSEL1, CARROUSEL2, CARROUSEL3]}
          renderItem={_renderItem}
          onSnapToItem={index => setIndexPagination(index)}
          sliderWidth={metrics.SCREEN_WIDTH}
          itemWidth={metrics.SCREEN_WIDTH}
          useScrollView
        />
        <Pagination
          dotsLength={3}
          activeDotIndex={indexPagination}
          containerStyle={{
            paddingVertical: 0,
            top: -20,
          }}
          dotStyle={{
            width: 10,
            height: 10,
            borderRadius: 5,
            borderColor: '#000',
            backgroundColor: '#000',
          }}
          inactiveDotOpacity={0.4}
          inactiveDotScale={0.6}
        />
      </HeaderCarrossel>
      <Card>
        <PictureCard />
        <TitleCard>Fazenda do Alface roxo</TitleCard>
        <LocationCard>Brazlândia</LocationCard>
      </Card>
      <Card>
        <PictureCard />
        <TitleCard>Fazenda do Alface roxo</TitleCard>
        <LocationCard>Brazlândia</LocationCard>
      </Card>
    </Container>
  );
};

export default Home;
