import React, { useState } from 'react';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Input from '../Input';

import {
  Modal,
  Container,
  ButtonClose,
  ContainerClose,
  LinearGradientButton,
  ButtonText,
  ButtonProduct,
  TitleModal,
} from './styles';

function ModalProduct({ visibleModal, handleModal, addProduct }) {
  const [name, setName] = useState('');
  const [price, setPrice] = useState('');

  const handleModalStore = () => {
    handleModal();
    setName('');
    setPrice('');
  };

  const addProductStore = () => {
    addProduct({ name, price });
    handleModalStore();
  };

  return (
    <Modal
      animationIn="zoomIn"
      animationOut="zoomOut"
      isVisible={visibleModal}
      onBackButtonPress={handleModal}
      onSwipeComplete={handleModal}
    >
      <ContainerClose>
        <ButtonClose onPress={handleModalStore}>
          <Ionicons
            name="md-close-circle-outline"
            size={34}
            style={{ color: 'white' }}
          />
        </ButtonClose>
      </ContainerClose>

      <Container>
        <TitleModal>Novo produto</TitleModal>
        <Input
          placeholder="Produto"
          autoCorrect={false}
          value={name}
          onChangeText={setName}
        />
        <Input
          placeholder="Preço"
          autoCorrect={false}
          keyboardType="number-pad"
          value={price}
          onChangeText={setPrice}
        />
        <LinearGradientButton>
          <ButtonProduct onPress={addProductStore}>
            <ButtonText>Criar produto</ButtonText>
          </ButtonProduct>
        </LinearGradientButton>
      </Container>
    </Modal>
  );
}

export default ModalProduct;
