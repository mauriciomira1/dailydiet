import React from "react";
import { Container, InputData, InputTitle } from "./styles";
import { TextInputProps } from "react-native";

type Props = TextInputProps & {
  title: string;
};

const InputItemName = ({ title }: Props) => {
  return (
    <Container>
      <InputTitle>{title}</InputTitle>
      <InputData />
    </Container>
  );
};

export default InputItemName;
