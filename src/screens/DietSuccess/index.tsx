import React from "react";
import { Container, Img, Subtittle, Title } from "./styles";
import { Text } from "react-native";
import SuccessImg from "@assets/success-animation.png";
import ButtonDefault from "@components/ButtonDefault";

const DietSuccess = () => {
  return (
    <Container>
      <Title>Continue assim!</Title>
      <Subtittle>
        Você continua{" "}
        <Text style={{ fontWeight: "bold" }}>dentro da dieta</Text>. Muito bem!
      </Subtittle>
      <Img source={SuccessImg} />
      <ButtonDefault title="Ir para a página inicial" />
    </Container>
  );
};

export default DietSuccess;
