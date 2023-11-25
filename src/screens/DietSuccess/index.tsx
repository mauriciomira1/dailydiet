import React from "react";
import { Container, Subtittle, Title } from "./styles";
import { Text } from "react-native";
import LottieView from "lottie-react-native";

const DietSuccess = () => {
  return (
    <Container>
      <Title>Continue assim!</Title>
      <Subtittle>
        Você continua{" "}
        <Text style={{ fontWeight: "bold" }}>dentro da dieta</Text>. Muito bem!
      </Subtittle>
      <LottieView
        source={require("@assets/failedAnimation.json")}
        autoPlay
        loop
      />
    </Container>
  );
};

export default DietSuccess;
