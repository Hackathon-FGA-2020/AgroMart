import styled from 'styled-components/native';
import FastImage from 'react-native-fast-image';
import { StyleSheet } from 'react-native';
import { STORE_PICTURE_DEFAULT } from '../../assets/images';
import { metrics, fonts } from '../../styles';

export const Container = styled.ScrollView``;
export const ContainerForm = styled.View`
  padding: 20px;
`;

export const PictureStore = styled<any>(FastImage).attrs(props => ({
  resizeMode: FastImage.resizeMode.cover,
  source: props.image ? { uri: props.image.uri } : STORE_PICTURE_DEFAULT,
}))`
  height: ${metrics.PADDING_SCREEN * 10}px;
  align-self: stretch;
  margin-bottom: ${metrics.PADDING_SCREEN}px;
`;

export const DropDownButton = styled.View`
  border: #bfc6c5;
  border-radius: 10px;
  align-self: stretch;
  padding: 0 10px;
`;
export const TextLabel = styled.Text`
  font-size: 20px;
  padding: 5px;
  font-family: MontserratAlternates-Regular;
`;

export const ButtonPicture = styled.TouchableOpacity``;

export default StyleSheet.create({
  inputAndroid: {
    backgroundColor: 'white',
    fontSize: fonts.SMALL,
    color: '#000',
    height: 45,
    width: '100%',
  },
  inputIOS: {
    backgroundColor: 'white',
    fontSize: fonts.EXTRA_SMALL,
    color: '#000',
    height: 45,
    width: '100%',
  },
  iconContainer: {
    top: 10,
    right: 5,
  },
  placeholder: {
    color: '#a0a0a0',
  },
});
