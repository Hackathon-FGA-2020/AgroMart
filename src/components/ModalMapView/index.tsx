import React, { useState, useEffect, useCallback } from 'react';
import Ionicons from 'react-native-vector-icons/Ionicons';
import MapView, { Marker } from 'react-native-maps';
import Geolocation from '@react-native-community/geolocation';

import {
  Modal,
  Container,
  ButtonClose,
  ContainerClose,
  ButtonConfirm,
  ButtonTextConfirm,
} from './styles';

function ModalMapView({
  visibleModalMapView,
  handleModalMapView,
  setMarkerLocationStore,
}) {
  const [markerLocation, setMarkerLocation] = useState(null);

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

  const locationDefine = useCallback(response => {
    const { coordinate } = response.nativeEvent;
    setMarkerLocation(coordinate);
    setRegion({
      latitude: coordinate.latitude,
      longitude: coordinate.longitude,
      latitudeDelta: 0.02,
      longitudeDelta: 0.02,
    });
  }, []);

  const onPressConfirm = () => {
    setMarkerLocationStore(markerLocation);
    handleModalMapView();
  };

  return (
    <Modal
      animationIn="zoomIn"
      animationOut="zoomOut"
      isVisible={visibleModalMapView}
      onBackButtonPress={handleModalMapView}
      onSwipeComplete={handleModalMapView}
    >
      <ContainerClose>
        <ButtonClose onPress={handleModalMapView}>
          <Ionicons
            name="md-close-circle-outline"
            size={34}
            style={{ color: 'white' }}
          />
        </ButtonClose>
      </ContainerClose>

      <Container>
        <MapView
          style={{ height: '95%', width: '95%', borderRadius: 20 }}
          region={region}
          loadingEnabled
          showsUserLocation
          onPress={locationDefine}
        >
          {markerLocation && (
            <Marker coordinate={markerLocation} anchor={{ x: 0, y: 0 }} />
          )}
        </MapView>
        {markerLocation && (
          <ButtonConfirm onPress={onPressConfirm}>
            <ButtonTextConfirm>Confirmar</ButtonTextConfirm>
          </ButtonConfirm>
        )}
      </Container>
    </Modal>
  );
}

export default ModalMapView;
