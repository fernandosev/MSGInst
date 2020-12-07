import styled from 'styled-components/native';

export const Container = styled.TouchableOpacity`
  padding: 10px 0;
`;

export const TextButton = styled.Text`
  color: ${(props) => props.color};
  font-size: 18px;
  text-decoration-line: underline;
`;
