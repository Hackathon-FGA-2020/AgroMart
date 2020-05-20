import React, { forwardRef } from 'react';
import { TextInput } from 'react-native';
import { Container, TInput, TextLabel } from './styles';

interface InputProps {
  icon: string;
  passLock?: string;
  hasError?: boolean;
  label?: string;
}

const Input: React.RefForwardingComponent<TextInput, InputProps> = (
  { icon, passLock, hasError, label, ...rest },
  ref,
) => {
  return (
    <>
      {label && <TextLabel>{label}</TextLabel>}
      <Container hasError={hasError}>
        {icon}
        <TInput {...rest} ref={ref} />
        {passLock}
      </Container>
    </>
  );
};
export default forwardRef(Input);
