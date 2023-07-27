import { TextInput, TextInputProps, ViewProps } from "react-native";
import { useTheme } from 'styled-components/native';

import { Container, ContainerInput, Label } from "./styles";

type Props = TextInputProps & {
  inputRef?: React.RefObject<TextInput>;
  label: string;
  textArea?: boolean;
  style?: ViewProps;
}


export function Input({ inputRef, label, style, ...rest }: Props) {
  const { COLORS } = useTheme();

  return (
    <Container style={style}>
      <Label>{label}</Label>
      <ContainerInput
        ref={inputRef}
        placeholderTextColor={COLORS.GRAY_3}
        {...rest}
      />
    </Container>
  )
}