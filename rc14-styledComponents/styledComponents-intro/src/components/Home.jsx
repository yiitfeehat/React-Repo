import React from "react";
import DivStyle from "./style/ContainerStyle";
import HeaderS, { LinkS } from "./style/HeaderStyle";
import ButtonS, { TomatoButton } from "./style/ButonStyle";

const Home = () => {
  return (
    <DivStyle>
      <HeaderS>Merhaba</HeaderS>
      <LinkS href="#">LINK </LinkS>

      <ButtonS bengisu >tıkla</ButtonS>
      <ButtonS yunus>tıkla</ButtonS>
      <ButtonS>tıkla</ButtonS>
      <TomatoButton abdullah>tıkla</TomatoButton>
      <TomatoButton>tıkla</TomatoButton>
    </DivStyle>
  );
};

export default Home;
