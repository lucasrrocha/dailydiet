import { ArrowLeft } from 'phosphor-react-native';
import styled, { css } from "styled-components/native";

type HeaderPropsColor = {
  dietStatus?: boolean;
  neutral?: boolean;
}

export const Container = styled.View`
  width: 100%;

  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;


export const BackButton = styled.TouchableOpacity`
  flex: 1;
`;

export const BackIcon = styled(ArrowLeft).attrs<HeaderPropsColor>(({ theme, dietStatus, neutral }) => ({
  size: 24,
  color: neutral ? theme.COLORS.GRAY_2 : (dietStatus ? theme.COLORS.GREEN_DARK : theme.COLORS.RED_DARK),
})) <HeaderPropsColor>``;

export const TitleWrapper = styled.View`
`;

export const Title = styled.Text`
    ${({ theme }) => css`
    font-family: ${theme.FONT_FAMILY.BOLD};
    font-size: ${theme.FONT_SIZE.LG}px;
    color: ${theme.COLORS.GRAY_1};
  `}
`;

export const IconGhosth = styled.View`
  flex: 1;
`;