import ClosePopupIcon from "../images/closepopupicon.png";
import "../blocks/recipeInstruction.css";

function RecipeInstruction({ recipe, onClose }) {
  return (
    <div className={`recipe-card__instructions ${recipe ? "visible" : ""}`}>
      <div className="overlay"></div>
      <img
        src={ClosePopupIcon}
        alt="close icon"
        className="recipe-instruction__close"
        onClick={onClose}
      />
      <div className="recipe-instruction">
        <img
          src={recipe.strMealThumb}
          alt={recipe.strMeal}
          className="recipe-instruction__image"
        />
        <h2>{recipe.strMeal}</h2>
        <div className="recipe-ingredients">
          <ul>
            {recipe.arrayIngredients?.map(({ ingredient, medida }, index) => {
              // Debug: log each ingredient and measure
              console.log(`Ingrediente: ${ingredient}`, `Medida: ${medida}`);
              return (
                <li key={index} className="ingredient-item">
                  {ingredient}
                  {medida && `: ${medida}`}
                </li>
              );
            })}
          </ul>
        </div>
        <p>{recipe.strInstructions}</p>
      </div>
    </div>
  );
}

export default RecipeInstruction;
