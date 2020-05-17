import styled from 'styled-components/native';
import { RectButton } from 'react-native-gesture-handler';
import { metrics, fonts } from '../../styles';

export const Container = styled(RectButton)`
  width: 100%;
  height: ${metrics.PADDING_SCREEN * 2.5}px;
  background: #00cc76;
  border-radius: 10px;
  margin-top: ${metrics.PADDING_SCREEN}px;
  justify-content: center;
  align-items: center;
`;

export const ButtonText = styled.Text`
  color: #ffffff;
  font-size: ${fonts.EXTRA_MEDIUM}px;
  font-weight: bold;
`;
