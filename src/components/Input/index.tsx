import React, { forwardRef } from 'react';
import { View } from 'react-native';
import { Container, TInput, TextErrorInput, TextLabel } from './styles';

interface InputProps {
  icon: string;
  label?: string;
}

const Input: React.FC<InputProps> = ({ icon, label, ...rest }, ref) => {
  return (
    <View>
      <TextLabel>{label}</TextLabel>
      <Container>
        <TInput {...rest} ref={ref} />
        {icon}
      </Container>
    </View>
  );
};
export default forwardRef(Input);
