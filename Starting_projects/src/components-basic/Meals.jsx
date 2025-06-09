import React, { useEffect } from "react";
import axios from "axios";

const Meals = () => {
  const [meals, setMeals] = React.useState([]);

  useEffect(() => {
    axios
      .get("https://www.themealdb.com/api/json/v1/1/filter.php?c=Seafood")
      .then((res) => {
        // console.log(res.data.meals);
        setMeals(res.data.meals);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  const itemsList = meals.map(({ strMeal, strMealThumb, idMeal }) => {
    return (
      <section key={idMeal} className="flex items-center mb-4">
        <img
          src={strMealThumb}
          alt=""
          className="w-24 h-24 rounded-full mr-4"
        />
        <section>
          <p className="text-lg font-bold">{strMeal}</p>
          <p className="text-gray-600">${idMeal}</p>
        </section>
      </section>
    );
  });

  return <div className="flex flex-col">{itemsList}</div>;
};

export default Meals;
