import styled from 'styled-components/native';

export const Container = styled.TouchableOpacity.attrs({
  elevation: 5,
})`
  background-color: ${(props) => props.background};
  width: ${(props) => props.size}px;
  height: 45px;
  padding: 0 15px;
  border-radius: 10px;
  justify-content: space-between;
  align-items: center;
  flex-direction: row;
  margin-top: 20px;
`;

export const TextButton = styled.Text`
  color: ${(props) => props.color};
  font-size: 20px;
  font-weight: bold;
`;
