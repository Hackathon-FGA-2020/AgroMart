import React, { forwardRef } from 'react';
import { Container, TInput } from './styles';

interface InputProps {
  icon: string;
  passLock?: string;
  hasError?: boolean;
}

const Input: React.FC<InputProps> = (
  { icon, passLock, hasError, ...rest },
  ref,
) => {
  return (
    <Container hasError={hasError}>
      {icon}
      <TInput {...rest} ref={ref} />
      {passLock}
    </Container>
  );
};
export default forwardRef(Input);
