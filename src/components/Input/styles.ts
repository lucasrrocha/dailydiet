import { TextInput } from "react-native";
import { css } from "styled-components";
import styled from "styled-components/native";

export const Container = styled.View`
`;

export const Label = styled.Text`
    ${({ theme }) => css`
    font-family: ${theme.FONT_FAMILY.BOLD};
    font-size: ${theme.FONT_SIZE.SM}px;
    color: ${theme.COLORS.GRAY_2};
  `};
  margin-bottom: 4px;
`;

export const ContainerInput = styled(TextInput)`


  ${({ theme }) => css`
    background-color: ${theme.COLORS.WHITE};
    border: 1px solid ${theme.COLORS.GRAY_5};
    color: ${theme.COLORS.GRAY_1};

    font-family: ${theme.FONT_FAMILY.REGULAR};
    font-size: ${theme.FONT_SIZE.MD}px;
  `};

  border-radius: 6px;
  padding: 14px;
`;
