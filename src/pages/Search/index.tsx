/* eslint-disable @typescript-eslint/no-use-before-define */
import React, { useState, useEffect, useCallback } from 'react';
import { Text, FlatList, ScrollView } from 'react-native';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import { useNavigation } from '@react-navigation/native';
import api from '../../services/api';

import StoreCard from '../../components/StoreCard';

import {
  Container,
  CardCity,
  CityText,
  CardMask,
  CityImage,
  Input,
} from './styles';

interface Store {
  id: string;
  name: string;
  city: string;
  banner: string;
}

const Search: React.FC = () => {
  const navigation = useNavigation();
  const [search, setSearch] = useState('');
  const [results, setResults] = useState([]);

  const handleSearch = useCallback(async () => {
    try {
      const response = await api.get(`stores?name=${search}`);
      setResults(response.data);
    } catch (error) {
      setResults([]);
    }
  }, [search]);

  useEffect(() => {
    handleSearch();
  }, [search, handleSearch]);

  return (
    <Container>
      <Input
        placeholder="Pesquisar"
        autoCorrect={false}
        value={search}
        onChangeText={setSearch}
      />
      {search ? (
        <ScrollView style={{ flex: 1, marginTop: '4%' }}>
          {results.length ? (
            results.map((item: Store) => (
              <StoreCard
                key={item.id}
                id={item.id}
                name={item.name}
                city={item.city}
                bannerUrl={item.banner}
              />
            ))
          ) : (
            <Text style={{ alignSelf: 'center' }}>
              Nenhum resultado encontrado
            </Text>
          )}
        </ScrollView>
      ) : (
        <>
          <FlatList
            data={data}
            renderItem={({ item }) => (
              <CardCity
                onPress={() => navigation.navigate('CitySearchResult', item)}
              >
                <CardMask>
                  <CityText>{item.city}</CityText>
                </CardMask>
                <CityImage source={{ uri: item.urlImage }} />
              </CardCity>
            )}
            horizontal={false}
            keyExtractor={item => item.city}
            numColumns={2}
            key={data.length}
            showsVerticalScrollIndicator={false}
          />
        </>
      )}
    </Container>
  );
};

export default Search;

const data = [
  {
    city: 'Águas Claras',
    urlImage:
      'http://www.df.gov.br/wp-conteudo/uploads/2015/10/19188726255_15b81b1cb1_z.jpg',
  },
  {
    city: 'Brazlândia',
    urlImage:
      'http://www.df.gov.br/wp-conteudo/uploads/2015/10/17780749113_29c65de18b_z.jpg',
  },
  {
    city: 'Candangolândia',
    urlImage:
      'http://www.df.gov.br/wp-conteudo/uploads/2015/10/22691061441_b01ca8e7f9_z.jpg',
  },
  {
    city: 'Ceilândia',
    urlImage:
      'http://www.df.gov.br/wp-conteudo/uploads/2015/10/20151106_154626.jpg',
  },
  {
    city: 'Cruzeiro',
    urlImage:
      'http://www.df.gov.br/wp-conteudo/uploads/2015/10/23074140966_be85840d1b_k.jpg',
  },
  {
    city: 'Fercal',
    urlImage:
      'http://www.df.gov.br/wp-conteudo/uploads/2015/10/12194920_740678216064008_381139833951700417_o.jpg',
  },
  {
    city: 'Gama',
    urlImage:
      'http://www.df.gov.br/wp-conteudo/uploads/2015/10/21838552279_b3d2b98fc6_z.jpg',
  },
  {
    city: 'Guará',
    urlImage:
      'http://www.df.gov.br/wp-conteudo/uploads/2015/10/17323722212_c7874a634e_z.jpg',
  },
  {
    city: 'Itapoã',
    urlImage:
      'http://www.df.gov.br/wp-conteudo/uploads/2015/10/10296008_288176894694064_7551117041702866398_o.jpg',
  },
  {
    city: 'Jardim Botânico',
    urlImage:
      'http://www.df.gov.br/wp-conteudo/uploads/2015/10/3f1e97757a3063c4ed4823d533fdc555_XL.jpg',
  },
  {
    city: 'Lago Norte',
    urlImage:
      'http://www.df.gov.br/wp-conteudo/uploads/2015/10/21531778161_cc8c3d8474_z.jpg',
  },
  {
    city: 'N.Bandeirante',
    urlImage:
      'http://www.df.gov.br/wp-conteudo/uploads/2015/10/19959227340_d5d620c855_z.jpg',
  },
  {
    city: 'Paranoá',
    urlImage: 'http://www.df.gov.br/wp-conteudo/uploads/2015/10/Paranoa-1.jpg',
  },
  {
    city: 'Park Way',
    urlImage: 'http://www.df.gov.br/wp-conteudo/uploads/2015/10/park-way.jpg',
  },
  {
    city: 'Planaltina',
    urlImage: 'http://www.df.gov.br/wp-conteudo/uploads/2015/10/planaltina.jpg',
  },
  {
    city: 'Plano Piloto',
    urlImage:
      'http://www.df.gov.br/wp-conteudo/uploads/2015/10/plano-piloto.jpg',
  },
  {
    city: 'Recanto das Emas',
    urlImage:
      'http://www.df.gov.br/wp-conteudo/uploads/2015/10/recanto-das-emas.jpg',
  },
  {
    city: 'Riacho Fundo I',
    urlImage:
      'http://www.df.gov.br/wp-conteudo/uploads/2015/10/plano-piloto.jpg',
  },
  {
    city: 'Riacho Fundo II',
    urlImage:
      'http://www.df.gov.br/wp-conteudo/uploads/2015/10/riacho-fundo-ii.jpg',
  },
  {
    city: 'Santa Maria',
    urlImage:
      'http://www.df.gov.br/wp-conteudo/uploads/2015/10/12548833_1658877187733260_954761822927745592_n.jpg',
  },
  {
    city: 'Samambaia',
    urlImage: 'http://www.df.gov.br/wp-conteudo/uploads/2015/10/samambaia.jpg',
  },
  {
    city: 'São Sebastião',
    urlImage:
      'http://www.df.gov.br/wp-conteudo/uploads/2015/10/s%C3%A3o-sebasti%C3%A3o.jpg',
  },
  {
    city: 'SCIA/Estrutural',
    urlImage: 'http://www.df.gov.br/wp-conteudo/uploads/2015/10/scia.jpg',
  },
  {
    city: 'SIA',
    urlImage: 'http://www.df.gov.br/wp-conteudo/uploads/2015/10/sia.jpg',
  },
  {
    city: 'Sobradinho',
    urlImage: 'http://www.df.gov.br/wp-conteudo/uploads/2015/10/sobradinho.jpg',
  },
  {
    city: 'Sobradinho II',
    urlImage:
      'http://www.df.gov.br/wp-conteudo/uploads/2015/10/sobradinho-ii.jpg',
  },
  {
    city: 'Taguatinga',
    urlImage: 'http://www.df.gov.br/wp-conteudo/uploads/2015/10/taguatinfa.jpg',
  },
  {
    city: 'Varjão',
    urlImage:
      'http://www.df.gov.br/wp-conteudo/uploads/2015/10/varj%C3%A3o.jpg',
  },
  {
    city: 'Vicente Pires',
    urlImage:
      'http://www.df.gov.br/wp-conteudo/uploads/2015/10/vicente-pires.jpg',
  },
  {
    city: 'Sud. / Oct.',
    urlImage: 'http://www.df.gov.br/wp-conteudo/uploads/2015/10/sudoeste.jpg',
  },
];

export { data };
