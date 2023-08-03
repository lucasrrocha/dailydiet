import { TextInput, TextInputProps, ViewProps } from "react-native";

import { TextInputMaskProps } from "react-native-masked-text";
import { Container, ContainerInput, ContainerInputMasked, Label } from "./styles";

type Props = TextInputProps & {
  inputRef?: React.RefObject<TextInput>;
  label: string;
  textArea?: boolean;
  style?: ViewProps;
}

type InputMaskedProps = TextInputMaskProps & {
  label: string;
  style?: ViewProps;
}


export function Input({ inputRef, label, style, ...rest }: Props) {
  return (
    <Container style={style}>
      <Label>{label}</Label>
      <ContainerInput
        ref={inputRef}
        {...rest}
      />
    </Container>
  )
}

export function InputMasked({ type, options, label, style, ...rest }: InputMaskedProps) {
  return (
    <Container style={style}>
      <Label>{label}</Label>
      <ContainerInputMasked
        type={type}
        options={options}
        {...rest}
      />
    </Container>
  )
}