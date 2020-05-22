import React, { useEffect, useState, useRef, useCallback } from 'react';
import { TouchableOpacity } from 'react-native';
import MapView, { Marker, Callout } from 'react-native-maps';
import Geolocation from '@react-native-community/geolocation';
import { useNavigation, useFocusEffect } from '@react-navigation/native';

import api from '../../services/api';

import {
  Container,
  StoreBanner,
  CalloutView,
  CalloutText,
  CalloutTitle,
  SearchBar,
  SearchResult,
  SearchResultText,
} from './styles';

interface Location {
  latitude: string;
  longitude: string;
}

interface Store {
  id: string;
  name: string;
  banner: string;
  localization: Location;
  open_at: string;
  close_at: string;
  description: string;
}

const Map: React.FC = () => {
  const [stores, setStores] = useState<Store[]>([]);
  const [searchText, setSearchText] = useState('');

  const mapRef = useRef<MapView>(null);

  const navigation = useNavigation();

  useFocusEffect(
    useCallback((): any => {
      api.get('/stores').then(response => {
        setStores(response.data);
      });
    }, []),
  );

  const [region, setRegion] = useState({
    latitude: -15.790649,
    longitude: -47.892885,
    latitudeDelta: 0.02,
    longitudeDelta: 0.02,
  });

  useEffect(() => {
    Geolocation.getCurrentPosition(
      async ({ coords: { latitude, longitude } }) => {
        setRegion({
          latitude,
          longitude,
          latitudeDelta: 0.02,
          longitudeDelta: 0.02,
        });
      }, // sucesso
      () => {
        console.log('Deu erro!');
      }, // erro
      {
        timeout: 2000,
        enableHighAccuracy: true,
        maximumAge: 1000,
      },
    );
  }, []);

  const handleSearchResult = useCallback((store: Store): void => {
    setSearchText('');

    setRegion({
      latitude: parseFloat(store.localization.latitude),
      longitude: parseFloat(store.localization.longitude),
      latitudeDelta: 0.02,
      longitudeDelta: 0.02,
    });
  }, []);

  return (
    <Container>
      <MapView
        style={{ flex: 1 }}
        region={region}
        loadingEnabled
        showsUserLocation
        ref={mapRef}
      >
        {stores.map(store => {
          return (
            <Marker
              key={store.id}
              coordinate={{
                latitude: parseFloat(store.localization.latitude),
                longitude: parseFloat(store.localization.longitude),
              }}
              anchor={{ x: 0, y: 0 }}
            >
              <StoreBanner
                source={{
                  uri: `https://corpus.serveo.net/${store.banner}`,
                  // uri: `http://localhost:3333/files/${store.banner}`
                }}
              />

              <Callout
                onPress={() => {
                  navigation.navigate('StoreDetail', { storeId: store.id });
                }}
              >
                <CalloutView>
                  <CalloutTitle>{store.name}</CalloutTitle>
                  <CalloutText>{store.description}</CalloutText>
                  <CalloutText style={{ marginTop: 10 }}>
                    {`Aberto das ${store.open_at} ás ${store.close_at}`}
                  </CalloutText>
                </CalloutView>
              </Callout>
            </Marker>
          );
        })}
      </MapView>

      <SearchBar
        placeholder="Pesquisar loja"
        onChangeText={setSearchText}
        value={searchText}
      />
      {searchText !== '' && (
        <SearchResult>
          {stores
            .filter(store =>
              store.name.toUpperCase().includes(searchText.toUpperCase()),
            )
            .map(store => (
              <TouchableOpacity
                key={store.id}
                onPress={() => handleSearchResult(store)}
              >
                <SearchResultText>{store.name}</SearchResultText>
              </TouchableOpacity>
            ))}
        </SearchResult>
      )}
    </Container>
  );
};

export default Map;
