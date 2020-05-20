import styled from 'styled-components/native';
import FastImage, { FastImageProps } from 'react-native-fast-image';
import { metrics, fonts } from '../../styles';
import { PLANTIO, PROFISSAO } from '../../assets/images';

export const Container = styled.ScrollView`
  flex-grow: 1;
`;

export const HeaderCarrossel = styled.View`
  margin-bottom: ${metrics.PADDING_SCREEN * 0.6}px;
`;

export const HeaderProfile = styled.View`
  margin-bottom: ${metrics.PADDING_SCREEN}px;
  margin-top: ${metrics.PADDING_SCREEN * 0.7}px;
  margin-left: ${metrics.PADDING_SCREEN}px;
  margin-right: ${metrics.PADDING_SCREEN * 1.5}px;
  flex-direction: row;
  align-items: center;
`;

export const Card = styled.View.attrs({
  shadowOffset: { height: 0, width: 0 },
  shadowOpacity: 0.5,
  shadowRadius: 3,
  elevation: 7,
})`
  align-self: stretch;
  align-items: center;
  background-color: white;
  border-radius: 5px;
  padding: ${metrics.PADDING_SCREEN * 0.5}px;
  margin-left: ${metrics.PADDING_SCREEN * 1.5}px;
  margin-right: ${metrics.PADDING_SCREEN * 1.5}px;
  margin-bottom: ${metrics.PADDING_SCREEN * 0.7}px;
`;

export const PictureCard = styled(FastImage).attrs({
  resizeMode: FastImage.resizeMode.contain,
  source: PLANTIO,
})`
  align-self: stretch;
  height: ${metrics.PADDING_SCREEN * 6}px;
  margin-bottom: ${metrics.PADDING_SCREEN * 0.5}px;
  border-radius: 5px;
`;

export const TitleCard = styled.Text`
  color: #000;
  font-size: ${fonts.MEDIUM}px;
  align-self: stretch;
`;

export const LocationCard = styled.Text`
  color: #000;
  font-size: ${fonts.SMALL}px;
  align-self: stretch;
`;

export const PictureProfile = styled(FastImage).attrs({
  resizeMode: FastImage.resizeMode.contain,
  source: PROFISSAO,
})`
  border-radius: 5px;
  border: 2px #000;
  height: ${metrics.PADDING_SCREEN * 3}px;
  width: ${metrics.PADDING_SCREEN * 3}px;
  border-radius: ${metrics.PADDING_SCREEN * 1.5}px;
`;

export const PictureCarrousel = styled<any>(FastImage).attrs(props => ({
  resizeMode: FastImage.resizeMode.contain,
  source: props.image,
}))`
  height: ${metrics.PADDING_SCREEN * 7}px;
  align-self: stretch;
`;

export const TitleProfile = styled.Text`
  color: #000;
  font-size: ${fonts.BIG}px;
  margin-left: ${metrics.PADDING_SCREEN * 0.5}px;
  font-family: MontserratAlternates-Regular;
`;
