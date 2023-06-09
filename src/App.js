import { useState, useEffect } from "react";
import Header from "./components/Header";
import FoodCard from "./components/foodCard";
import "./styles.css";

export default function App() {
  const [recipes, setRecipes] = useState([]);
  const [search, setSearch] = useState("");
  const [query, setQuery] = useState("chicken");
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    getRecipes();
  }, [query]);

  async function getRecipes() {
    setIsLoading(true);
    const response = await fetch(
      `https://api.edamam.com/search?q=${query}&app_id=${process.env.REACT_API_ID}&app_key=${process.env.REACT_API_KEY}`
    );
    const data = await response.json();
    setRecipes(data.hits);
    setIsLoading(false);
  }
  return (
    <div className="App">
      <Header
        search={search}
        setQuery={setQuery}
        setSearch={setSearch}
        isLoading={isLoading}
      />

      <FoodCard recipes={recipes} isLoading={isLoading} />
    </div>
  );
}
