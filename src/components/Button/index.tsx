import { TouchableOpacityProps } from "react-native";
import { useTheme } from "styled-components/native";
import { ButtonTypeStyleProps, Container, IconEdit, IconPlus, IconTrash, Title } from "./styles";

type Props = TouchableOpacityProps & {
  title: string;
  type?: ButtonTypeStyleProps;
  icon?: 'PLUS' | 'EDIT' | 'TRASH';
}

export function Button({ title, type = 'PRIMARY', icon, ...rest }: Props) {
  const { COLORS } = useTheme();
  return (
    <Container
      type={type}
      {...rest}
    >
      {icon === 'PLUS' &&
        <IconPlus color={type === 'PRIMARY' ? COLORS.WHITE : COLORS.GRAY_1} />
      }
      {icon === 'EDIT' &&
        <IconEdit color={type === 'PRIMARY' ? COLORS.WHITE : COLORS.GRAY_1} />
      }
      {icon === 'TRASH' &&
        <IconTrash color={type === 'PRIMARY' ? COLORS.WHITE : COLORS.GRAY_1} />
      }
      <Title type={type}>
        {title}
      </Title>
    </Container>
  )
}