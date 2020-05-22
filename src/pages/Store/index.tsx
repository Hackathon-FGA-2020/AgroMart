import React, { useState, useCallback, useEffect } from 'react';
import RNPickerSelect from 'react-native-picker-select';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import ImagePicker, { ImagePickerOptions } from 'react-native-image-picker';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { Alert, View } from 'react-native';
import MapView, { Marker } from 'react-native-maps';
import DateTimePicker from '@react-native-community/datetimepicker';
import { format } from 'date-fns';
import { useNavigation } from '@react-navigation/native';

import api from '../../services/api';
import { data as dataCity } from '../Search';

import Button from '../../components/Button';
import ModalProduct from '../../components/ModalProduct';
import ModalMapView from '../../components/ModalMapView';
import ArrowBackComponent from '../../components/ArrowBackComponent';

import Styles, {
  Container,
  PictureStore,
  ContainerForm,
  DropDownButton,
  TextLabel,
  ButtonPicture,
  AnimationCircule,
  ContainerProduct,
  ButtonProduct,
  ProductItem,
  DeleteProduct,
  ButtonLocation,
  TextButtonLocation,
  ButtonStoreTime,
  TextStoreTime,
} from './styles';
import Input from '../../components/Input';

const Store: React.FC = () => {
  const [citys, setCitys] = useState({ label: '', value: '' });
  const [picture, setPicture] = useState(null);
  const [loading, setLoading] = useState(false);
  const [products, setProducts] = useState([]);
  const [visibleModal, setVisibleModal] = useState(false);
  const [visibleModalMapView, setVisibleModalMapView] = useState(false);
  const [markerLocation, setMarkerLocation] = useState(null);
  const [showTimePickerOpen, setShowTimePickerOpen] = useState(false);
  const [showTimePickerClose, setShowTimePickerClose] = useState(false);

  const [timeOpen, setTimeOpen] = useState('');
  const [timeClose, setTimeClose] = useState('');

  const navigation = useNavigation();

  useEffect(() => {
    const cityPicker = dataCity.map(city => {
      return { label: city.city, value: city.city };
    });
    setCitys(cityPicker);
  }, []);

  const handleSubmit = useCallback(
    async data => {
      const body = {
        ...data,
        localization: {
          latitude: String(markerLocation.latitude),
          longitude: String(markerLocation.longitude),
          address: '',
        },
        products,
      };

      try {
        await api.post('/stores', body);

        Alert.alert('Loja cadastrada', 'Sua loja foi criada com sucesso');
        navigation.goBack();
      } catch (err) {
        console.log(err);
        Alert.alert(
          'Loja não cadastrada',
          'Verifique se preencheu os campos corretamente!',
        );
      }
    },
    [markerLocation, products],
  );

  const SCHEMA = Yup.object().shape({
    name: Yup.string().required(),
    description: Yup.string().required(),
    contact_number: Yup.string().required(),
    city: Yup.string().required(),
    open_at: Yup.string().required(),
    close_at: Yup.string().required(),
  });

  const formik = useFormik({
    initialValues: {
      banner: '',
      name: '',
      description: '',
      contact_number: '',
      city: '',
      open_at: '',
      close_at: '',
    },
    enableReinitialize: true,
    validationSchema: SCHEMA,
    onSubmit: handleSubmit,
  });

  const optionsImagePicker: ImagePickerOptions = {
    title: 'Selecionae uma foto',
    cancelButtonTitle: 'Cancelar',
    takePhotoButtonTitle: 'Tirar uma foto',
    chooseFromLibraryButtonTitle: 'Escolhar uma foto da galeria',
    mediaType: 'photo',
    // customButtons: [{ name: 'removePhoto', title: i18n.t('buttons.imagePicker.removePhoto') }],
    storageOptions: {
      skipBackup: true,
    },
  };

  const takePicture = useCallback(() => {
    ImagePicker.showImagePicker(optionsImagePicker, response => {
      if (response.didCancel || response.error) {
        return;
      }

      if (response.customButton) {
        setPicture(null);
        return;
      }

      const { fileName } = response;
      const image = {
        uri: response.uri,
        type: response.type,
        name: fileName,
        data: response.data,
      };

      setPicture(image);

      const body = new FormData();
      body.append('file', {
        uri: image.uri,
        type: image.type,
        name: image.name,
      });

      api
        .post('/files', body)
        .then(res => formik.setFieldValue('banner', res.data.filename))
        .catch(err => console.log(err));
    });
  }, [picture, optionsImagePicker]);

  const handleModal = useCallback(() => {
    setVisibleModal(!visibleModal);
  }, [visibleModal]);

  const handleModalMapView = useCallback(() => {
    setVisibleModalMapView(!visibleModalMapView);
  }, [visibleModalMapView]);

  const addProduct = useCallback(
    product => {
      setProducts([...products, { name: product.name, price: product.price }]);
      handleModal();
    },
    [products],
  );

  const deleteProducts = useCallback(
    id => {
      products.splice(id, 1);
      setProducts([...products]);
    },
    [products],
  );

  const onChangeOpen = (event, selectedDate) => {
    if (selectedDate) {
      const time = format(selectedDate, 'HH:mm');
      console.log(time);
      setShowTimePickerOpen(!showTimePickerOpen);
      setTimeOpen(time);
      formik.setFieldValue('open_at', time);
    }
  };

  const onChangeClose = (event, selectedDate) => {
    if (selectedDate) {
      const time = format(selectedDate, 'HH:mm');
      setShowTimePickerClose(!showTimePickerClose);
      setTimeClose(time);
      formik.setFieldValue('close_at', time);
    }
  };

  return (
    <Container>
      <ArrowBackComponent />
      <ButtonPicture<any> onPress={takePicture}>
        <PictureStore image={picture} />
      </ButtonPicture>
      <ContainerForm>
        <Input
          label="Nome"
          placeholder="Nome"
          autoCorrect={false}
          value={formik.values.name}
          onChangeText={formik.handleChange('name')}
        />
        <Input
          label="Descrição"
          placeholder="Descrição"
          autoCorrect={false}
          value={formik.values.description}
          onChangeText={formik.handleChange('description')}
        />
        <Input
          label="Contato"
          placeholder="Contato"
          autoCorrect={false}
          keyboardType="number-pad"
          value={formik.values.contact_number}
          onChangeText={formik.handleChange('contact_number')}
        />

        <TextLabel>Cidade</TextLabel>
        <DropDownButton>
          <RNPickerSelect
            style={{ ...Styles }}
            useNativeAndroidPickerStyle={false}
            Icon={() => (
              <MaterialIcons name="arrow-drop-down" size={30} color="#00AA95" />
            )}
            onValueChange={e => formik.setFieldValue('city', e)}
            placeholder={{
              label: 'Selecione uma cidade',
              value: null,
            }}
            items={citys}
          />
        </DropDownButton>
        {markerLocation && (
          <View>
            <MapView
              style={{ height: 200, width: '100%', marginTop: 25 }}
              region={{
                latitude: markerLocation.latitude,
                longitude: markerLocation.longitude,
                latitudeDelta: 0.005,
                longitudeDelta: 0.005,
              }}
              loadingEnabled
              zoomEnabled={false}
              zoomTapEnabled={false}
              zoomControlEnabled={false}
              rotateEnabled={false}
              scrollEnabled={false}
            >
              <Marker
                coordinate={{
                  latitude: markerLocation.latitude,
                  longitude: markerLocation.longitude,
                }}
                anchor={{ x: 0, y: 0 }}
              />
            </MapView>
          </View>
        )}
        <ButtonLocation onPress={handleModalMapView}>
          <TextButtonLocation>
            {markerLocation ? 'Editar ' : 'Inserir '}
            localização da loja
          </TextButtonLocation>
        </ButtonLocation>

        <TextLabel>Horário de abertura</TextLabel>
        <ButtonStoreTime
          onPress={() => setShowTimePickerOpen(!showTimePickerOpen)}
        >
          <TextStoreTime>
            {timeOpen || 'Inserir horário de abertura'}
          </TextStoreTime>
        </ButtonStoreTime>

        <TextLabel>Horário de fechamento</TextLabel>
        <ButtonStoreTime
          onPress={() => setShowTimePickerClose(!showTimePickerClose)}
        >
          <TextStoreTime>
            {timeClose || 'Inserir horário de fechamento'}
          </TextStoreTime>
        </ButtonStoreTime>

        {showTimePickerOpen && (
          <DateTimePicker
            testID="dateTimePicker"
            timeZoneOffsetInMinutes={0}
            mode="time"
            is24Hour
            display="default"
            onChange={onChangeOpen}
            value={new Date()}
          />
        )}

        {showTimePickerClose && (
          <DateTimePicker
            testID="dateTimePicker"
            timeZoneOffsetInMinutes={0}
            mode="time"
            is24Hour
            display="default"
            onChange={onChangeClose}
            value={new Date()}
          />
        )}

        <ContainerProduct>
          <TextLabel>Produtos</TextLabel>
          <ButtonProduct onPress={() => setVisibleModal(!visibleModal)}>
            <MaterialIcons
              name="add-circle-outline"
              size={30}
              color="#00AA95"
            />
          </ButtonProduct>
        </ContainerProduct>
        {products &&
          products.map((item, index) => {
            return (
              <ProductItem key={index}>
                <TextLabel style={{ flex: 1 }}>{item.name}</TextLabel>
                <>
                  <TextLabel>
                    R$
                    {item.price}
                  </TextLabel>
                  <DeleteProduct onPress={() => deleteProducts(index)}>
                    <MaterialIcons
                      name="remove-circle-outline"
                      size={30}
                      color="#FF0000"
                    />
                  </DeleteProduct>
                </>
              </ProductItem>
            );
          })}

        <Button onPress={formik.submitForm}>
          {loading ? <AnimationCircule /> : 'Criar loja'}
        </Button>
        <ModalProduct
          visibleModal={visibleModal}
          handleModal={handleModal}
          addProduct={addProduct}
        />
        <ModalMapView
          visibleModalMapView={visibleModalMapView}
          handleModalMapView={handleModalMapView}
          setMarkerLocationStore={setMarkerLocation}
        />
      </ContainerForm>
    </Container>
  );
};

export default Store;
