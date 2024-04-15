import "./FoodMenu.scss";
import { Link } from "react-router-dom";
import { useState } from "react";

function FoodMenu({ foodMenuItem, orderItems, setOrderItems }) {
  const [foodQuantities, setFoodQuantities] = useState({});
  const [selectedFoodOption, setSelectedFoodOption] = useState("0");
  const [foodOrderItems, setFoodOrderItems] = useState([]);

  const handleFoodQuantityChange = (id, quantity) => {
    setFoodQuantities((prevQuantities) => ({
      ...prevQuantities,
      [id]: quantity,
    }));
  };

  const getFoodQuantity = (id) => {
    return foodQuantities[id] || "1";
  };

  const handleFoodOrder = (id) => {
    const selectedFood = foodMenuItem.find((item) => item.id === id);
    const existingFoodIndex = foodMenuItem.findIndex((item) => item.id === id);
    if (existingFoodIndex !== -1) {
      foodMenuItem[existingFoodIndex].ordered = true;
      foodMenuItem[existingFoodIndex].quantity = selectedFoodOption;
      setFoodOrderItems(foodMenuItem.filter((item) => item.ordered === true));
      setFoodOrderItems([...orderItems, selectedFood]);
    }
  };

  const removeFoodOrder = (id) => {
    let removeFoodOrderedIndex = foodMenuItem.findIndex(
      (item) => item.id === id
    );
    foodMenuItem[removeFoodOrderedIndex].ordered = false;
    setFoodOrderItems(foodMenuItem.filter((item) => item.ordered === true));
    console.log(orderItems);

    let newFoodOrderItems = orderItems.filter((item) => item.id !== id);
    console.log(newFoodOrderItems);
    setOrderItems(newFoodOrderItems);
  };

  const handleFoodForm = (event) => {
    console.log(event.target.innerText);
  };

  const totalFoodOrder = foodOrderItems.map((item) => <span>{item.name}</span>);

  return (
    <div>
      This is the Food Menu!
      <Link to="/">
        <button>HOME</button>
      </Link>
      <form>
        <ul>
          {foodMenuItem?.map((food) => (
            <li key={`/FoodMenu/${food.id}`} onSubmit={handleFoodForm}>
              <div className="foodMenu__item-container">
                <img
                  src={food.image}
                  alt={food.name}
                  className="foodMenu__pic"
                />
                <h3>{food.name}</h3>
                <h4>{food.description}</h4>
                <p>{food.price}</p>
                <input
                  type="checkbox"
                  onChange={(event) => {
                    console.log(event.target.checked);
                    if (event.target.checked) {
                      handleFoodOrder(food.id);
                    } else {
                      removeFoodOrder(food.id);
                    }
                  }}
                />
                <label>
                  <select
                    value={getFoodQuantity(food.id)}
                    onChange={(e) =>
                      handleFoodQuantityChange(food.id, e.target.value)
                    }
                  >
                    <option value="1" id={food.id}>
                      1
                    </option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4">4</option>
                    <option value="5">5</option>
                  </select>
                </label>
              </div>
            </li>
          ))}
        </ul>
      </form>
      <p>
        Order Item:
        {totalFoodOrder}
      </p>
      <p>Selected quantity: {selectedFoodOption}</p>
      <Link
        to="/ConfirmationPage"
        state={{
          selectedFoodOption: selectedFoodOption,
          foodOrderItems: foodOrderItems,
        }}
        totalFoodOrder={totalFoodOrder}
        foodOrderItems={foodOrderItems}
      >
        <button>Confirm</button>
      </Link>
      <Link to="/">
        <button>Cancel</button>
      </Link>
    </div>
  );
}

export default FoodMenu;
