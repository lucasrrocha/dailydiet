import { useNavigation } from "@react-navigation/native";
import { BackButton, BackIcon, Container, IconGhosth, Title, TitleWrapper } from "./styles";

type Props = {
  title?: string;
  dietStatus?: boolean;
  neutral?: boolean;
}

export function Header({ title, dietStatus = false, neutral = false }: Props) {
  const navigation = useNavigation();

  function handleGoBack() {
    navigation.navigate("home");
  }

  return (
    <Container >
      <BackButton onPress={handleGoBack}>
        <BackIcon dietStatus={dietStatus} neutral={neutral} />
      </BackButton>
      {title &&
        <>
          <TitleWrapper>
            <Title>{title}</Title>
          </TitleWrapper>

          <IconGhosth></IconGhosth>
        </>
      }
    </Container>
  )
}