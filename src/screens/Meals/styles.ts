import { TouchableOpacityProps } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import styled, { css } from "styled-components/native";

type Props = TouchableOpacityProps & {
  dietStatus?: boolean;
}

export const Container = styled(SafeAreaView)`
  flex: 1;
  background-color: ${({ theme }) => theme.COLORS.GREEN_LIGHT};
`;

export const ContainerHeader = styled.View`
  padding: 30px 24px;
`;

export const ContainerWrapper = styled.View`
  height: 100%;
  
  padding: 0px 24px 24px 24px;
  padding-top: 40px;

  border-top-left-radius: 20px;
  border-top-right-radius: 20px;

  background-color: ${({ theme }) => theme.COLORS.WHITE};

`;

export const Title = styled.Text`
  ${({ theme }) => css`
  color: ${theme.COLORS.GRAY_1};
  font-family: ${theme.FONT_FAMILY.BOLD};
  font-size: ${theme.FONT_SIZE.LG}px;
`};
  margin-bottom: 8px;
`;

export const Description = styled.Text`
  ${({ theme }) => css`
  color: ${theme.COLORS.GRAY_2};
  font-family: ${theme.FONT_FAMILY.REGULAR};
  font-size: ${theme.FONT_SIZE.MD}px;
`};

margin-bottom: 24px;
`;

export const DateTitle = styled.Text`
  ${({ theme }) => css`
  color: ${theme.COLORS.GRAY_1};
  font-family: ${theme.FONT_FAMILY.BOLD};
  font-size: ${theme.FONT_SIZE.SM}px;
`};
  margin-bottom: 8px;
`;

export const Date = styled.Text`
  ${({ theme }) => css`
  color: ${theme.COLORS.GRAY_2};
  font-family: ${theme.FONT_FAMILY.REGULAR};
  font-size: ${theme.FONT_SIZE.MD}px;
`};
  margin-bottom: 24px;
`;

export const DietBox = styled.View` 
  width: 144px;
  flex-direction: row;

  padding: 8px 16px;

  background-color: ${({ theme }) => theme.COLORS.GRAY_6};
  border-radius: 50%;

  gap: 8px;

  align-items: center;
`;

export const DietText = styled.Text`
  ${({ theme }) => css`
  color: ${theme.COLORS.GRAY_1};
  font-family: ${theme.FONT_FAMILY.REGULAR};
  font-size: ${theme.FONT_SIZE.SM}px;
`};
`;

export const RadioBullet = styled.View<{ dietStatus: boolean }>`
  width: 8px;
  height: 8px;

  background-color: ${({ theme, dietStatus }) => dietStatus ? theme.COLORS.GREEN_DARK : theme.COLORS.RED_DARK};
  border-radius: 50%;
`;