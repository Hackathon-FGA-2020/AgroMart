import styled from 'styled-components/native';
import FastImage from 'react-native-fast-image';
import { metrics, fonts } from '../../styles';
import { LOGO } from '../../assets/images';

export const Container = styled.View`
  flex: 1;
  align-items: center;
  padding: ${metrics.PADDING_SCREEN * 1.5}px;
  justify-content: center;
`;

export const Logo = styled(FastImage).attrs({
  resizeMode: FastImage.resizeMode.stretch,
  source: LOGO,
})`
  width: ${metrics.PADDING_SCREEN * 6}px;
  height: ${metrics.PADDING_SCREEN * 7}px;
  margin-bottom: ${metrics.PADDING_SCREEN * 0.7}px;
`;

export const EyeButton = styled.TouchableOpacity``;

export const AppName = styled.Text`
  font-size: ${fonts.EXTRA_BIG * 1.5}px;
  margin-bottom: ${metrics.PADDING_SCREEN * 2}px;
  font-family: MontserratAlternates-Regular;
`;

export const AnimationCircule = styled.ActivityIndicator.attrs({
  size: 'small',
  color: 'white',
})`
  align-self: center;
`;

export const CreateAccountButton = styled.TouchableOpacity`
  padding: 25px 0;
  justify-content: center;
  align-items: center;
  flex-direction: row;
`;

export const CreateAccountButtonText = styled.Text`
  color: #00aa95;
  font-size: 18px;
  font-family: MontserratAlternates-Regular;
  margin-left: 8px;
`;
