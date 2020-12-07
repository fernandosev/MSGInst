import styled from 'styled-components/native';
import Modal from 'react-native-modal';
import colors from '~/styles/colors';

export const ModalContainer = styled(Modal)`
  align-items: center;
  justify-content: center;
  margin: 0;
`;

export const Alert = styled.View`
  background-color: ${colors.primaryColor};
  align-items: center;
  width: 80%;
  min-width: 300px;
  max-width: 350px;
  padding: 20px;
  padding-top: 30px;
  padding-bottom: 30px;
  justify-content: center;
  align-items: center;
  border-radius: 5px;
`;

export const Title = styled.Text`
  text-align: center;
  font-size: 24px;
  color: ${colors.white};
  font-weight: bold;
  margin-top: 30px;
`;
