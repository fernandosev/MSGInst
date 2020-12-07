import * as React from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {Root, Toast} from 'popup-ui';

import {Container, Scroll} from './styles';
import GroupRow from '~/components/GroupRow';
import {
  getAnotherGroupsRequest,
  joinGroupRequest,
} from '~/store/modules/group/actions';

export default function MyGroups({navigation}) {
  const dispatch = useDispatch();
  const anotherGroups = useSelector((state) => state.group.anotherGroups);
  const myGroups = useSelector((state) => state.group.myGroups);

  React.useEffect(() => {
    dispatch(getAnotherGroupsRequest(toast));
  }, []);

  const toast = (title, message, color) => {
    Toast.show({
      title,
      text: message,
      color,
    });
  };

  return (
    <Root>
      <Container>
        <Scroll>
          {anotherGroups.map((value, index) => {
            if (myGroups.find((element) => element.group_id === value.group_id))
              return;

            return (
              <GroupRow
                key={index}
                name={value.group_name}
                onPress={() =>
                  dispatch(joinGroupRequest(value.group_id, toast))
                }
              />
            );
          })}
        </Scroll>
      </Container>
    </Root>
  );
}
