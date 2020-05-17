import styled from 'styled-components/native';
import FastImage from 'react-native-fast-image';
import { metrics } from '../../styles';
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
  margin-bottom: ${metrics.PADDING_SCREEN * 2}px;
`;

export const EyeButton = styled.TouchableOpacity``;

export const AnimationCircule = styled.ActivityIndicator.attrs({
  size: 'small',
  color: 'white',
})`
  align-self: center;
`;
