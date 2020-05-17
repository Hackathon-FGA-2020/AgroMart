import React, { forwardRef } from 'react';
import { Container, TInput, TextErrorInput } from './styles';

interface InputProps {
  icon: string;
  passLock?: string;
}

const Input: React.FC<InputProps> = ({ icon, passLock, ...rest }, ref) => {
  return (
    <Container>
      {icon}
      <TInput {...rest} ref={ref} />
      {passLock}
    </Container>
  );
};
export default forwardRef(Input);
