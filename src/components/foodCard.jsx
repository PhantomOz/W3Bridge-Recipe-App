import React from "react";
import "./foodCard.css";
function FoodCard({ recipes, isLoading }) {
  return (
    <>
      {isLoading && (
        <div className="lds-ellipsis">
          <div></div>
          <div></div>
          <div></div>
          <div></div>
        </div>
      )}
      <div className="FoodCard">
        {recipes?.map((food, index) => (
          <div key={index} className="Container">
            <img src={food.recipe.image} alt="foodImage" />
            <div className="content">
              <p className="title">{food.recipe.label}</p>
              <p className="subs">Ingredients: </p>
              <ol>
                {food.recipe.ingredientLines.map((il, index) => (
                  <li key={index}>{il}</li>
                ))}
              </ol>
              <p className="subs">Health Labels</p>
              <div className="healthLabel">
                {food.recipe.healthLabels.map((labels, index) => (
                  <span key={index}>{labels}</span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}

export default FoodCard;
