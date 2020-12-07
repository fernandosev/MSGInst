import styled from "styled-components/native";
import colors from "~/styles/colors";
import background from "~/assets/images/BackgroundSignIn.png";

export const Background = styled.ImageBackground.attrs({ source: background })`
  width: 100%;
  height: 100%;
`;

export const Container = styled.View`
  background-color: ${`${colors.primaryColor}DD`};
  flex: 1;
  align-items: center;
  justify-content: center;
  padding: 10px;
`;

export const AppIconContainer = styled.View`
  align-items: center;
  width: 100%;
  margin-bottom: 25px;
`;





