import axios from "axios";
import "./ConfirmationPage.scss";
import { Link, useLocation, useNavigate } from "react-router-dom";

function ConfirmationPage({
  orderItems,
  // totalDrinkOrder,
  // totalFoodOrder,
  totalFoodDrinksOrder,
}) {
  const navigate = useNavigate();
  console.log(orderItems);
  const location = useLocation();
  const {
    selectedFoodDrinksOption,
    foodDrinksOrderItems,
    foodDrinksQuantities,
  } = location.state;
  console.log(selectedFoodDrinksOption);
  console.log(totalFoodDrinksOrder);
  console.log(foodDrinksOrderItems);
  console.log(foodDrinksQuantities);
  console.log(foodDrinksOrderItems[0].name);
  console.log(foodDrinksOrderItems[0].quantity);
  console.log(foodDrinksOrderItems[0].table);

  console.log(foodDrinksOrderItems, "food & drinks order items");
  console.log(totalFoodDrinksOrder);

  const submitHandler = async (e) => {
    e.preventDefault();
    console.log(e.target);
    console.log("i run");

    try {
      if (selectedFoodDrinksOption && foodDrinksOrderItems) {
        for (let i = 0; i < foodDrinksOrderItems.length; i++) {
          const foodDrinksName = foodDrinksOrderItems[i].name;
          console.log(foodDrinksName);
          const response = await axios.post(
            "http://beerme-4e548aac6e70.herokuapp.com/ordersRoutes/orders",
            {
              name: foodDrinksName,
              table_number: `5`,
            }
          );
          console.log("Food & Drinks Order confirmed", response.data);
          navigate("/");
          return;
        }
      }
      if (foodDrinksOrderItems || selectedFoodDrinksOption) {
        for (let i = 0; i < foodDrinksOrderItems.length; i++) {
          const foodDrinksName = foodDrinksOrderItems[i].name;
          console.log(foodDrinksName);
          const response = await axios.post(
            "http://beerme-4e548aac6e70.herokuapp.com/ordersRoutes/orders",
            {
              name: foodDrinksName,
              table_number: `5`,
            }
          );
          console.log("Food and now Drinks Order confirmed", response.data);
          navigate("/");
          return;
        }
      }
    } catch (error) {
      console.error("Failed to confirm order", error);
    }

    // if (selectedFoodDrinksOption && foodDrinksOrderItems && orderItems) {
    //   return (
    //     <div>
    //       This is the Confirmation Page!
    //       <form>
    //         <h2>Your order</h2>
    //         <ul>
    //           <li>
    //             {orderItems && orderItems.length > 0 ? (
    //               orderItems.map((item, index) => (
    //                 <p key={index} onClick={submitHandler}>
    //                   Order placed for: {item.name}
    //                 </p>
    //               ))
    //             ) : (
    //               <p>No items ordered</p>
    //             )}
    //           </li>
    //         </ul>
    //       </form>{" "}
    //       <button type="submit" onClick={submitHandler}>
    //         CONFIRM
    //       </button>
    //       <Link to="/">
    //         <button>CANCEL</button>
    //       </Link>
    //     </div>
    //   );
    // }
  };

  if (foodDrinksOrderItems || selectedFoodDrinksOption) {
    return (
      <div className="confirmationPage">
        <form className="confirmationPage__form">
          <h1 className="confirmationPage__title">YOUR ORDER</h1>
          <ul className="confirmationPage__ul">
            <li className="confirmationPage__li">
              {foodDrinksOrderItems && foodDrinksOrderItems.length > 0 ? (
                foodDrinksOrderItems.map((item, index) => (
                  <p
                    key={index}
                    onClick={submitHandler}
                    className="confirmationPage__data"
                  >
                    Order placed for:{" "}
                    <span className="confirmationPage__ordered-item">
                      {item.name}
                    </span>
                  </p>
                ))
              ) : (
                <p className="confirmationPage__noData">No items ordered</p>
              )}
            </li>
          </ul>
        </form>{" "}
        <button
          type="submit"
          onClick={submitHandler}
          className="confirmationPage__button"
        >
          CONFIRM
        </button>
        <Link to="/">
          <button className="confirmationPage__button">CANCEL</button>
        </Link>
      </div>
    );
  }
}

export default ConfirmationPage;
