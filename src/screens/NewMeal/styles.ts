import { TouchableOpacityProps } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import styled, { css } from "styled-components/native";

type Props = TouchableOpacityProps & {
  dietStatus?: boolean;
}

export const Container = styled(SafeAreaView)`
  flex: 1;
  background-color: ${({ theme }) => theme.COLORS.GRAY_5};
`;

export const ContainerHeader = styled.View`
  padding: 30px 24px;
`;

export const ContainerWrapper = styled.View`
  height: 100%;
  
  padding:24px;

  border-top-left-radius: 20px;
  border-top-right-radius: 20px;

  background-color: ${({ theme }) => theme.COLORS.WHITE};

  gap: 24px;
`;

export const FormRow = styled.View`
  flex-direction: row;
  gap: 20px;
`;

export const RadioContainer = styled.View`
  flex-direction: row;
  gap: 20px;
`;

export const RadioButton = styled.TouchableOpacity`
  flex: 1;
  flex-direction: row;
  gap: 8px;

  border: 1px solid ${({ theme }) => theme.COLORS.GRAY_5};
  border-radius: 6px;

  padding: 16px;

  align-items: center;
  justify-content: center;
`;

export const RadioButtonTrue = styled(RadioButton) <Props>`
  background-color: ${({ theme, dietStatus }) => dietStatus ? theme.COLORS.GREEN_LIGHT : theme.COLORS.WHITE};
`;

export const RadioButtonFalse = styled(RadioButton) <Props>`
  background-color: ${({ theme, dietStatus }) => !dietStatus ? theme.COLORS.RED_LIGHT : theme.COLORS.WHITE};
`;

export const RadioBullet = styled.View<Props>`
  width: 8px;
  height: 8px;

  background-color: ${({ theme, dietStatus }) => dietStatus ? theme.COLORS.GREEN_DARK : theme.COLORS.RED_DARK};
  border-radius: 50%;
`;

export const RadioText = styled.Text`
  ${({ theme }) => css`
    font-size: ${theme.FONT_SIZE.SM}px;
    font-family: ${theme.FONT_FAMILY.BOLD};
    color: ${theme.COLORS.GRAY_1};
  `}
`;
