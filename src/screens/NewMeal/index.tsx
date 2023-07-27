import { Button } from "@components/Button";
import { Header } from "@components/Header";
import { Input } from "@components/Input";
import { useNavigation } from "@react-navigation/native";
import { useState } from "react";
import { View } from "react-native";
import { Container, ContainerHeader, ContainerWrapper, FormRow, RadioBullet, RadioButtonFalse, RadioButtonTrue, RadioContainer, RadioText } from "./styles";

export function NewMeal() {
  const [selectedOption, setSelectedOption] = useState(true);
  const navigation = useNavigation();

  function handlePress() {
    navigation.navigate("register", { dietStatus: selectedOption })
  }

  function handleRadioButton(option: boolean) {
    setSelectedOption(option);
  }

  return (
    <Container>
      <ContainerHeader>
        <Header neutral title="Nova Refeição" />
      </ContainerHeader>

      <ContainerWrapper>
        <Input label="Nome" autoCorrect={false} />

        <Input multiline={true} textArea label="Descrição" autoCorrect={false} />

        <FormRow>
          <Input style={{ width: '47%' }} label="Data" autoCorrect={false} />

          <Input style={{ width: '47%' }} label="Hora" autoCorrect={false} />
        </FormRow>

        <RadioContainer>
          <RadioButtonTrue dietStatus={selectedOption} onPress={() => handleRadioButton(true)}>
            <RadioBullet dietStatus />
            <RadioText>Sim</RadioText>
          </RadioButtonTrue>

          <RadioButtonFalse dietStatus={selectedOption} onPress={() => handleRadioButton(false)}>
            <RadioBullet />
            <RadioText>Não</RadioText>
          </RadioButtonFalse>
        </RadioContainer>

        <View style={{ flex: 1, justifyContent: 'flex-end', marginBottom: 70 }}>
          <Button
            title="Cadastrar refeição"
            onPress={handlePress}
          />
        </View>
      </ContainerWrapper>
    </Container>
  )
}