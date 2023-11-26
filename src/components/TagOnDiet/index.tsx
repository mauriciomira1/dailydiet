import React from "react";
import { ButtonIcon, ButtonTitle, Container, IconProps } from "./styles";

const TagOnDiet = ({ type }: IconProps) => {
  return (
    <Container>
      <ButtonIcon type={type} />
      <ButtonTitle>{type}</ButtonTitle>
    </Container>
  );
};

export default TagOnDiet;
