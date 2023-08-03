import { useFocusEffect, useNavigation, useRoute } from "@react-navigation/native";
import { useCallback, useState } from "react";
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

import { MealsProps } from "@screens/Home";
import { mealEdit } from "@storage/meals/mealEdit";
import { mealGetById } from "@storage/meals/mealGetById";


type RouteParams = {
  id: number;
}

export function EditMeal() {
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [date, setDate] = useState('');
  const [hour, setHour] = useState('');
  const [selectedOption, setSelectedOption] = useState(true);
  const [meal, setMeal] = useState<MealsProps>();

  const route = useRoute();
  const { id } = route.params as RouteParams;

  const navigation = useNavigation();

  async function handleEditMeal() {
    if (!name || !description || !date || !hour) {
      Alert.alert('Nova refeição', 'Preencha os dados para cadastrar uma nova refeição!');
      return;
    }
    const newMeal = {
      name,
      description,
      date,
      hour,
      dietStatus: selectedOption
    }

    try {
      await mealEdit(id, newMeal);
      navigation.navigate("home");

    } catch (error) {
      Alert.alert('Nova refeição', 'Erro ao cadastrar nova refeição');
      console.log(error)
    }
  }

  function handleRadioButton(option: boolean) {
    setSelectedOption(option);
  }

  async function fetchMealById() {
    try {
      const meal = await mealGetById(id);
      if (meal) {
        setName(meal.name);
        setDescription(meal.description);
        setDate(meal.date);
        setHour(meal.hour);
        setSelectedOption(meal.dietStatus);
      }
    } catch (error) {
      console.log(error);
      Alert.alert('Refeições', 'Não foi possivel carregar a refeição selecionada.');
    }
  }

  useFocusEffect(useCallback(() => {
    fetchMealById();
  }, []));

  return (
    <Container>
      <ContainerHeader>
        <Header neutral title="Editar refeição" />
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
            title="Salvar alterações"
            onPress={handleEditMeal}
          />
        </View>
      </ContainerWrapper>
    </Container>
  )
}