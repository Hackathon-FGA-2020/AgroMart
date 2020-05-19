import styled from 'styled-components/native';
import FastImage from 'react-native-fast-image';
import { metrics, fonts } from '../../styles';
import { PLANTIO, PROFISSAO } from '../../assets/images';

export const Container = styled.View`
  justify-content: center;
  flex: 1;
  padding: ${metrics.PADDING_SCREEN * 1.5}px;
`;

export const Title = styled.Text`
  font-size: 24px;
  font-family: MontserratAlternates-Regular;
  margin-bottom: 10px;
`;

export const BodyText = styled.Text`
  font-size: 20px;
  font-family: MontserratAlternates-Regular;
`;

export const BodyView = styled.View`
  padding-top: 40px;
`;

export const PictureProfile = styled(FastImage).attrs({
  resizeMode: FastImage.resizeMode.contain,
  source: PROFISSAO,
})`
  border-radius: 5px;
  border: 2px #000;
  height: ${metrics.PADDING_SCREEN * 5}px;
  width: ${metrics.PADDING_SCREEN * 5}px;
  border-radius: ${metrics.PADDING_SCREEN * 3.5}px;
`;

export const ButtonsContainer = styled.View`
  margin-top: 30px;
`;
