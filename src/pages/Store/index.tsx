import React, { useState, useCallback, useEffect } from 'react';
import RNPickerSelect from 'react-native-picker-select';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import ImagePicker, { ImagePickerOptions } from 'react-native-image-picker';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { Alert } from 'react-native';
import api from '../../services/api';
import { data as dataCity } from '../Search';
import Button from '../../components/Button';

import Styles, {
  Container,
  PictureStore,
  ContainerForm,
  DropDownButton,
  TextLabel,
  ButtonPicture,
  AnimationCircule,
} from './styles';
import Input from '../../components/Input';

const Store: React.FC = () => {
  const [citys, setCitys] = useState({ label: '', value: '' });
  const [picture, setPicture] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const cityPicker = dataCity.map(city => {
      return { label: city.city, value: city.city };
    });
    setCitys(cityPicker);
  }, []);

  const handleSubmit = useCallback(async data => {
    console.log(data);
  }, []);

  const SCHEMA = Yup.object().shape({
    name: Yup.string().required(),
    description: Yup.string().required(),
    contact: Yup.string().required(),
    city: Yup.string().required(),
  });

  const formik = useFormik({
    initialValues: {
      name: '',
      description: '',
      contact: '',
      city: '',
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
      setPicture({
        uri: response.uri,
        type: response.type,
        name: fileName,
        data: response.data,
        path: response.path,
      });
    });
  }, [picture, optionsImagePicker]);

  return (
    <Container>
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
          value={formik.values.contact}
          onChangeText={formik.handleChange('contact')}
        />

        <TextLabel>Cidade</TextLabel>
        <DropDownButton>
          <RNPickerSelect
            style={{ ...Styles }}
            useNativeAndroidPickerStyle={false}
            Icon={() => (
              <MaterialIcons name="arrow-drop-down" size={30} color="#19A28F" />
            )}
            onValueChange={e => formik.setFieldValue('city', e)}
            placeholder={{
              label: 'Selecione uma cidade',
              value: null,
            }}
            items={citys}
          />
        </DropDownButton>
        <Button onPress={formik.submitForm}>
          {loading ? <AnimationCircule /> : 'Cadastrar'}
        </Button>
      </ContainerForm>
    </Container>
  );
};

export default Store;
