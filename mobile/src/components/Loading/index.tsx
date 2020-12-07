import * as React from 'react';
import { ActivityIndicator } from 'react-native';
import colors from '~/styles/colors';

export interface Props {
  size: number;
  color: string;
}

const Loading: React.FC<Props> = ({size=30, color=colors.primaryColor}) => {
  return( 
    <ActivityIndicator size={size} color={color}/>
  )
}

export default Loading;