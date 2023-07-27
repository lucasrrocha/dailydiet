import { PencilSimpleLine, Plus, Trash } from "phosphor-react-native";
import { TouchableOpacity } from "react-native";
import styled, { css } from "styled-components/native";

export type ButtonTypeStyleProps = 'PRIMARY' | 'SECONDARY';

type Props = {
  type: ButtonTypeStyleProps;
}

export const Container = styled(TouchableOpacity) <Props>`
  flex: 1;

  min-height: 56px;
  max-height: 56px;

  background-color: ${({ theme, type }) => type === 'PRIMARY' ? theme.COLORS.GRAY_2 : theme.COLORS.WHITE};

  border-radius: 6px;
  border: 1px solid ${({ theme, type }) => type === 'SECONDARY' ? theme.COLORS.GRAY_1 : null};

  flex-direction: row;
  gap: 12px;
  justify-content: center;
  align-items: center;

`;

export const Title = styled.Text <Props>`
  ${({ theme, type }) => css`
    font-size: ${theme.FONT_SIZE.MD}px;
    font-family: ${theme.FONT_FAMILY.BOLD};
    color: ${type === 'PRIMARY' ? theme.COLORS.WHITE : theme.COLORS.GRAY_1};
  `}
`;

export const IconPlus = styled(Plus).attrs({
  size: 18,
})`
`;

export const IconEdit = styled(PencilSimpleLine).attrs({
  size: 18,
})`
`;

export const IconTrash = styled(Trash).attrs({
  size: 18,
})`
`;