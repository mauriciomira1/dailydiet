import React, { useState } from "react";
import { Container, InputData, InputTitle } from "./styles";
import { TextInput, TextInputProps } from "react-native";

type Props = TextInputProps &
  React.ClassAttributes<TextInput> & {
    title: string;
  };

// React.ClassAttributes<TextInput>.ref?: React.LegacyRef<TextInput> | undefined

const InputItemName = ({ title }: Props) => {
  const [isFocused, setIsFocused] = useState(false);

  return (
    <Container>
      <InputTitle>{title}</InputTitle>
      <InputData
        onFocus={() => setIsFocused(true)}
        onBlur={() => setIsFocused(false)}
        selected={isFocused}
      />
    </Container>
  );
};

export default InputItemName;
