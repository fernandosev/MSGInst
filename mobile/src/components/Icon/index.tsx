import * as React from 'react';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Entypo from 'react-native-vector-icons/Entypo';
import EvilIcons from 'react-native-vector-icons/EvilIcons';
import Feather from 'react-native-vector-icons/Feather';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import FontAwesome5Pro from 'react-native-vector-icons/FontAwesome5Pro';
import Fontisto from 'react-native-vector-icons/Fontisto';
import Foundation from 'react-native-vector-icons/Foundation';
import Ionicons from 'react-native-vector-icons/Ionicons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import Octicons from 'react-native-vector-icons/Octicons';

type Type = 'AntDesign' |
'Entypo'|
'EvilIcons'|
'Feather'|
'FontAwesome'|
'FontAwesome5'|
'FontAwesome5Pro'|
'Fontisto'|
'Foundation'|
'Ionicons'|
'MaterialCommunityIcons'|
'MaterialIcons'|
'Octicons'|
'RNIMigration';

export interface Props {
  type: Type;
  name: string;
  color: string;
  size: number;
}

const Icon: React.FC<Props> = ({type, name, color, size}) => {

  const renderIcon = () => {
    switch(type){
      case 'AntDesign':
          return <AntDesign name={name} color={color} size={size} />;
        case 'Entypo':
          return <Entypo name={name} color={color} size={size} />;
        case 'EvilIcons':
          return <EvilIcons name={name} color={color} size={size} />;
        case 'Feather':
          return <Feather name={name} color={color} size={size} />;
        case 'FontAwesome':
          return <FontAwesome name={name} color={color} size={size} />;
        case 'FontAwesome5':
          return <FontAwesome5 name={name} color={color} size={size} />;
        case 'FontAwesome5Pro':
          return <FontAwesome5Pro name={name} color={color} size={size} />;
        case 'Fontisto':
          return <Fontisto name={name} color={color} size={size} />;
        case 'Foundation':
          return <Foundation name={name} color={color} size={size} />;
        case 'Ionicons':
          return <Ionicons name={name} color={color} size={size} />;
        case 'MaterialCommunityIcons':
          return (
            <MaterialCommunityIcons name={name} color={color} size={size} />
          );
        case 'MaterialIcons':
          return <MaterialIcons name={name} color={color} size={size} />;
        case 'Octicons':
          return <Octicons name={name} color={color} size={size} />;
    }
  }
  return renderIcon()
};

export default Icon;