import { SafeAreaView } from "react-native-safe-area-context";
import styled, { css } from "styled-components/native";

type ColorHeaderStatusProps = {
  dietStatus?: boolean;
}

export const Container = styled(SafeAreaView) <ColorHeaderStatusProps>`
  flex: 1;

  background-color: ${({ theme, dietStatus }) => dietStatus ? theme.COLORS.GREEN_LIGHT : theme.COLORS.RED_LIGHT};
`;

export const ContainerHeader = styled.View`
  align-items: center;
  padding: 0px 24px;
`;

export const PercentText = styled.Text`
  ${({ theme }) => css`
    font-family: ${theme.FONT_FAMILY.BOLD};
    font-size: ${theme.FONT_SIZE.XXL}px;
    color: ${theme.COLORS.GRAY_1};
  `}
`;

export const HeaderText = styled.Text`
  ${({ theme }) => css`
    font-family: ${theme.FONT_FAMILY.REGULAR};
    font-size: ${theme.FONT_SIZE.SM}px;
    color: ${theme.COLORS.GRAY_2};
  `}
  margin-bottom: 30px;
`;

export const ContainerWrapper = styled.View`
  height: 100%;
  
  padding: 0px 24px;

  border-top-left-radius: 20px;
  border-top-right-radius: 20px;

  background-color: ${({ theme }) => theme.COLORS.WHITE};
`;

export const Title = styled.Text`
  ${({ theme }) => css`
    font-family: ${theme.FONT_FAMILY.BOLD};
    font-size: ${theme.FONT_SIZE.SM}px;
    color: ${theme.COLORS.GRAY_1};
  `}
  text-align: center;
  margin: 30px 0 20px 0;
`;

export const Content = styled.View`
padding: 16px;
align-items: center;

background-color: ${({ theme }) => theme.COLORS.GRAY_6};
border-radius: 8px;
margin-bottom: 12px;
`;
export const ContentNumber = styled.Text`
  ${({ theme }) => css`
    font-family: ${theme.FONT_FAMILY.BOLD};
    font-size: ${theme.FONT_SIZE.XL}px;
    color: ${theme.COLORS.GRAY_2};
  `}
`;
export const ContentText = styled.Text`
  ${({ theme }) => css`
    font-family: ${theme.FONT_FAMILY.REGULAR};
    font-size: ${theme.FONT_SIZE.SM}px;
    color: ${theme.COLORS.GRAY_2};
  `}

  text-align: center;
`;

export const ContainerInfo = styled.View`
  flex-direction: row;
  gap: 12px;
`;

export const Info = styled.View<ColorHeaderStatusProps>`
  flex: 1 0 0;
  padding: 16px;

  gap: 8px;

  align-items: center;

  background-color: ${({ theme, dietStatus }) => dietStatus ? theme.COLORS.GREEN_LIGHT : theme.COLORS.RED_LIGHT};
  border-radius: 8px;
`;
