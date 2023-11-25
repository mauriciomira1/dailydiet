import React from "react";
import { Container, Icon, IconButton, Title } from "./styles";
import { TouchableOpacity } from "react-native";

type Props = {
  title: string;
};

const HeaderSecondary = ({ title }: Props) => {
  return (
    <Container>
      <Icon>
        <IconButton />
      </Icon>

      <Title>{title}</Title>
    </Container>
  );
};

export default HeaderSecondary;
