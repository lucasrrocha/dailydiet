import { ArrowUpRight } from "phosphor-react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import styled, { css } from "styled-components/native";

type Props = {
  percent: string;
}

export const Container = styled(SafeAreaView)`
  flex: 1;

  background-color: ${({ theme }) => theme.COLORS.WHITE};
  padding: 0px 24px;
`;

export const PercentContainer = styled.TouchableOpacity<Props>`
  height: 102px;

  border-radius: 8px;
  background-color: ${({ theme, percent }) => percent >= '50' ? theme.COLORS.GREEN_LIGHT : theme.COLORS.RED_LIGHT};

  align-items: center;
  justify-content: center;
`;

export const Percent = styled.Text`
  ${({ theme }) => css`
    font-family: ${theme.FONT_FAMILY.BOLD};
    font-size: ${theme.FONT_SIZE.XXL}px;
    color: ${theme.COLORS.GRAY_1};
  `}
`;

export const PercentText = styled.Text`
  ${({ theme }) => css`
    font-family: ${theme.FONT_FAMILY.REGULAR};
    font-size: ${theme.FONT_SIZE.SM}px;
    color: ${theme.COLORS.GRAY_2};
  `}
`;


export const Header = styled.View`
flex-direction: row;
justify-content: space-between;

padding: 40px 0px;
`;

export const Logo = styled.Image``;

export const PhotoWrapper = styled.View`
  border: 2px solid ${({ theme }) => theme.COLORS.GRAY_2};
  border-radius: 50%;
  overflow: hidden;
  `;

export const UserPhoto = styled.Image`
width: 40px;
height: 40px;
`;

export const Meals = styled.Text`
${({ theme }) => css`
  color: ${theme.COLORS.GRAY_1};
  font-family: ${theme.FONT_FAMILY.REGULAR};
  font-size: ${theme.FONT_SIZE.MD}px;
`}
  padding: 30px 0 12px 0;
`;

export const SectionTitle = styled.Text`
  ${({ theme }) => css`
  color: ${theme.COLORS.GRAY_1};
  font-family: ${theme.FONT_FAMILY.BOLD};
  font-size: ${theme.FONT_SIZE.LG}px;
`};
  margin-bottom: 10px;
`;


export const SectionContainer = styled.TouchableOpacity`
  width: 100%;  
  flex-direction: row;
  
  padding: 14px 16px 14px 12px;
  margin-bottom: 12px;
  
  border: 1px solid ${({ theme }) => theme.COLORS.GRAY_5};
  border-radius: 6px;

  align-items: center;
  
  `;

export const SectionHour = styled.Text`
  ${({ theme }) => css`
  color: ${theme.COLORS.GRAY_1};
  font-family: ${theme.FONT_FAMILY.BOLD};
  font-size: ${theme.FONT_SIZE.LT}px;
`};

`;

export const SectionText = styled.Text`
  flex: 1;
  
  ${({ theme }) => css`
  color: ${theme.COLORS.GRAY_1};
  font-family: ${theme.FONT_FAMILY.REGULAR};
  font-size: ${theme.FONT_SIZE.MD}px;
`};
`;

export const Separator = styled.View`
  height: 14px;

  border: 1px solid ${({ theme }) => theme.COLORS.GRAY_4};

  margin: 0px 12px;
`;

export const DietBullet = styled.View`
  width: 14px;
  height: 14px;

  background-color: ${({ theme }) => theme.COLORS.RED_MID};
  border-radius: 50%;
`;

export const ArrowUp = styled(ArrowUpRight).attrs<Props>(({ theme, percent }) => ({
  size: 24,
  color: percent >= '50' ? theme.COLORS.GREEN_DARK : theme.COLORS.RED_DARK,
})) <Props>`
  position: absolute;
  right: 8px;
  top: 8px;
`;