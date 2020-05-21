import React, { useState, useCallback } from 'react';
import RNPickerSelect from 'react-native-picker-select';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import ImagePicker, { ImagePickerOptions } from 'react-native-image-picker';

import Styles, {
  Container,
  PictureStore,
  ContainerForm,
  DropDownButton,
  TextLabel,
  ButtonPicture,
} from './styles';
import Input from '../../components/Input';

const Store: React.FC = () => {
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [city, setCity] = useState('');
  const [picture, setPicture] = useState(null);

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
          value={name}
          onChangeText={setName}
        />
        <Input
          label="Descrição"
          placeholder="Descrição"
          autoCorrect={false}
          value={description}
          onChangeText={setDescription}
        />
        <Input
          label="Contato"
          placeholder="Contato"
          autoCorrect={false}
          value={phoneNumber}
          onChangeText={setPhoneNumber}
        />

        <TextLabel>Cidade</TextLabel>
        <DropDownButton>
          <RNPickerSelect
            style={{ ...Styles }}
            useNativeAndroidPickerStyle={false}
            Icon={() => (
              <MaterialIcons name="arrow-drop-down" size={30} color="#19A28F" />
            )}
            onValueChange={e => setCity(e)}
            placeholder={{
              label: 'Selecione uma cidade',
              value: null,
            }}
            items={[
              {
                label: 'Masculino',
                value: 'M',
              },
              {
                label: 'Feminino',
                value: 'F',
              },
              {
                label: 'Outro/Nao quero informar',
                value: 'U',
              },
            ]}
          />
        </DropDownButton>
      </ContainerForm>
    </Container>
  );
};

export default Store;
