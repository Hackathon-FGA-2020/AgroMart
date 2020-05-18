import styled from 'styled-components/native';
import { metrics, fonts } from '../../styles';

export const Container = styled.View`
  justify-content: center;
  flex: 1;
  padding: ${metrics.PADDING_SCREEN * 1.5}px;
`;

export const Title = styled.Text`
  font-size: 24px;
  font-family: MontserratAlternates-Regular;
`;

export const BodyText = styled.Text`
  font-size: 20px;
  font-family: MontserratAlternates-Regular;
`;

export const BodyView = styled.View`
  padding-top: 40px;
`;
