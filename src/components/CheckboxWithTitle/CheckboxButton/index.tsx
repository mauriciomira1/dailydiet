import React, { useState } from "react";
import { ButtonIcon, ButtonTitle, Container } from "./styles";

type Props = {
  type: "SIM" | "NÃO";
  selected?: boolean;
  handleWithDietStatus: (selected: boolean) => void;
};

export const CheckboxButton = ({
  type,
  selected,
  handleWithDietStatus,
}: Props) => {
  return (
    <Container
      onPress={() => handleWithDietStatus(selected!)}
      selected={selected!}
      type={type}
    >
      <ButtonIcon type={type} />
      <ButtonTitle>{type === "SIM" ? "Sim" : "Não"}</ButtonTitle>
    </Container>
  );
};
