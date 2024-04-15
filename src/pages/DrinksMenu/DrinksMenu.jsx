import "./DrinksMenu.scss";
import { Link } from "react-router-dom";
import { useState } from "react";

function DrinksMenu({ drinkMenuItem, orderItems, setOrderItems }) {
  const [drinkQuantities, setDrinkQuantities] = useState({});
  const [selectedDrinkOption, setSelectedDrinkOption] = useState("0");
  const [drinkOrderItems, setDrinkOrderItems] = useState([]);

  const handleDrinkQuantityChange = (id, quantity) => {
    setDrinkQuantities((prevQuantities) => ({
      ...prevQuantities,
      [id]: quantity,
    }));
  };

  const getDrinkQuantity = (id) => {
    return drinkQuantities[id] || "1";
  };

  const handleDrinkOrder = (id) => {
    const selectedDrink = drinkMenuItem.find((item) => item.id === id);
    const existingIndex = drinkMenuItem.findIndex((item) => item.id === id);
    if (existingIndex !== -1) {
      drinkMenuItem[existingIndex].ordered = true;
      drinkMenuItem[existingIndex].quantity = selectedDrinkOption;

      setDrinkOrderItems(drinkMenuItem.filter((item) => item.ordered === true));
      setOrderItems([...orderItems, selectedDrink]);
    }
  };

  const removeDrinkOrder = (id) => {
    let removeDrinkOrderedIndex = drinkMenuItem.findIndex(
      (item) => item.id === id
    );
    drinkMenuItem[removeDrinkOrderedIndex].ordered = false;
    setDrinkOrderItems(drinkMenuItem.filter((item) => item.ordered === true));
    console.log(orderItems);

    let newOrderItems = orderItems.filter((item) => item.id !== id);
    setOrderItems(newOrderItems);
  };

  const handleDrinksForm = (event) => {
    console.log(event.target.innerText);
  };

  const totalDrinkOrder = drinkOrderItems.map((item) => (
    <span>{item.name}</span>
  ));

  return (
    <div>
      This is the Drinks Menu!
      <Link to="/">
        <button>HOME</button>
      </Link>
      <form>
        <ul>
          {drinkMenuItem?.map((drink) => (
            <li
              key={`/DrinksMenu/${drink.id}`}
              onSubmit={handleDrinksForm}
              className="drinksMenu"
            >
              <div className="drinksMenu__item-container">
                <img
                  src={drink.image}
                  alt={drink.name}
                  className="drinksMenu__pic"
                />
                <div className="drinksMenu__name-price">
                  <h3>{drink.name}</h3>
                  <p>{drink.price}</p>
                </div>
                <div className="drinksMenu__checkbox-quantity">
                  <input
                    className="drinksMenu__checkbox"
                    type="checkbox"
                    onChange={(event) => {
                      console.log(event.target.checked);
                      if (event.target.checked) {
                        handleDrinkOrder(drink.id);
                      } else {
                        removeDrinkOrder(drink.id);
                      }
                    }}
                  />

                  <label>
                    <select
                      value={getDrinkQuantity(drink.id)}
                      onChange={(e) =>
                        handleDrinkQuantityChange(drink.id, e.target.value)
                      }
                    >
                      <option value="1" id={drink.id}>
                        1
                      </option>
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
      <p>
        Order Item:
        {totalDrinkOrder}
      </p>
      <p>Selected quantity: {selectedDrinkOption} </p>
      <Link
        to="/ConfirmationPage"
        state={{
          selectedDrinkOption: selectedDrinkOption,
          drinkOrderItems: drinkOrderItems,
        }}
        totalDrinkOrder={totalDrinkOrder}
        drinkOrderItems={drinkOrderItems}
      >
        <button>Confirm</button>
      </Link>
      <Link to="/">
        <button>Cancel</button>
      </Link>
    </div>
  );
}

export default DrinksMenu;
