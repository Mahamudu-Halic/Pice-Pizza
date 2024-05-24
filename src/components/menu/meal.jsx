import cafe from "../../assets/Cafe.png";

const Meal = ({ meal = {}, setCurrentMeal, currentMeal }) => {
  const { icon = cafe, title = "Breakfast", category = "Popular" } = meal;

  return (
    <div
      className={`meal ${
        currentMeal === title ? "activeMeal" : "inActiveMeal"
      }`}
      onClick={() => {
        setCurrentMeal(title);
      }}
    >
      <div className="mealContainer">
        <div className="mealImage">
          <img src={icon} alt={title} />
        </div>

        <div className="mealContent">
          <p className="mealCategory">{category}</p>
          <p className="mealTitle">{title}</p>
        </div>
      </div>
    </div>
  );
};

export default Meal;
