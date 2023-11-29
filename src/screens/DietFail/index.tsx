import React from "react";
import { Container, Subtittle, Title } from "./styles";
import { Text } from "react-native";
import ButtonDefault from "@components/ButtonDefault";
import Lottie from "lottie-react-native";
import { useNavigation } from "@react-navigation/native";

const DietFail = () => {
  const navigation = useNavigation();

  const goHome = () => {
    navigation.navigate("home");
  };

  return (
    <Container>
      <Title>Que pena!</Title>
      <Subtittle>
        Você <Text style={{ fontWeight: "bold" }}>saiu da dieta</Text>. dessa
        vez, mas continue se esforçando e não desista!
      </Subtittle>
      <Lottie
        source={require("@assets/failedanimation.json")}
        style={{ width: 400 }}
        loop
        autoPlay
        autoSize
      />
      <ButtonDefault
        title="Ir para a página inicial"
        handleOnPressFunction={goHome}
      />
    </Container>
  );
};

export default DietFail;
