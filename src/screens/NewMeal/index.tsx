import { useNavigation } from "@react-navigation/native";
import { useState } from "react";
import { Alert, View } from "react-native";

import {
  Container,
  ContainerHeader,
  ContainerWrapper,
  FormRow,
  RadioBullet,
  RadioButtonFalse,
  RadioButtonTrue,
  RadioContainer,
  RadioText
} from "./styles";

import { Button } from "@components/Button";
import { Header } from "@components/Header";
import { Input, InputMasked } from "@components/Input";

import { mealCreate } from "@storage/meals/mealCreate";

export function NewMeal() {
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [date, setDate] = useState('');
  const [hour, setHour] = useState('');
  const [selectedOption, setSelectedOption] = useState(true);

  const navigation = useNavigation();

  async function handlePress() {
    if (!name || !description || !date || !hour) {
      Alert.alert('Nova refeição', 'Preencha os dados para cadastrar uma nova refeição!');
      return;
    }
    const newMeal = {
      id: new Date().getTime(),
      name,
      description,
      date,
      hour,
      dietStatus: selectedOption
    }

    try {
      await mealCreate(newMeal);
      navigation.navigate("register", { dietStatus: selectedOption });

    } catch (error) {
      Alert.alert('Nova refeição', 'Erro ao cadastrar nova refeição');
      console.log(error)
    }
  }

  function handleRadioButton(option: boolean) {
    setSelectedOption(option);
  }

  return (
    <Container>
      <ContainerHeader>
        <Header neutral title="Nova refeição" />
      </ContainerHeader>

      <ContainerWrapper>
        <Input
          label="Nome"
          value={name}
          onChangeText={setName}
          autoCorrect={false}
        />

        <Input
          label="Descrição"
          value={description}
          onChangeText={setDescription}
          textArea
          multiline={true}
          autoCorrect={false}
        />

        <FormRow>
          <InputMasked
            type="datetime"
            options={{
              format: 'DD/MM/AAAA'
            }}
            style={{ width: '47%' }}
            label="Data"
            value={date}
            onChangeText={setDate}
            autoCorrect={false}
          />

          <InputMasked
            type="datetime"
            options={{
              format: 'HH:mm'
            }}
            style={{ width: '47%' }}
            label="Hora"
            value={hour}
            onChangeText={setHour}
            autoCorrect={false}
          />
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