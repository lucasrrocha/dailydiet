import { MyTextBold } from "@components/MyText";
import { SafeAreaView } from "react-native-safe-area-context";
import styled, { css } from "styled-components/native";

type TextStyleProps = {
  bold?: boolean;
  dietStatus?: boolean;
}

export const Container = styled(SafeAreaView)`
  flex: 1;

  background-color: ${({ theme }) => theme.COLORS.WHITE};

  
  padding: 0px 16px ;

  align-items: center;
  justify-content: center;
`;

export const Title = styled.Text<TextStyleProps>`
  ${({ theme, dietStatus }) => css`
    font-size: ${theme.FONT_SIZE.XL}px;
    font-family: ${theme.FONT_FAMILY.BOLD};
    color: ${dietStatus ? theme.COLORS.GREEN_DARK : theme.COLORS.RED_DARK};
  `}

  margin-bottom: 8px;
`;

export const Description = styled(MyTextBold) <TextStyleProps>`
  ${({ theme }) => css`
    font-size: ${theme.FONT_SIZE.MD}px;
    color: ${theme.COLORS.GRAY_1};
  `}
  text-align: center;
  margin-bottom: 40px;
`;

export const ImageSuccess = styled.Image`
margin-bottom: 32px;
`;
