import React from "react";
import { Container } from "./styles";
import { TextProps } from "react-native";

type Props = TextProps & {
  description: string;
};

const TextDefault = ({ description, ...rest }: Props) => {
  return <Container {...rest}>{description}</Container>;
};

export default TextDefault;
