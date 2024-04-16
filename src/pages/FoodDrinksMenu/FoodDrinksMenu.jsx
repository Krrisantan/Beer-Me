import "./FoodDrinksMenu.scss";
import { Link } from "react-router-dom";
import { useState } from "react";

function FoodDrinksMenu({ foodDrinksMenuItem, orderItems, setOrderItems }) {
  const [foodDrinksQuantities, setFoodDrinksQuantities] = useState("");
  const [selectedFoodDrinksOption, setSelectedFoodDrinksOption] = useState("0");
  const [foodDrinksOrderItems, setFoodDrinksOrderItems] = useState([]);

  const handleFoodDrinksQuantityChange = (id, quantity) => {
    console.log(id);
    console.log(quantity);
    setFoodDrinksQuantities(quantity);
    setSelectedFoodDrinksOption(quantity);
    const selectedFoodDrinks = foodDrinksMenuItem.find(
      (item) => item.id === id
    );
    const existingFoodDrinksIndex = foodDrinksMenuItem.findIndex(
      (item) => item.id === id
    );
    if (existingFoodDrinksIndex !== -1) {
      foodDrinksMenuItem[existingFoodDrinksIndex].ordered = true;
      foodDrinksMenuItem[existingFoodDrinksIndex].quantity = quantity;
    }
    console.log(selectedFoodDrinks);
    setFoodDrinksOrderItems(
      foodDrinksMenuItem.filter((item) => item.ordered === true)
    );
    setFoodDrinksOrderItems([...orderItems, selectedFoodDrinks]);
  };
  // const handleFoodQuantityChange = (id, quantity) => {
  //   setFoodQuantities((prevQuantities) => ({
  //     ...prevQuantities,
  //     [id]: quantity,
  //   }));
  // };

  const getFoodDrinksQuantity = (id) => {
    return foodDrinksQuantities[id] || "0";
  };

  const handleFoodDrinksOrder = (id) => {
    const selectedFoodDrinks = foodDrinksMenuItem.find(
      (item) => item.id === id
    );
    const existingFoodDrinksIndex = foodDrinksMenuItem.findIndex(
      (item) => item.id === id
    );
    if (existingFoodDrinksIndex !== -1) {
      foodDrinksMenuItem[existingFoodDrinksIndex].ordered = true;
      foodDrinksMenuItem[existingFoodDrinksIndex].quantity =
        selectedFoodDrinksOption;
      if (foodDrinksQuantities !== "") {
        foodDrinksMenuItem[existingFoodDrinksIndex].quantity =
          foodDrinksQuantities;
      } else {
        foodDrinksMenuItem[existingFoodDrinksIndex].quantity = 1;
      }
      setFoodDrinksOrderItems(
        foodDrinksMenuItem.filter((item) => item.ordered === true)
      );
      setFoodDrinksOrderItems([...orderItems, selectedFoodDrinks]);
    }
  };

  const removeFoodDrinksOrder = (id) => {
    let removeFoodDrinksOrderedIndex = foodDrinksMenuItem.findIndex(
      (item) => item.id === id
    );
    foodDrinksMenuItem[removeFoodDrinksOrderedIndex].ordered = false;
    setFoodDrinksOrderItems(
      foodDrinksMenuItem.filter((item) => item.ordered === true)
    );
    console.log(orderItems);

    let newFoodDrinksOrderItems = orderItems.filter((item) => item.id !== id);
    console.log(newFoodDrinksOrderItems);
    setOrderItems(newFoodDrinksOrderItems);
  };

  const handleFoodDrinksForm = (event) => {
    console.log(event.target.innerText);
  };

  const totalFoodDrinksOrder = foodDrinksOrderItems.map((item) => (
    <span>{item.name}</span>
  ));

  return (
    <div>
      {/* This is the Food & Drinks Menu!
      <Link to="/">
        <button>HOME</button>
      </Link> */}
      <form>
        <ul>
          {foodDrinksMenuItem?.map((food) => (
            <li
              key={`/FoodDrinksMenu/${food.id}`}
              onSubmit={handleFoodDrinksForm}
            >
              <div className="menu__item-container">
                <div className="menu__pic">
                  <img
                    src={food.image}
                    alt={food.name}
                    className="foodMenu__pic"
                  />
                </div>
                <div className="menu__details">
                  <h3>{food.name}</h3>
                  <h4>{food.description}</h4>
                  <p>{food.price}</p>
                </div>
                <div className="menu__checkbox-quantity">
                  <input
                    type="checkbox"
                    onChange={(event) => {
                      console.log(event.target.checked);
                      if (event.target.checked) {
                        handleFoodDrinksOrder(food.id);
                      } else {
                        removeFoodDrinksOrder(food.id);
                      }
                    }}
                  />
                  <label>
                    <select
                      onChange={(e) =>
                        // on={(e) =>
                        // handleFoodQuantityChange(food.id, e.target.value)
                        handleFoodDrinksQuantityChange(food.id, e.target.value)
                      }
                    >
                      <option value="0">Select option</option>
                      <option value="1">1</option>
                      <option value="2">2</option>
                      <option value="3">3</option>
                      <option value="4">4</option>
                      <option value="5">5</option>
                    </select>
                  </label>
                </div>
              </div>
            </li>
          ))}
        </ul>
      </form>
      <div className="foodOrder">
        <p>
          Order Item:
          {totalFoodDrinksOrder}
        </p>
        <p>Selected quantity: {selectedFoodDrinksOption}</p>
        <p>Selected quantity: {foodDrinksQuantities}</p>
        <Link
          to="/ConfirmationPage"
          state={{
            selectedFoodDrinksOption: selectedFoodDrinksOption,
            foodDrinksOrderItems: foodDrinksOrderItems,
            foodDrinksQuantities: foodDrinksQuantities,
          }}
          totalFoodDrinksOrder={totalFoodDrinksOrder}
          foodDrinksOrderItems={foodDrinksOrderItems}
        >
          <button>Confirm</button>
        </Link>
        <Link to="/">
          <button>Cancel</button>
        </Link>
      </div>
    </div>
  );
}

export default FoodDrinksMenu;
