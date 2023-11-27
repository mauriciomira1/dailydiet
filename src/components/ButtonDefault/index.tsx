import React from "react";
import {
  ButtonIconPlus,
  ButtonIconDelete,
  ButtonIconEdit,
  ButtonTitle,
  Container,
} from "./styles";

export type ButtonDefaultProps = {
  title: string;
  invertedBtn?: boolean;
  IconType?: "ButtonIconPlus" | "ButtonIconEdit" | "ButtonIconDelete";
  handleOnPressFunction: () => void;
};

const ButtonDefault = ({
  title,
  invertedBtn = false,
  IconType,
  handleOnPressFunction,
}: ButtonDefaultProps) => {
  const IconComponents = {
    ButtonIconPlus: <ButtonIconPlus invertedBtn={invertedBtn} />,
    ButtonIconEdit: <ButtonIconEdit invertedBtn={invertedBtn} />,
    ButtonIconDelete: <ButtonIconDelete invertedBtn={invertedBtn} />,
  };

  return (
    <Container invertedBtn={invertedBtn} onPress={handleOnPressFunction}>
      {IconType && IconComponents[IconType]}
      <ButtonTitle invertedBtn={invertedBtn}>{title}</ButtonTitle>
    </Container>
  );
};

export default ButtonDefault;
