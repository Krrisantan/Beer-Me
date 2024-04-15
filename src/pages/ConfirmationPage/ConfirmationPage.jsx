import axios from "axios";
import "./ConfirmationPage.scss";
import { Link, useLocation, useNavigate } from "react-router-dom";

function ConfirmationPage({ orderItems, totalDrinkOrder }) {
  const navigate = useNavigate();
  console.log(orderItems);
  const location = useLocation();
  const { selectedDrinkOption, drinkOrderItems } = location.state;
  console.log(selectedDrinkOption);
  console.log(drinkOrderItems);
  console.log(drinkOrderItems[0].name);
  console.log(drinkOrderItems[0].quantity);
  console.log(drinkOrderItems[0].table);

  console.log(drinkOrderItems, "drink order items");
  console.log(totalDrinkOrder);

  const submitHandler = async (e) => {
    e.preventDefault();
    console.log(e.target);
    console.log("Food should be added");

    try {
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
        console.log("Order confirmed", response.data);
        navigate("/");
      }
    } catch (error) {
      console.error("Failed to confirm order", error);
    }
  };

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
                  Order placed for {item.name}, quantity {selectedDrinkOption},
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

export default ConfirmationPage;
