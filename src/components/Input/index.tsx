import React, { forwardRef } from 'react';
import { Container, TInput, TextLabel } from './styles';

interface InputProps {
  icon: string;
  passLock?: string;
  hasError?: boolean;
  label?: string;
}

const Input: React.FC<InputProps> = (
  { icon, passLock, hasError, label, ...rest },
  ref,
) => {
  return (
    <Container hasError={hasError}>
      <TextLabel>{label}</TextLabel>
      {icon}
      <TInput {...rest} ref={ref} />
      {passLock}
    </Container>
  );
};
export default forwardRef(Input);
