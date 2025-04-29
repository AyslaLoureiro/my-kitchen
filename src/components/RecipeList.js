import { useState, useEffect } from "react";
import RecipeCard from "./RecipeCard";
import RecipeInstruction from "./RecipeInstructions";
import "../blocks/preloader.css";

function RecipeList() {
  // estado que vai guardar o que o usuário digita no input de busca de receitas
  const [searchedRecipe, setSearchedRecipe] = useState("");
  const [recipes, setRecipes] = useState([]);
  const [selectedRecipe, setSelectedRecipe] = useState(null);
  const [loading, setIsLoading] = useState(false);

  const addIngredients = (data) => {
    const recipesData = data.meals?.map((meal) => {
      // Extrai até 20 pares de ingrediente/medida
      const ingredients = [];
      for (let i = 1; i <= 20; i++) {
        const ingKey = `strIngredient${i}`;
        const measKey = `strMeasure${i}`;
        const ingredient = meal[ingKey] ? meal[ingKey].trim() : "";
        const medida = meal[measKey] ? meal[measKey].trim() : "";
        // Adiciona somente se existir ingrediente não vazio
        if (ingredient) {
          ingredients.push({ ingredient, medida });
        }
      }
      return {
        idMeal: meal.idMeal,
        strMeal: meal.strMeal,
        strInstructions: meal.strInstructions,
        strMealThumb: meal.strMealThumb,
        arrayIngredients: ingredients,
      };
    });
    return recipesData;
  };

  const handleCardClick = (recipe) => {
    setSelectedRecipe(recipe);
  };

  const handleCloseCard = () => {
    setSelectedRecipe(null);
  };
  useEffect(() => {
    searchRecipes();
  }, []);

  // Buscar uma receita na api
  const searchRecipes = async (event) => {
    if (event?.preventDefault) {
      event.preventDefault();
    }
    setIsLoading(true);
    try {
      if (searchedRecipe === "") {
        const response = await fetch(
          "https://www.themealdb.com/api/json/v1/1/search.php?s="
        );
        const data = await response.json();
        const recipes = addIngredients(data);
        setRecipes(recipes || []);
      } else {
        const response = await fetch(
          `https://www.themealdb.com/api/json/v1/1/search.php?s=${searchedRecipe}`
        );
        const data = await response.json();
        const recipes = addIngredients(data);
        setRecipes(recipes || []);
      }
    } catch (error) {
      console.error("Error searching for recipe:", error);
    }
    setIsLoading(false);
  };
  return (
    <>
      <form className="App-input-container" onSubmit={searchRecipes}>
        <input
          className="App-search-input"
          placeholder="Enter your search"
          onChange={({ target }) => setSearchedRecipe(target.value)}
        />

        <button className="App-search-button" type="submit">
          Search
        </button>
      </form>

      {loading ? (
        <div className="body-preloader">
          <div className="circle-preloader"></div>
        </div>
      ) : (
        <>
          <div className="recipe-list__card">
            {recipes.map((recipe) => (
              <RecipeCard
                key={recipe.idMeal}
                recipe={recipe}
                onImageClick={handleCardClick}
                onClose={() => {}}
              />
            ))}
          </div>
          {selectedRecipe && (
            <RecipeInstruction
              recipe={selectedRecipe}
              onClose={handleCloseCard}
            />
          )}
        </>
      )}
    </>
  );
}
export default RecipeList;
