import { useNavigation, useRoute } from "@react-navigation/native";
import { View } from "react-native";

import { Button } from "@components/Button";

import { Container, Description, ImageSuccess, Title } from "./styles";

import illustrationSuccess from '@assets/illustration.png';
import illustrationFailed from '@assets/illustrationFailed.png';

type RouteParams = {
  dietStatus: boolean;
}

export function Register() {
  const navigation = useNavigation();

  const route = useRoute();
  const { dietStatus } = route.params as RouteParams;

  const message = {
    success: 'Você continua <bold>dentro da dieta<bold>. Muito bem!',
    failed: 'Você <bold>saiu da dieta<bold> dessa vez, mas continue se esforçando e não desista!'
  }

  function handlePress() {
    navigation.navigate("home")
  }
  return (
    <Container>
      <Title dietStatus={dietStatus}>{dietStatus ? 'Continue assim!' : 'Que pena!'}</Title>

      <Description>{dietStatus ? message.success : message.failed}</Description>

      <ImageSuccess source={dietStatus ? illustrationSuccess : illustrationFailed} />

      <View style={{ width: '60%' }}>
        <Button
          title="Ir para a página inicial"
          onPress={handlePress}
        />
      </View>
    </Container>
  )
}