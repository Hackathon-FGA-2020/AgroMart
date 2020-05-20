import React, { useState, useEffect } from 'react';
import { ScrollView, TouchableOpacity } from 'react-native';
import Carousel, { Pagination } from 'react-native-snap-carousel';

import api from '../../services/api';

import { CARROUSEL1, CARROUSEL2, CARROUSEL3 } from '../../assets/images';
import { metrics } from '../../styles';

import StoreCard from '../../components/StoreCard';

import {
  Container,
  HeaderCarrossel,
  HeaderProfile,
  PictureProfile,
  TitleProfile,
  PictureCarrousel,
  StoresContainer,
} from './styles';

const _renderItem: any = ({ item }) => {
  return <PictureCarrousel image={item} />;
};

interface Store {
  id: string;
  name: string;
  city: string;
  banner: string;
}

const Home: React.FC = () => {
  const [indexPagination, setIndexPagination] = useState(0);
  const [stores, setStores] = useState<Store[]>([]);

  useEffect(() => {
    async function getStores(): Promise<void> {
      const response = await api.get('/stores');

      setStores(response.data);
    }

    getStores();
  }, []);

  return (
    <Container>
      <TouchableOpacity>
        <HeaderProfile>
          <PictureProfile />
          <TitleProfile>Ola, Caio</TitleProfile>
        </HeaderProfile>
      </TouchableOpacity>

      <ScrollView>
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

        <StoresContainer>
          {stores.map(store => (
            <StoreCard
              key={store.id}
              id={store.id}
              name={store.name}
              city={store.city}
              bannerUrl={store.banner}
            />
          ))}
        </StoresContainer>
      </ScrollView>
    </Container>
  );
};

export default Home;
