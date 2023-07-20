import { useNavigation } from "@react-navigation/native";
import { ArrowUp, Container, DietBullet, Header, Logo, Meals, Percent, PercentContainer, PercentText, PhotoWrapper, SectionContainer, SectionHour, SectionText, SectionTitle, Separator, UserPhoto } from "./styles";

import logoImg from '@assets/logo.png';
import { Button } from "@components/Button";
import { useState } from "react";
import { SectionList } from "react-native";

export function Home() {
  const [percent, setPercent] = useState('49,9')
  const [meals, setMeals] = useState([
    { name: 'Xis Tudo', description: 'ssss', date: '12/08/2022', hour: '20:00' },
    { name: 'Salada', description: 'ssss', date: '12/08/2022', hour: '20:00' },
    { name: 'Whey', description: 'ssss', date: '12/08/2022', hour: '20:00' },
  ])
  const sections = [
    { title: '12/08/2022', data: [{ name: 'Xis', hour: '20:00' }, { name: 'Whey', hour: '21:00' }] },
    { title: '12/08/2022', data: [{ name: 'Xis', hour: '20:00' }, { name: 'whey', hour: '21:00' }] },
    { title: '11/08/2022', data: [{ name: 'xis', hour: '20:00' }, { name: 'whey', hour: '21:00' }] },
    { title: '11/08/2022', data: [{ name: 'xis', hour: '20:00' }, { name: 'whey', hour: '21:00' }] },
    { title: '10/08/2022', data: [{ name: 'xis', hour: '20:00' }, { name: 'whey', hour: '21:00' }] },
    { title: '10/08/2022', data: [{ name: 'xis', hour: '20:00' }, { name: 'whey', hour: '21:00' }] },
    { title: '09/08/2022', data: [{ name: 'xis', hour: '20:00' }, { name: 'whey', hour: '21:00' }] },
    { title: '09/08/2022', data: [{ name: 'xis', hour: '20:00' }, { name: 'whey', hour: '21:00' }] },
    { title: '08/08/2022', data: [{ name: 'xis', hour: '20:00' }, { name: 'whey', hour: '21:00' }] },
    { title: '08/08/2022', data: [{ name: 'xis', hour: '20:00' }, { name: 'whey', hour: '21:00' }] },
  ]
  const navigation = useNavigation();

  function handleNewMeal() {
    navigation.navigate("newMeal");
  }

  function handleStatistics() {
    navigation.navigate("statistics");
  }

  return (
    <Container>
      <Header>
        <Logo source={logoImg} />
        <PhotoWrapper>
          <UserPhoto source={logoImg} />
        </PhotoWrapper>
      </Header>

      <PercentContainer percent={percent} onPress={handleStatistics}>
        <ArrowUp percent={percent} />
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
          <SectionContainer>
            <SectionHour>{item.hour}</SectionHour>
            <Separator />
            <SectionText>{item.name}</SectionText>
            <DietBullet />
          </SectionContainer>
        )}
        renderSectionHeader={({ section: { title } }) => (
          <SectionTitle>{title}</SectionTitle>
        )}
      />

    </Container>
  )
}