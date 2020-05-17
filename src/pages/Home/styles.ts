import styled from 'styled-components/native';
import FastImage from 'react-native-fast-image';
import { metrics, fonts } from '../../styles';
import { PLANTIO } from '../../assets/images';

export const Container = styled.View`
  flex: 1;
`;

export const HeaderCarrossel = styled.View`
  margin-bottom: ${metrics.PADDING_SCREEN * 2}px;
  margin-top: ${metrics.PADDING_SCREEN * 0.7}px;
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
  border-radius: 10px;
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
