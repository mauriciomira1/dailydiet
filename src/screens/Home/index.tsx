import React from "react";
import { Container } from "./styles";

import Header from "@components/Header";
import DayMeals from "@components/DayMeals";
import TextDefault from "@components/TextDefault";
import ButtonDefault from "@components/ButtonDefault";
import StatisticsCard from "@components/StatisticsCard";
import { ScrollView } from "react-native";
import StatisticsArea from "@components/StatisticsArea";
import StatisticsBigCard from "@components/StatisticsBigCard";

export type DataProps = {
  title: string;
  meals: meals[];
};

type meals = {
  timeInfo: string;
  mealName: string;
  onDiet: boolean;
};

const DATA: DataProps[] = [
  {
    title: "12.08.22",
    meals: [
      {
        timeInfo: "09:00",
        mealName: "Tapioca com frango",
        onDiet: true,
      },
      {
        timeInfo: "10:00",
        mealName: "Pão de queijo",
        onDiet: false,
      },
      {
        timeInfo: "11:00",
        mealName: "Misto completo",
        onDiet: false,
      },
      {
        timeInfo: "12:00",
        mealName: "Refrigerante",
        onDiet: false,
      },
      {
        timeInfo: "18:00",
        mealName: "Panqueca de ovo",
        onDiet: true,
      },
      {
        timeInfo: "22:00",
        mealName: "Sanduíche",
        onDiet: false,
      },
    ],
  },
  {
    title: "13.08.22",
    meals: [
      {
        timeInfo: "07:30",
        mealName: "Pão com frango",
        onDiet: true,
      },
      {
        timeInfo: "11:20",
        mealName: "Suco e maçã",
        onDiet: true,
      },
      {
        timeInfo: "12:00",
        mealName: "Arroz com carne",
        onDiet: true,
      },
      {
        timeInfo: "17:00",
        mealName: "Pipoca",
        onDiet: true,
      },
      {
        timeInfo: "22:45",
        mealName: "Sanduíche",
        onDiet: false,
      },
    ],
  },
];

const Home = () => {
  return (
    /*        <ScrollView>
      <Container>
        <StatisticsCard percentage={92.16} />
        <Header />
        <StatisticsCard percentage={92.16} />
        <TextDefault description="Refeições" style={{ marginTop: 30 }} />
        <ButtonDefault title="Nova refeição"  IconType="ButtonIconPlus"/>
        <DayMeals DATA={DATA} />
      </Container>
    </ScrollView>  */
    <>
      <StatisticsBigCard percentage={42.16} />
      <StatisticsArea />
    </>
  );
};

export default Home;
