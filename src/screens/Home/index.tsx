import { useFocusEffect, useNavigation } from "@react-navigation/native";
import {
  ArrowUp,
  Container,
  ContainerEmpty,
  DietBullet,
  Header,
  Logo,
  Meals,
  Percent,
  PercentContainer,
  PercentText,
  PhotoWrapper,
  SectionContainer,
  SectionHour,
  SectionText,
  SectionTitle,
  Separator,
  TextEmpty,
  UserPhoto
} from "./styles";

import logoImg from '@assets/logo.png';
import { Button } from "@components/Button";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { mealsGetAll } from "@storage/meals/mealsGetAll";
import { useCallback, useState } from "react";
import { SectionList } from "react-native";

type DataProps = {
  id: number;
  name: string;
  hour: string;
  dietStatus: boolean;
}

interface SectionProps {
  title: string;
  data: DataProps[];
}

export interface MealsProps {
  id: number;
  name: string;
  description: string;
  date: string;
  hour: string;
  dietStatus: boolean;
}

interface MealsGroupeByDate {
  [date: string]: SectionProps;
}

export function Home() {
  const [percent, setPercent] = useState<string>('0');
  const [percentForDisplay, setPercentForDisplay] = useState<number>(0);
  const [meals, setMeals] = useState<MealsProps[]>([]);

  const navigation = useNavigation();

  function handleNewMeal() {
    navigation.navigate("newMeal");
  }

  function handleStatistics() {
    navigation.navigate("statistics", { data: meals, percent });
  }

  function handleMeals(id: number) {
    navigation.navigate("meals", { id });
  }

  function groupByDate(): SectionProps[] {
    const groupedByDate = meals.reduce((acc: MealsGroupeByDate, meal) => {
      const { id, name, date, dietStatus, hour } = meal;
      const formattedDate = formatDate(date); // Função para formatar a data

      if (acc[formattedDate]) {
        acc[formattedDate].data.push({ id, name, hour, dietStatus });
      } else {
        acc[formattedDate] = { title: formattedDate, data: [{ id, name, hour, dietStatus }] };
      }
      return acc;
    }, {});

    const sortedByDate = Object.values(groupedByDate).sort((a, b) => {
      // Assuming the date format is "DD/MM/AAAA"
      const dateA = new Date(a.title.split('/').reverse().join('-'));
      const dateB = new Date(b.title.split('/').reverse().join('-'));
      return dateA.getTime() - dateB.getTime();
    });

    const formattedResult = sortedByDate.map((item) => ({
      ...item,
      title: formatDateForDisplay(item.title), // Função para formatar a data para exibição
    }));

    return formattedResult;
  }

  function formatDate(dateString: string): string {
    // Assuming dateString is in the format "DD/MM/AAAA"
    const [day, month, year] = dateString.split('/');
    return `${year}-${month}-${day}`;
  }

  function formatDateForDisplay(dateString: string): string {
    // Assuming dateString is in the format "AAAA-MM-DD"
    const [year, month, day] = dateString.split('-');
    return `${day}.${month}.${year}`;
  }


  const sections: SectionProps[] = groupByDate();


  async function fetchGetAllMeals() {
    const data = await mealsGetAll();
    setPercent(calculateDietPercentage(data));

    setMeals(data);
  }

  function calculateDietPercentage(meals: MealsProps[]): string {
    if (meals.length === 0) {
      return '0';
    }

    const dietMealsCount = meals.reduce((count, meal) => {
      return count + (meal.dietStatus ? 1 : 0);
    }, 0);

    const percentage = (dietMealsCount / meals.length) * 100;
    setPercentForDisplay(percentage);
    return percentage.toFixed(2).replace('.', ',');
  }

  async function clear() {
    await AsyncStorage.clear();
  }

  useFocusEffect(useCallback(() => {
    fetchGetAllMeals();
    // clear();
  }, []));

  return (
    <Container>
      <Header>
        <Logo source={logoImg} />
        <PhotoWrapper>
          <UserPhoto source={logoImg} />
        </PhotoWrapper>
      </Header>

      <PercentContainer percent={percentForDisplay} onPress={handleStatistics}>
        <ArrowUp percent={percentForDisplay} />
        <Percent>{percent}%</Percent>
        <PercentText>das refeições dentro da dieta</PercentText>
      </PercentContainer>

      <Meals>
        Refeições
      </Meals>

      <Button
        icon='PLUS'
        title="Nova refeição"
        onPress={handleNewMeal}
      />


      <SectionList
        style={{ marginTop: 20 }}
        showsVerticalScrollIndicator={false}
        stickyHeaderHiddenOnScroll
        sections={sections}
        keyExtractor={(item) => item.name}
        renderItem={({ item }) => (
          <SectionContainer onPress={() => handleMeals(item.id)}>
            <SectionHour>{item.hour}</SectionHour>
            <Separator />
            <SectionText>{item.name}</SectionText>
            <DietBullet dietStatus={item.dietStatus} />
          </SectionContainer>
        )}
        renderSectionHeader={({ section: { title } }) => (
          <SectionTitle>{title}</SectionTitle>
        )}
        ListEmptyComponent={() => (
          <ContainerEmpty>
            <TextEmpty>Cadastre suas refeições...</TextEmpty>
          </ContainerEmpty>
        )}
      />

    </Container>
  )
}