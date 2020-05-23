import styled from 'styled-components/native';
import { metrics, fonts } from '../../styles';

interface ContainerProps {
  hasError?: boolean;
}

export const Container = styled.View<ContainerProps>`
  padding: 0 15px;
  height: 45px;
  border: ${props => (props.hasError ? 'red' : '#bfc6c5')};
  border-radius: 10px;
  flex-direction: row;
  align-items: center;
  margin-top: ${metrics.PADDING_SCREEN * 0.5}px;
`;

export const TInput = styled.TextInput.attrs({
  placeholderTextColor: '#BFC6C5',
})`
  flex: 1;
  font-size: 15px;
  color: black;
  margin-left: 5px;
`;

export const TextErrorInput = styled.Text`
  font-size: ${fonts.VERY_EXTRA_SMALL}px;
  font-family: Helvetica;
  text-align: left;
  padding-left: 5px;
  align-self: stretch;
  color: red;
`;

export const TextLabel = styled.Text`
  font-size: 20px;
  padding: 5px;
  font-family: MontserratAlternates-Regular;
`;
