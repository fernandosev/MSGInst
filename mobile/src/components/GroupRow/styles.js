import styled from 'styled-components/native';
import colors from '~/styles/colors';
import background from '~/assets/images/BackgroundSignIn.png';

export const Container = styled.TouchableOpacity`
  width: 100%;
  height: 75px;
  flex-direction: row;
  align-items: center;
  padding: 0 10px;
`;

export const GroupImage = styled.View`
  width: 60px;
  height: 60px;
  border-radius: 500px;
  background-color: ${colors.secondaryColor};
  align-items: center;
  justify-content: center;
  margin-right: 20px;
`;

export const GroupName = styled.Text`
  font-size: 18px;
  font-weight: bold;
`;
