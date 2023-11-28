import React, { forwardRef, useState } from "react";
import { Container, InputData, InputTitle } from "./styles";
import { TextInput, TextInputProps } from "react-native";

type Props = TextInputProps &
  React.ClassAttributes<TextInput> & {
    title: string;
    placeholder?: string;
  };

// React.ClassAttributes<TextInput>.ref?: React.LegacyRef<TextInput> | undefined

const InputItemName = forwardRef<TextInput, Props>(
  ({ title, placeholder = "", ...props }, ref) => {
    const [isFocused, setIsFocused] = useState(false);

    return (
      <Container>
        <InputTitle>{title}</InputTitle>
        <InputData
          onFocus={() => setIsFocused(true)}
          onBlur={() => setIsFocused(false)}
          selected={isFocused}
          placeholder={placeholder}
          {...props}
        />
      </Container>
    );
  }
);

export default InputItemName;
