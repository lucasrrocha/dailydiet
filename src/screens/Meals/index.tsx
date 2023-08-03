import { Button } from "@components/Button";
import { Header } from "@components/Header";
import { useNavigation, useRoute } from "@react-navigation/native";
import { MealsProps } from "@screens/Home";
import { mealGetById } from "@storage/meals/mealGetById";
import { mealRemoveById } from "@storage/meals/mealRemoveById";
import { useEffect, useState } from "react";
import { Alert, View } from "react-native";
import { ButtonWrapper, Container, ContainerHeader, ContainerWrapper, Date, DateTitle, Description, DietBox, DietText, ModalText, ModalView, Popup, RadioBullet, Title } from "./styles";

type RouteParams = {
  id: number;
}

export function Meals() {
  const [meal, setMeal] = useState<MealsProps>();
  const [isModalVisible, setIsModalVisible] = useState(false);

  const navigation = useNavigation();

  const route = useRoute();
  const { id } = route.params as RouteParams;


  async function handleRemoveMeal() {
    try {
      await mealRemoveById(id);
      navigation.navigate("home");
    } catch (error) {
      console.log(error)
      Alert.alert('Remover Refeição', 'Não foi possivel remover esta refeição, tente novamente!');
    }
  }

  function handleEditMeal() {
    navigation.navigate("editMeal", { id });
  }

  async function fetchMealById() {
    try {
      const meal = await mealGetById(id);
      setMeal(meal);

    } catch (error) {
      console.log(error);
      Alert.alert('Refeições', 'Não foi possivel carregar a refeição selecionada.');
    }
  }

  function toggleModal() {
    setIsModalVisible(!isModalVisible);
  }

  useEffect(() => {
    fetchMealById();
  }, [])

  return (
    <Container dietStatus={meal?.dietStatus}>
      <ContainerHeader>
        <Header dietStatus={meal?.dietStatus} title="Refeição" />
      </ContainerHeader>

      <ContainerWrapper>
        <Title>{meal?.name}</Title>

        <Description>{meal?.description}</Description>

        <DateTitle>Data e hora</DateTitle>
        <Date>{meal?.date} às {meal?.hour}</Date>

        <DietBox>
          <RadioBullet dietStatus={meal?.dietStatus} />
          <DietText>{meal?.dietStatus ? 'dentro da dieta' : 'fora da dieta'}</DietText>
        </DietBox>



        <View style={{ flex: 1, justifyContent: 'flex-end', marginBottom: 70 }}>
          <Button
            style={{ marginBottom: 9 }}
            icon="EDIT"
            title="Editar refeição"
            onPress={handleEditMeal}
          />

          <Button
            type="SECONDARY"
            icon="TRASH"
            title="Excluir refeição"
            onPress={toggleModal}
          />
        </View>
      </ContainerWrapper>

      <Popup isVisible={isModalVisible}>
        <ModalView>
          <ModalText>
            Deseja realmente excluir o registro da refeição?
          </ModalText>

          <ButtonWrapper>
            <Button
              type="SECONDARY"
              title="Cancelar"
              onPress={toggleModal}
            />

            <Button
              type="PRIMARY"
              title="Sim, excluir"
              onPress={handleRemoveMeal}
            />
          </ButtonWrapper>

        </ModalView>
      </Popup>
    </Container>
  )
}