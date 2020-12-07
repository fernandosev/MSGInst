import React from 'react';
import colors from '~/styles/colors';
import {Container, TextButton} from './styles';

export default function ButtonLight({
  text,
  color = colors.secondaryColor,
  ...rest
}) {
  return (
    <Container {...rest}>
      <TextButton color={color}>{text}</TextButton>
    </Container>
  );
}
