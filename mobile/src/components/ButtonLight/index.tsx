import React from 'react';
import colors from '~/styles/colors';
import {Container, TextButton} from './styles'

export interface Props {
  text: string;
  color: string;
  rest: any;
}

const Button: React.FC<Props> = ({text, color = colors.secondaryColor, ...rest}) => {
  return( 
    <Container  {...rest}>
      <TextButton color={color}>{text}</TextButton>
    </Container>
  )
}

export default Button;