import { useState, useEffect } from "react";
import Header from "./components/Header";
import FoodCard from "./components/foodCard";
import "./styles.css";

export default function App() {
  const [recipes, setRecipes] = useState([]);
  const [search, setSearch] = useState("chicken");

  useEffect(() => {
    getRecipes();
  }, []);

  async function getRecipes() {
    const response = await fetch(
      `https://api.edamam.com/search?q=${search}&app_id=${process.env.REACT_API_ID}&app_key=${process.env.REACT_API_KEY}`
    );
    const data = await response.json();
    setRecipes(data.hits);
  }
  return (
    <div className="App">
      <Header search={search} setSearch={setSearch} />

      <FoodCard recipes={recipes} />
    </div>
  );
}
