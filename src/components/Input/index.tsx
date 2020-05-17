import React, { forwardRef } from 'react';
import { Container, TInput, TextErrorInput } from './styles';

interface InputProps {
  icon: string;
}

const Input: React.FC<InputProps> = ({ icon, ...rest }, ref) => {
  return (
    <Container>
      <TInput {...rest} ref={ref} />
      {icon}
    </Container>
  );
};
export default forwardRef(Input);
