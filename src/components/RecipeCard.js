import "../blocks/recipeCard.css";
import ClosePopupIcon from "../images/closepopupicon.png";

function RecipeCard({ recipe, onClose, onImageClick }) {
  return (
    <div className="recipe-card">
      <div className="recipe__button-close">
        <img src={ClosePopupIcon} alt="icon close" onClick={onClose} />
      </div>
      <img
        className="recipe-img"
        src={recipe.strMealThumb}
        alt={recipe.strMeal}
        onClick={() => onImageClick(recipe)}
      />
      <h3 className="recipe-card__title">{recipe.strMeal}</h3>
    </div>
  );
}

export default RecipeCard;
