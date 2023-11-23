import React from "react";
import { Container, Photo } from "./styles";
import UserPhoto from "@assets/userIcon.jpg";

const UserImage = () => {
  return (
    <Container>
      <Photo source={UserPhoto} />
    </Container>
  );
};

export default UserImage;
