import React from "react";
import { Container, Icon, IconButton, Title } from "./styles";
import { useNavigation } from "@react-navigation/native";

type Props = {
  title: string;
};

const HeaderSecondary = ({ title }: Props) => {
  const navigation = useNavigation();

  const handleBackButton = () => {
    navigation.navigate("home");
  };

  return (
    <Container>
      <Icon onPress={handleBackButton}>
        <IconButton />
      </Icon>

      <Title>{title}</Title>
    </Container>
  );
};

export default HeaderSecondary;
