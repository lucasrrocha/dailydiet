import { Header } from "@components/Header";
import { useRoute } from "@react-navigation/native";
import { MealsProps } from "@screens/Home";
import { useEffect, useState } from "react";
import { Container, ContainerHeader, ContainerInfo, ContainerWrapper, Content, ContentNumber, ContentText, HeaderText, Info, PercentText, Title } from "./styles";

type RouteParams = {
  data: MealsProps[];
  percent: string;
}

export function Statistics() {
  const [inDiet, setInDiet] = useState(0);
  const [outDiet, setOutDiet] = useState(0);
  const [bestDietSequence, setbestDietSequence] = useState(0);

  const route = useRoute();

  const { data, percent } = route.params as RouteParams;

  function separateMealsByDietStatus(meals: MealsProps[]) {
    const inDietMeals = meals.filter((meal) => meal.dietStatus);
    const outDietMeals = meals.filter((meal) => !meal.dietStatus);

    setInDiet(inDietMeals.length);
    setOutDiet(outDietMeals.length);
  };

  function findBestDietSequence(meals: MealsProps[]) {
    // Filtra apenas as refeições dentro da dieta (com dietStatus: true)
    const inDietMeals = meals.filter((meal) => meal.dietStatus);

    // Ordena as refeições por data (assumindo que a data está no formato "DD/MM/AAAA")
    inDietMeals.sort((a, b) => {
      const dateA = new Date(a.date.split('/').reverse().join('-'));
      const dateB = new Date(b.date.split('/').reverse().join('-'));
      return dateA.getTime() - dateB.getTime();
    });

    // Aqui você pode percorrer a sequência inDietMeals para encontrar a melhor combinação, se necessário.
    setbestDietSequence(inDietMeals.length);
  }

  useEffect(() => {
    separateMealsByDietStatus(data);
    findBestDietSequence(data);
  }, [])

  return (
    <Container dietStatus={percent >= '50' ? true : false}>
      <ContainerHeader>
        <Header dietStatus={percent >= '50' ? true : false} />
        <PercentText>{percent}%</PercentText>
        <HeaderText>das refeições dentro da dieta</HeaderText>
      </ContainerHeader>

      <ContainerWrapper>
        <Title>Estatísticas gerais</Title>

        <Content>
          <ContentNumber>{bestDietSequence}</ContentNumber>
          <ContentText>melhor sequência de pratos dentro da dieta</ContentText>
        </Content>

        <Content>
          <ContentNumber>{data.length}</ContentNumber>
          <ContentText>refeições registradas</ContentText>
        </Content>

        <ContainerInfo>
          <Info dietStatus>
            <ContentNumber>{inDiet}</ContentNumber>
            <ContentText>refeições dentro da dieta</ContentText>
          </Info>

          <Info>
            <ContentNumber>{outDiet}</ContentNumber>
            <ContentText>refeições fora da dieta</ContentText>
          </Info>
        </ContainerInfo>

      </ContainerWrapper>
    </Container>
  )
}