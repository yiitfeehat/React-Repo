import React, { useContext } from "react";
import { Cards, MainContainer, RecipeHeader, RecipeImage } from "./HomeStyles";
import { RecipeContext } from "../../context/RecipeProvider";
import { useNavigate } from "react-router-dom";

const RecipeCard = () => {
  const { yemekler } = useContext(RecipeContext);
  const navigate = useNavigate();
  return (
    <MainContainer>
      {yemekler.map(({ recipe }) => (
        <Cards key={recipe.image}>
          <RecipeHeader>{recipe.label}</RecipeHeader>
          <RecipeImage src={recipe.image}></RecipeImage>

          <button onClick={() => navigate("/details", { state: { recipe } })}>
            Details
          </button>
        </Cards>
      ))}
    </MainContainer>
  );
};

export default RecipeCard;
