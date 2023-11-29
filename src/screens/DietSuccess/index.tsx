import React from "react";
import { Container, Subtittle, Title } from "./styles";
import { Text } from "react-native";
import ButtonDefault from "@components/ButtonDefault";
import { useNavigation } from "@react-navigation/native";
import Lottie from "lottie-react-native";

const DietSuccess = () => {
  const navigation = useNavigation();

  const goHome = () => {
    navigation.navigate("home");
  };

  return (
    <Container>
      <Title>Continue assim!</Title>
      <Subtittle>
        Você continua{" "}
        <Text style={{ fontWeight: "bold" }}>dentro da dieta</Text>. Muito bem!
      </Subtittle>
      <Lottie
        source={require("@assets/successanimation.json")}
        style={{ width: 800, marginVertical: -70 }}
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

export default DietSuccess;
