import React from "react";
import "./foodCard.css";
function FoodCard({ recipes }) {
  return (
    <div className="FoodCard">
      {recipes?.map((food, index) => (
        <div key={index} className="Container">
          <img src={food.recipe.image} alt="foodImage" />
          <div>
            <p>{food.recipe.label}</p>
            <p>
              Ingredients:{" "}
              <ol>
                {food.recipe.ingredientLines.map((il, index) => (
                  <li key={index}>{il}</li>
                ))}
              </ol>
            </p>
            <p>Cooking Instruction</p>
          </div>
        </div>
      ))}
    </div>
  );
}

export default FoodCard;
