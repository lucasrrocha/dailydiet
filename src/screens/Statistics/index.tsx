import { Header } from "@components/Header";
import { Container, ContainerHeader, ContainerInfo, ContainerWrapper, Content, ContentNumber, ContentText, HeaderText, Info, PercentText, Title } from "./styles";

export function Statistics() {

  return (
    <Container dietStatus>
      <ContainerHeader>
        <Header dietStatus />
        <PercentText>90,86%</PercentText>
        <HeaderText>das refeições dentro da dieta</HeaderText>
      </ContainerHeader>

      <ContainerWrapper>
        <Title>Estatísticas gerais</Title>

        <Content>
          <ContentNumber>22</ContentNumber>
          <ContentText>melhor sequência de pratos dentro da dieta</ContentText>
        </Content>

        <Content>
          <ContentNumber>109</ContentNumber>
          <ContentText>refeições registradas</ContentText>
        </Content>

        <ContainerInfo>
          <Info dietStatus>
            <ContentNumber>36</ContentNumber>
            <ContentText>refeições dentro da dieta</ContentText>
          </Info>

          <Info>
            <ContentNumber>10</ContentNumber>
            <ContentText>refeições fora da dieta</ContentText>
          </Info>
        </ContainerInfo>

      </ContainerWrapper>
    </Container>
  )
}