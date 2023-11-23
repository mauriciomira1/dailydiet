import React from "react";
import { Container } from "./styles";
import Logo from "./Logo";
import UserImage from "./UserImage";

const Header = () => {
  return (
    <Container>
      <Logo />
      <UserImage />
    </Container>
  );
};

export default Header;
