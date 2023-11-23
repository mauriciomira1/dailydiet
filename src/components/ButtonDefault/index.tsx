import React, { useState } from "react";
import { ButtonIcon, ButtonTitle, Container } from "./styles";

type Props = {
  title: string;
  showIcon?: boolean;
};

const ButtonDefault = ({ title, showIcon = false }: Props) => {
  return (
    <Container>
      {showIcon && <ButtonIcon />}
      <ButtonTitle>{title}</ButtonTitle>
    </Container>
  );
};

export default ButtonDefault;
