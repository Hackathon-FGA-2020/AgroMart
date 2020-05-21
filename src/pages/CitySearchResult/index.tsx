import React, { useState, useEffect, useCallback } from 'react';
import { Text, ScrollView } from 'react-native';
import { useRoute } from '@react-navigation/native';
import api from '../../services/api';

import StoreCard from '../../components/StoreCard';

import { Container } from './styles';

interface Store {
  id: string;
  name: string;
  city: string;
  banner: string;
}

const CitySearchResult: React.FC = () => {
  const route = useRoute();
  const [results, setResults] = useState([]);

  const handleSearch = useCallback(async () => {
    try {
      const response = await api.get(`stores?city=${route.params?.city}`);
      setResults(response.data);
    } catch (error) {
      setResults([]);
    }
  }, [route.params]);

  useEffect(() => {
    handleSearch();
  }, [handleSearch]);

  return (
    <Container>
      <ScrollView style={{ marginTop: '4%' }}>
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
          <Text>Nenhum resultado encontrado</Text>
        )}
      </ScrollView>
    </Container>
  );
};

export default CitySearchResult;
