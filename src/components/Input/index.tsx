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
    <>
      <TextLabel>{label}</TextLabel>
      <Container hasError={hasError}>
        {icon}
        <TInput {...rest} ref={ref} />
        {passLock}
      </Container>
    </>
  );
};
export default forwardRef(Input);
