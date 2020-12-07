import * as React from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {Root, Toast} from 'popup-ui';

import Icon from '~/components/Icon';

import colors from '~/styles/colors';

import {Container, GroupImage, GroupName} from './styles';

export default function GroupRow({name, ...props}) {
  const dispatch = useDispatch();

  return (
    <Container {...props}>
      <GroupImage>
        <Icon
          type="MaterialCommunityIcons"
          name="account-group"
          color={colors.white}
          size={35}
        />
      </GroupImage>
      <GroupName>{name}</GroupName>
    </Container>
  );
}
