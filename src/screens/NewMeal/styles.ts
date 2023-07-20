import { SafeAreaView } from "react-native-safe-area-context";
import styled from "styled-components/native";

export const Container = styled(SafeAreaView)`
  flex: 1;

  background-color: ${({ theme }) => theme.COLORS.GRAY_5};
`;

export const ContainerHeader = styled.View`
  padding: 30px 24px;
`;

export const ContainerWrapper = styled.View`
  flex: 1;
  /* height: 100%; */
  
  padding:24px;

  border-top-left-radius: 20px;
  border-top-right-radius: 20px;

  background-color: ${({ theme }) => theme.COLORS.WHITE};
`;

export const Form = styled.View`
background-color: aliceblue;
flex: 1;
`;

export const FormRow = styled.View`
margin-top: 12px;
  /* width: 100%; */
  flex-direction: row;
  background-color: antiquewhite;
  /* flex: 1 0 0; */
`;
