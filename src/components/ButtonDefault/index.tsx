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
};

const ButtonDefault = ({
  title,
  invertedBtn = false,
  IconType,
}: ButtonDefaultProps) => {
  const IconComponents = {
    ButtonIconPlus: <ButtonIconPlus invertedBtn={invertedBtn} />,
    ButtonIconEdit: <ButtonIconEdit invertedBtn={invertedBtn} />,
    ButtonIconDelete: <ButtonIconDelete invertedBtn={invertedBtn} />,
  };

  return (
    <Container invertedBtn={invertedBtn}>
      {IconType && IconComponents[IconType]}
      <ButtonTitle invertedBtn={invertedBtn}>{title}</ButtonTitle>
    </Container>
  );
};

export default ButtonDefault;
