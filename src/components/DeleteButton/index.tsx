import React from 'react';
import { RectButtonProperties } from 'react-native-gesture-handler';
import { Container, ButtonText, LinearGradientButton } from './styles';

interface ButtonProps extends RectButtonProperties {
  children: any;
  style?: {};
}

const DeleteButton: React.FC<ButtonProps> = ({ children, style, ...rest }) => (
  <LinearGradientButton style={style}>
    <Container {...rest}>
      {typeof children === 'string' ? (
        <ButtonText>{children}</ButtonText>
      ) : (
        children
      )}
    </Container>
  </LinearGradientButton>
);

export default DeleteButton;
