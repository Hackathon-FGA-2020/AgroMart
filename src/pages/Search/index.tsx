import React, { useState } from 'react';
import { Image, View } from 'react-native';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

import Input from '../../components/Input';

import {
  Container,
  CardsContainer,
  CardCity,
  CityText,
  CardMask,
} from './styles';

const data = [
  {
    city: 'sudoeste',
    urlImage:
      'https://lh3.googleusercontent.com/proxy/KAtcAXDyncv7k4AYTOlMxfVYtgWpjdHGgNyXD5YMYWh6VU6XZlO5F_lhcDaL5-0nxsPJNiytzzOxg9PvvpBNGk6nPb80Lxd8cplT7TPhzS8Jeg6OSub19kIS1xAFGcd_VVIk0CiS',
  },
  {
    city: 'cruzeiro',
    urlImage:
      'https://lh3.googleusercontent.com/proxy/KAtcAXDyncv7k4AYTOlMxfVYtgWpjdHGgNyXD5YMYWh6VU6XZlO5F_lhcDaL5-0nxsPJNiytzzOxg9PvvpBNGk6nPb80Lxd8cplT7TPhzS8Jeg6OSub19kIS1xAFGcd_VVIk0CiS',
  },
  {
    city: 'octogonal',
    urlImage:
      'https://lh3.googleusercontent.com/proxy/KAtcAXDyncv7k4AYTOlMxfVYtgWpjdHGgNyXD5YMYWh6VU6XZlO5F_lhcDaL5-0nxsPJNiytzzOxg9PvvpBNGk6nPb80Lxd8cplT7TPhzS8Jeg6OSub19kIS1xAFGcd_VVIk0CiS',
  },
  {
    city: 'asa norte',
    urlImage:
      'https://lh3.googleusercontent.com/proxy/KAtcAXDyncv7k4AYTOlMxfVYtgWpjdHGgNyXD5YMYWh6VU6XZlO5F_lhcDaL5-0nxsPJNiytzzOxg9PvvpBNGk6nPb80Lxd8cplT7TPhzS8Jeg6OSub19kIS1xAFGcd_VVIk0CiS',
  },
];

const Search: React.FC = () => {
  const [search, setSearch] = useState('');
  return (
    <Container>
      <Input
        placeholder="Pesquisar"
        autoCorrect={false}
        value={search}
        onChangeText={setSearch}
        icon={<MaterialIcons name="search" color="#9f9f9f" size={20} />}
      />
      <CardsContainer>
        {data.map(item => (
          <CardCity>
            <CardMask>
              <CityText>{item.city}</CityText>
            </CardMask>
            <Image
              source={{ uri: item.urlImage }}
              style={{ width: 160, height: 160 }}
            />
          </CardCity>
        ))}
      </CardsContainer>
    </Container>
  );
};

export default Search;
