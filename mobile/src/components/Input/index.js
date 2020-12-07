import * as React from 'react';

import {Container, Title, TextInput, ErrorLabel} from './styles';
import colors from '~/styles/colors';

export default function Input({
  color = colors.primaryColor,
  title,
  errorText = null,
  ...props
}) {
  return (
    <Container>
      {title && <Title colorI={color}>{title}</Title>}
      <TextInput error={errorText} colorI={color} {...props}></TextInput>

      <ErrorLabel>{errorText}</ErrorLabel>
    </Container>
  );
}
