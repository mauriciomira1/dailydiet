import React from "react";
import { Container, Img, Subtittle, Title } from "./styles";
import { Text } from "react-native";
import SuccessImg from "@assets/failed-animation.png";
import ButtonDefault from "@components/ButtonDefault";

const DietFail = () => {
  return (
    <Container>
      <Title>Que pena!</Title>
      <Subtittle>
        Você <Text style={{ fontWeight: "bold" }}>saiu da dieta</Text>. dessa
        vez, mas continue se esforçando e não desista!
      </Subtittle>
      <Img source={SuccessImg} />
      <ButtonDefault title="Ir para a página inicial" />
    </Container>
  );
};

export default DietFail;
