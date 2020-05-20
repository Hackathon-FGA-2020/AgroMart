import styled from 'styled-components/native';
import FastImage from 'react-native-fast-image';
import { metrics, fonts } from '../../styles';
import { PROFISSAO } from '../../assets/images';

export const Container = styled.View`
  flex: 1;
`;

export const HeaderProfile = styled.View`
  padding-bottom: ${metrics.PADDING_SCREEN * 0.5}px;
  padding-top: ${metrics.PADDING_SCREEN * 0.5}px;
  padding-left: ${metrics.PADDING_SCREEN}px;
  flex-direction: row;
  align-items: center;
  background-color: #fff;
  border-bottom-width: 2px;
  border-bottom-color: #b4b4b4;
`;

export const PictureProfile = styled(FastImage).attrs({
  resizeMode: FastImage.resizeMode.contain,
  source: PROFISSAO,
})`
  border-radius: 5px;
  border: 2px #000;
  height: ${metrics.PADDING_SCREEN * 2.8}px;
  width: ${metrics.PADDING_SCREEN * 2.8}px;
  border-radius: ${metrics.PADDING_SCREEN * 1.5}px;
`;

export const TitleProfile = styled.Text`
  color: #000;
  font-size: ${fonts.BIG}px;
  margin-left: ${metrics.PADDING_SCREEN * 0.5}px;
  font-family: MontserratAlternates-Regular;
`;

export const HeaderCarrossel = styled.View`
  margin-bottom: ${metrics.PADDING_SCREEN * 0.25}px;
`;

export const PictureCarrousel = styled<any>(FastImage).attrs(props => ({
  resizeMode: FastImage.resizeMode.cover,
  source: props.image,
}))`
  height: ${metrics.PADDING_SCREEN * 7}px;
  align-self: stretch;
  border-bottom-width: 2px;
  border-bottom-color: #b4b4b4;
`;

export const StoresContainer = styled.View`
  flex: 1;
`;
