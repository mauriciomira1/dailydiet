# dailydiet

## Planejamento

- Configuração de styled components

### Criação de componentes da Home

1. Header (ícone + foto) <Header/>
2. Componente de View com opção de cor, título LG, subtítulo (X,XX% das refeições dentro da dieta) (título caixa alta + subtítulo + ícone (com opção de cor)) <StatisticsCard onPress={abre a página de estatísticas}/>
3. Componente de texto padrão (fontSize SM) <TextDefault/>
4. Componente de botão width 100% bg cinza e text white (props: text, ícone '+' opcional) <ButtonDefault onPress={abre a página de nova refeição} title="Nova refeição"/>
5. Componente do conjunto de refeições por dia <DietPerDay/>, composto pelos componentes 6 e 7 abaixo.
6. Componente de data 12.08.2023 <DayOfDiet/>
7. Componente de width 100% ( horarioDaRefeicao | nomeDaRefeicao | ícone) obs.: o ícone tem opção de cor com padrão vermelho <mealDataItem/>

### Criação da Home

<SectionList

  <Header/>
  <StatisticsCard onPress={abre a página de estatísticas}/>
  <TextDefault/>
  <ButtonDefault onPress={abre a página de nova refeição} title="Nova refeição" />
  const fetchDiet = Async...
  const dietMeals = fetchDiet.map(dietDataOfDay => <DietPerDay dietDataOfDay={dietDataOfDay}/>)
/>

### Criação dos componentes da secundários da Home

1. Componente de Header com Width full <HeaderFullWidth/>
2. Componente de subtítulo <Subtitle/>
3. Componente de View com título MD e subtítulo SM, com opção de cor de background e width 100% <DetailsDataCard title="22" subtitle="melhor sequência de pratos dentro da dieta" bgColor={${({theme}) => theme.COLORS.GRAY_200}}/>

### Criação com componente Statistics da home

<Container>
  <HeaderFullWidth/>
  <Subtitle/>
  <DetailsDataCard title="22" subtitle="melhor sequência de pratos dentro da dieta" bgColor={${({theme}) => theme.COLORS.GRAY_200}}/>
  <DetailsDataCard title="22" subtitle="melhor sequência de pratos dentro da dieta" bgColor={${({theme}) => theme.COLORS.GRAY_200}}/>
  <View>
    <DetailsDataCard title="22" subtitle="melhor sequência de pratos dentro da dieta" bgColor={${({theme}) => theme.COLORS.GRAY_200}}/>
    <DetailsDataCard title="22" subtitle="melhor sequência de pratos dentro da dieta" bgColor={${({theme}) => theme.COLORS.GRAY_200}}/>
  <View/>
<Container/>

### Criação dos componentes da página Meals

1. Componente de formulário
   1.1. Nome, Descrição (textarea), Data, Hora, Está dentro da dieta? (sim/não)
   1.2. Componente de botão <ButtonDefault title="Cadastrar refeição" noIcon/>

### Criação da página Meals

<NewMealForm onPress={vai para a página de parabéns}/>

### Criação dos componentes da página MealDetails

### Criação da página MealDetails

## Principais objetos

<!-- Dieta por dia, que vai aparecer na home -->

```
dietDataOfDay = {
  day: "12/08/2023",
  meals: [
    {
      timeOfDay: 20:00,
      mealName: X-tudo,
      withinTheDiet: false
      },
    {
      timeOfDay: 16:00,
      mealName: Pão com ovo,
      withinTheDiet: true
    }
  ]
}
```
