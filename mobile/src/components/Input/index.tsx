import * as React from 'react';

import {
  Container,
  Title,
  TextInput,
  ErrorLabel,
} from "./styles";
import colors from "~/styles/colors";

export interface Props {
  color: string;
  title: string;
  errorText: string;
}

const Input: React.ElementType<Props> = ({
  color = colors.primaryColor,
  title,
  errorText = null,
  ...props
}) => (
  <Container>
    {title && <Title colorI={color}>{title}</Title>}
    <TextInput error={errorText} colorI={color} {...props}></TextInput>

    <ErrorLabel>{errorText}</ErrorLabel>
  </Container>
)

export default Input;
