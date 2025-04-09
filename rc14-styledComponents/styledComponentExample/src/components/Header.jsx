import React from "react";
import DisplayCSS from "./styles/DisplaySSS";
import ImageSSS, { LogoCSS } from "./styles/ImageSSS";
import ButtonCSS, { DetayButton } from "./styles/ButonSSS";

const Header = () => {
  return (
    <div>
      <DisplayCSS>
        <LogoCSS src="./images/logo.png" alt="" />

        <div>
          <ButtonCSS ahmet="red"> Apply Courses</ButtonCSS>
          <ButtonCSS recep> Talk to Adviser</ButtonCSS>
        </div>
      </DisplayCSS>
      <DisplayCSS>
        <div>
          <h1>The IT Career of Your Dreams Starts Here</h1>

          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Atque
            ipsum recusandae ipsam et repellendus saepe sit, deserunt numquam
            nostrum eaque!
          </p>
          <ButtonCSS recep >Start Your New Career</ButtonCSS>
          <DetayButton>Details</DetayButton>
        </div>

        <ImageSSS src="./images/hero.jpg" alt="" />
      </DisplayCSS>
    </div>
  );
};

export default Header;
