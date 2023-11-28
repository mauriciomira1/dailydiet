import React, { useState } from "react";
import { ButtonSection, Container, Title } from "./styles";
import { CheckboxButton } from "./CheckboxButton";

type Props = {
  handleOnDietToogle: (selected: boolean) => void;
};

const CheckboxWithTitle = ({ handleOnDietToogle }: Props) => {
  // O dado de saída para "está dentro da dieta?" é o onDiet<boolean>
  const [onDiet, setOnDiet] = useState(false);

  const handleWithDietStatus = (selected: boolean) => {
    setOnDiet(selected);
    handleOnDietToogle(selected);
  };

  return (
    <Container>
      <>
        <Title>Está dentro da dieta?</Title>

        <ButtonSection>
          <CheckboxButton
            type="SIM"
            selected={onDiet}
            handleWithDietStatus={() => handleWithDietStatus(true)}
          />
          <CheckboxButton
            type="NÃO"
            selected={!onDiet}
            handleWithDietStatus={() => handleWithDietStatus(false)}
          />
        </ButtonSection>
      </>
    </Container>
  );
};

export default CheckboxWithTitle;
