import { TextInput, TextInputProps } from "react-native";
import { useTheme } from 'styled-components/native';

import { Container, ContainerInput, Label } from "./styles";

type Props = TextInputProps & {
  inputRef?: React.RefObject<TextInput>;
  label: string;
}


export function Input({ inputRef, label, ...rest }: Props) {
  const { COLORS } = useTheme();

  return (
    <Container>
      <Label>{label}</Label>
      <ContainerInput
        ref={inputRef}
        placeholderTextColor={COLORS.GRAY_3}
        {...rest}
      />
    </Container>
  )
}