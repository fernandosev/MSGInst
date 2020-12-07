import * as React from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {Root, Toast} from 'popup-ui';

import Icon from '~/components/Icon';

import colors from '~/styles/colors';

import {Container, Scroll, NewGroupContainer, ContainerModal} from './styles';
import GroupRow from '~/components/GroupRow';
import Dialog from '~/components/Dialog';
import Input from '~/components/Input';
import {
  createGroupRequest,
  getMyGroupsRequest,
} from '~/store/modules/group/actions';

export default function MyGroups({navigation}) {
  const dispatch = useDispatch();
  const createGroupLoading = useSelector(
    (state) => state.group.createGroupLoading,
  );
  const myGroups = useSelector((state) => state.group.myGroups);
  const [modalVisible, setModalVisible] = React.useState(false);
  const [groupName, setGroupName] = React.useState('');

  const [messageModalVisible, setMessageModalVisible] = React.useState(false);
  const [message, setMessage] = React.useState('');
  const sendMessageLoading = useSelector(
    (state) => state.group.sendMessageLoading,
  );

  React.useEffect(() => {
    dispatch(getMyGroupsRequest(toast));
  }, []);

  const toast = (title, message, color) => {
    setModalVisible(false);

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
          {myGroups.map((value, index) => {
            return (
              <GroupRow
                key={index}
                name={value.group_name}
                onPress={() => setMessageModalVisible(!messageModalVisible)}
              />
            );
          })}
        </Scroll>
        <NewGroupContainer onPress={() => setModalVisible(true)}>
          <Icon type="Entypo" name="plus" color={colors.white} size={35} />
        </NewGroupContainer>

        <Dialog
          btnAction={() => dispatch(createGroupRequest(groupName, toast))}
          btnTitle="Criar"
          close={() => setModalVisible(false)}
          title="Novo grupo"
          visible={modalVisible}
          loading={createGroupLoading}>
          <ContainerModal>
            <Input
              color={colors.white}
              title="Nome do grupo"
              value={groupName}
              onChangeText={(text) => setGroupName(text)}
            />
          </ContainerModal>
        </Dialog>

        <Dialog
          btnAction={() => console.log('message')}
          btnTitle="Enviar"
          close={() => setMessageModalVisible(false)}
          title="Nova mensagem"
          visible={messageModalVisible}
          loading={false}>
          <ContainerModal>
            <Input
              color={colors.white}
              title="Digite sua mensagem"
              value={message}
              onChangeText={(text) => setMessage(text)}
            />
          </ContainerModal>
        </Dialog>
      </Container>
    </Root>
  );
}
