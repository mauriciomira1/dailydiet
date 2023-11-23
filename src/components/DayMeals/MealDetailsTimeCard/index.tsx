import React from "react";
import { Container, MealName, Status, TimeInfo } from "./styles";

type Props = {
  timeInfo: string;
  mealName: string;
  onDiet: boolean;
};

const MealDetailsTimeCard = ({ timeInfo, mealName, onDiet = false }: Props) => {
  return (
    <Container>
      <TimeInfo>{timeInfo}</TimeInfo>
      <MealName>{mealName}</MealName>
      <Status onDiet={onDiet} />
    </Container>
  );
};

export default MealDetailsTimeCard;
