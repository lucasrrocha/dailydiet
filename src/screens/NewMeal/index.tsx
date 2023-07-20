import { Header } from "@components/Header";
import { Input } from "@components/Input";
import { useNavigation } from "@react-navigation/native";
import { Container, ContainerHeader, ContainerWrapper, FormRow } from "./styles";

export function NewMeal() {
  const navigation = useNavigation();

  function handlePress() {
    navigation.navigate("meals")
  }
  return (
    <Container>
      <ContainerHeader>
        <Header neutral title="Nova Refeição" />
      </ContainerHeader>

      <ContainerWrapper>
        <Input label="Nome" placeholder="Nome" autoCorrect={false} />
        <Input label="Nome" placeholder="Nome" autoCorrect={false} />
        {/*
          <Input label="Descrição" placeholder="Descrição" multiline={true} autoCorrect={false} /> */}

        <FormRow>
          <Input label="Nome" placeholder="Nome" autoCorrect={false} />

          <Input label="Descrição" placeholder="Descrição" autoCorrect={false} />
        </FormRow>
      </ContainerWrapper>

    </Container>
  )
}