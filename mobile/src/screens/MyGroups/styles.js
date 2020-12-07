import styled from 'styled-components/native';
import colors from '~/styles/colors';
import background from '~/assets/images/BackgroundSignIn.png';

export const Container = styled.SafeAreaView`
  width: 100%;
  height: 100%;
  flex: 1;
`;

export const Scroll = styled.ScrollView``;

export const NewGroupContainer = styled.TouchableOpacity`
  width: 60px;
  height: 60px;
  border-radius: 500px;
  background-color: ${colors.secondaryColor};
  position: absolute;
  bottom: 15px;
  right: 15px;
  align-items: center;
  justify-content: center;
`;

export const ContainerModal = styled.View`
  height: 140px;
  padding: 20px 0;
  align-items: center;
  justify-content: center;
  width: 100%;
`;
