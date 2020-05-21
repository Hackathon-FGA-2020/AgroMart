import { RectButton } from 'react-native-gesture-handler';
import RNModal from 'react-native-modal';

import styled from 'styled-components/native';

import LinearGradient from 'react-native-linear-gradient';
import { metrics, fonts } from '../../styles';

export const Container = styled.View`
  align-self: stretch;
  background-color: white;
  border-radius: ${metrics.PADDING_SCREEN / 2}px;
  align-items: center;
  padding: ${metrics.PADDING_SCREEN * 1.5}px;
  margin-right: ${metrics.PADDING_SCREEN * 1.5}px;
  margin-left: ${metrics.PADDING_SCREEN * 1.5}px;
`;

export const Modal = styled(RNModal)`
  justify-content: center;
  align-items: center;
  margin: 0;
`;

export const TitleModal = styled.Text`
  text-align: center;
  color: black;
  font-size: ${fonts.EXTRA_MEDIUM}px;
  font-weight: bold;
`;

export const SubTitleModal = styled.Text`
  text-align: center;
  color: black;
  font-size: ${fonts.MEDIUM}px;
  margin-top: ${metrics.PADDING_SCREEN * 0.5}px;
  margin-bottom: ${metrics.PADDING_SCREEN * 0.5}px;
`;

export const TextPatient = styled.Text`
  font-size: ${fonts.MEDIUM}px;
  color: #3b3b3b;
  font-family: Helvetica;
  font-weight: bold;
`;

export const TextNamePatient = styled.Text`
  font-size: ${fonts.MEDIUM}px;
  color: #7b7b7b;
  font-family: Helvetica;
`;

export const TextAddress = styled.Text`
  font-size: ${fonts.MEDIUM}px;
  color: #182047;
  text-decoration-line: underline;
  font-family: Helvetica;
  text-align: center;
  margin-top: ${metrics.PADDING_SCREEN * 0.5}px;
  margin-bottom: ${metrics.PADDING_SCREEN}px;
`;

export const ContainerClose = styled.View`
  align-self: stretch;
  align-items: flex-end;
  margin-right: ${metrics.PADDING_SCREEN}px;
`;

export const ButtonClose = styled.TouchableOpacity.attrs({
  activeOpacity: metrics.button_opacity,
})``;

export const ContainerButton = styled.View`
  border-radius: 10px;
  height: 40px;
  width: 100%;
  border-radius: 10px;
`;

export const ContainerCancel = styled(RectButton)`
  height: 100%;
  width: 100%;
  border-radius: 10px;
  background-color: #b10a0a;
  justify-content: center;
  align-items: center;
`;
export const TextRefude = styled.Text`
  color: white;
  font-weight: bold;
  font-size: ${fonts.EXTRA_MEDIUM}px;
`;

export const LinearGradientButton = styled(LinearGradient).attrs({
  colors: ['#00AA95', '#00CC76'],
  start: { x: 0, y: 0 },
  end: { x: 1, y: 0 },
})`
  height: ${metrics.PADDING_SCREEN * 2.5}px;
  width: 100%;
  border-radius: 10px;
  margin-top: ${metrics.PADDING_SCREEN}px;
`;

export const ButtonProduct = styled.TouchableOpacity`
  height: 100%;
  width: 100%;
  border-radius: 10px;
  justify-content: center;
  align-items: center;
  border-radius: 10px;
`;

export const ButtonText = styled.Text`
  color: #ffffff;
  font-size: ${fonts.EXTRA_MEDIUM}px;
  font-weight: bold;
`;
