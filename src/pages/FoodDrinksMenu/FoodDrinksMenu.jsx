import "./FoodDrinksMenu.scss";
import { Link } from "react-router-dom";
import { useState } from "react";

function FoodDrinksMenu({ foodDrinksMenuItem, orderItems, setOrderItems }) {
  const [foodDrinksOrderItems, setFoodDrinksOrderItems] = useState([]);

  const handleFoodDrinksOrder = (id) => {
    const selectedFoodDrinks = foodDrinksMenuItem.find(
      (item) => item.id === id
    );
    console.log(selectedFoodDrinks);
    const existingFoodDrinksIndex = foodDrinksMenuItem.findIndex(
      (item) => item.id === id
    );
    console.log(existingFoodDrinksIndex);
    if (existingFoodDrinksIndex !== -1) {
      foodDrinksMenuItem[existingFoodDrinksIndex].ordered = true;
      setFoodDrinksOrderItems(
        foodDrinksMenuItem.filter((item) => item.ordered === true)
      );
      setOrderItems([...orderItems, selectedFoodDrinks]);
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
    <div className="menu">
      <form className="menu__form">
        <ul className="menu__ul">
          {foodDrinksMenuItem?.map((food) => (
            <li
              className="menu__li"
              key={`/FoodDrinksMenu/${food.id}`}
              onSubmit={handleFoodDrinksForm}
            >
              <div className="menu__item-container">
                <div className="menu__pic-container">
                  <img src={food.image} alt={food.name} className="menu__pic" />
                </div>
                <div className="menu__details">
                  <h3 className="menu__name">{food.name}</h3>
                  <p className="menu__price">${food.price}</p>
                  <input
                    className="menu__checkbox"
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
                </div>
              </div>
            </li>
          ))}
        </ul>
      </form>
      <div className="menu__order--container">
        <div className="menu__order">
          <p className="menu__order--item">
            Order Item : {"  "}
            {orderItems.map((item, index) => (
              <span key={index} className="menu__order--selection">
                {item.name},
              </span>
            ))}
          </p>
          {/* {totalFoodDrinksOrder}
          </p> */}
          <Link
            to="/ConfirmationPage"
            state={{
              foodDrinksOrderItems: foodDrinksOrderItems,
            }}
            totalFoodDrinksOrder={totalFoodDrinksOrder}
            foodDrinksOrderItems={foodDrinksOrderItems}
          >
            <button className="menu__button">CONFIRM</button>
          </Link>
          <Link to="/">
            <button className="menu__button">cancel</button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default FoodDrinksMenu;
