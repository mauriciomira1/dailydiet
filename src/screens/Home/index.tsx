import React from "react";
import { Container } from "./styles";

import Header from "@components/Header";
import StatisticsCard from "@components/StatisticsCard";
import TextDefault from "@components/TextDefault";
import ButtonDefault from "@components/ButtonDefault";
import DayMeals from "@components/DayMeals";

const Home = () => {
  return (
    <Container>
      <Header />
      <StatisticsCard percentage={92.16} />
      <TextDefault description="Refeições" style={{ marginTop: 30 }} />
      <ButtonDefault title="Nova refeição" showIcon />
      <DayMeals style={{ marginTop: 24 }} />
    </Container>
  );
};

export default Home;
