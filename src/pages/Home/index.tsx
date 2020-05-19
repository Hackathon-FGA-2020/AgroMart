import React, { useState, useRef } from 'react';
import Carousel, { Pagination } from 'react-native-snap-carousel';
import { Dimensions } from 'react-native';
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
} from './styles';
import { metrics, fonts } from '../../styles';

const _renderItem = ({ item, index }) => {
  return <PictureCard key={index} />;
};

const Home: React.FC = () => {
  const [indexPagination, setIndexPagination] = useState<number>(0);
  return (
    <Container>
      <HeaderProfile>
        <PictureProfile />
        <TitleProfile>Ola, Caio</TitleProfile>
      </HeaderProfile>
      <HeaderCarrossel>
        <Carousel
          data={[1, 2, 3]}
          renderItem={_renderItem}
          onSnapToItem={index => setIndexPagination(index)}
          sliderWidth={metrics.SCREEN_WIDTH}
          itemWidth={300}
          useScrollView
        />
        <Pagination
          dotsLength={3}
          activeDotIndex={indexPagination}
          containerStyle={{
            paddingVertical: 0,
          }}
          dotStyle={{
            width: 10,
            height: 10,
            borderRadius: 5,
            backgroundColor: '#00AA95',
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
