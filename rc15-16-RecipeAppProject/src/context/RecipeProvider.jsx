import React, { createContext, useState } from "react";
import axios from "axios";
//! Context alanı açalım.

export const RecipeContext = createContext();
const APP_ID = "bfbb3efc";
const APP_KEY = "43faeee790f26cd82b28050d3031619d";

// https://developer.edamam.com/admin/applications

const RecipeProvider = ({ children }) => {
  //? Login ve privateRouter için stateler

  const [user,setUser]=useState(localStorage.getItem("username") || "")
  const [pass, setPass] = useState(localStorage.getItem("password")|| "");

  //? HOME VE RECIPE İÇİN GEREKLİ
  const [yemekler, setYemekler] = useState([]);
  const [query, setQuery] = useState("");
  const [mealType, setMealType] = useState("Breakfast");

  const url = `https://api.edamam.com/search?q=${query}&app_id=${APP_ID}&app_key=${APP_KEY}&mealType=${mealType}`;

  const getirData = async () => {
    const { data } = await axios.get(url);
    // console.log(data.hits)
    setYemekler(data.hits);
  };
  console.log(yemekler);

  return (
    <RecipeContext.Provider
      value={{
        yemekler,
        setQuery,
        setMealType,
        getirData,
        setUser,
        setPass,
        user,
        pass,
      }}
    >
      {children}
    </RecipeContext.Provider>
  );
};

export default RecipeProvider;
