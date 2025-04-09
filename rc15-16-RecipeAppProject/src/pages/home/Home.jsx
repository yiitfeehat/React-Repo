import React, { useContext } from "react";
import Header from "../../components/header/Header";
import { RecipeContext } from "../../context/RecipeProvider";
import { HomeImg, ImgDiv } from "./HomeStyles";
import asci from "../../assets/home.svg"
import RecipeCard from "./RecipeCard";
const Home = () => {
  const { yemekler } = useContext(RecipeContext);

  return (
    <div>
      <Header />


      {yemekler.length> 0 ? (<div> <RecipeCard/> </div> ) : (
        <ImgDiv>
          <HomeImg src={asci}/>
        </ImgDiv>


      )}
    </div>
  );
};

export default Home;
