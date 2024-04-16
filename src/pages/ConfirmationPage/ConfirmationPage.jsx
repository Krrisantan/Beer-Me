import axios from "axios";
import "./ConfirmationPage.scss";
import { Link, useLocation, useNavigate } from "react-router-dom";

function ConfirmationPage({
  orderItems,
  totalDrinkOrder,
  totalFoodOrder,
  //   foodOrderItems,
}) {
  const navigate = useNavigate();
  console.log(orderItems);
  const location = useLocation();
  const {
    selectedDrinkOption,
    drinkOrderItems,
    selectedFoodOption,
    foodOrderItems,
    foodQuantities,
  } = location.state;
  console.log(selectedDrinkOption);
  console.log(drinkOrderItems);
  console.log(foodOrderItems);
  console.log(selectedFoodOption);
  console.log(totalFoodOrder);
  console.log(foodOrderItems);
  console.log(foodQuantities);
  //   console.log(drinkOrderItems[0].name);
  //   console.log(drinkOrderItems[0].quantity);
  //   console.log(drinkOrderItems[0].table);

  console.log(drinkOrderItems, "drink order items");
  console.log(totalDrinkOrder);

  const submitHandler = async (e) => {
    e.preventDefault();
    console.log(e.target);
    console.log("i run");

    try {
      if (selectedDrinkOption && drinkOrderItems) {
        for (let i = 0; i < drinkOrderItems.length; i++) {
          const drinkName = drinkOrderItems[i].name;
          console.log(drinkName);
          const drinkNumber = drinkOrderItems[i].quantity;
          const response = await axios.post(
            "http://localhost:8080/ordersRoutes/orders",
            {
              quantity: drinkNumber,
              name: drinkName,
              table_number: `5`,
            }
          );
          console.log("Drink Order confirmed", response.data);
          navigate("/");
          return;
        }
      }
      if (foodOrderItems || selectedFoodOption) {
        for (let i = 0; i < foodOrderItems.length; i++) {
          const foodName = foodOrderItems[i].name;
          console.log(foodName);
          const foodNumber = foodOrderItems[i].quantity;
          const response = await axios.post(
            "http://localhost:8080/ordersRoutes/orders",
            {
              quantity: foodNumber,
              name: foodName,
              table_number: `5`,
            }
          );
          console.log("Food Order confirmed", response.data);
          navigate("/");
          return;
        }
      }
    } catch (error) {
      console.error("Failed to confirm order", error);
    }

    if (selectedDrinkOption && drinkOrderItems && orderItems) {
      return (
        <div>
          This is the Confirmation Page!
          <form>
            <h2>Your order</h2>
            <ul>
              <li>
                {orderItems && orderItems.length > 0 ? (
                  orderItems.map((item, index) => (
                    <p key={index} onClick={submitHandler}>
                      Order placed for {item.name}, quantity{" "}
                      {selectedDrinkOption},
                    </p>
                  ))
                ) : (
                  <p>No items ordered</p>
                )}
              </li>
            </ul>
          </form>{" "}
          <button type="submit" onClick={submitHandler}>
            CONFIRM
          </button>
          <Link to="/">
            <button>CANCEL</button>
          </Link>
        </div>
      );
    }
  };

  if (
    totalFoodOrder ||
    foodOrderItems ||
    selectedFoodOption ||
    foodQuantities
  ) {
    return (
      <div>
        This is the Confirmation Page!
        <form>
          <h2>Your order</h2>
          <ul>
            <li>
              {foodOrderItems && foodOrderItems.length > 0 ? (
                foodOrderItems.map((item, index) => (
                  <p key={index} onClick={submitHandler}>
                    Order placed for {item.name}, quantity {foodQuantities}
                  </p>
                ))
              ) : (
                <p>No items ordered</p>
              )}
            </li>
          </ul>
        </form>{" "}
        <button type="submit" onClick={submitHandler}>
          CONFIRM
        </button>
        <Link to="/">
          <button>CANCEL</button>
        </Link>
      </div>
    );
  }
}

export default ConfirmationPage;
