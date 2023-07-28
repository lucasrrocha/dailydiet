import { Button } from "@components/Button";
import { Header } from "@components/Header";
import { useNavigation } from "@react-navigation/native";
import { View } from "react-native";
import { Container, ContainerHeader, ContainerWrapper, Date, DateTitle, Description, DietBox, DietText, RadioBullet, Title } from "./styles";

export function Meals() {
  const navigation = useNavigation();

  function handlePress() {
    navigation.navigate("home");
  }

  function handleEditMeal() {
    navigation.navigate("newMeal");
  }

  return (
    <Container>
      <ContainerHeader>
        <Header dietStatus title="Refeição" />
      </ContainerHeader>

      <ContainerWrapper>
        <Title>Sanduiche</Title>

        <Description>Sanduiche de pão integral com atum e salada de alface e tomate</Description>

        <DateTitle>Data e hora</DateTitle>
        <Date>12/08/2022 às 16:00</Date>

        <DietBox>
          <RadioBullet dietStatus={true} />
          <DietText>dentro da dieta</DietText>
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
            onPress={handlePress}
          />
        </View>
      </ContainerWrapper>
    </Container>
  )
}