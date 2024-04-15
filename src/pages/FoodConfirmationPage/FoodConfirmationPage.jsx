// import axios from "axios";
// import "./FoodConfirmationPage.scss";
// import { Link, useLocation, useNavigate } from "react-router-dom";

// function FoodConfirmationPage({ foodOrderItems, totalFoodOrder }) {
//   const navigate = useNavigate();
//   console.log(foodOrderItems);
//   const location = useLocation();
//   const { selectedFoodOption, foodOrderItems } = location.state;
//   console.log(selectedFoodOption);
//   console.log(foodOrderItems);
//   //   console.log(foodOrderItems[0].name);
//   //   console.log(foodOrderItems[0].quantity);
//   //   console.log(foodOrderItems[0].table);

//   // const totalDrinkOrder = new URLSearchParams(location.search).get("totalDrinkOrder");

//   // const {selectedFoodOption,orderItem} = location.state;
//   // console.log(selectedFoodOption);

//   console.log(foodOrderItems, "food order items");
//   console.log(totalFoodOrder);

//   const submitHandler = async (e) => {
//     e.preventDefault();
//     console.log(e.target);
//     console.log("Food should be added");
//     // const getFoodMenuItem = async () => {
//     try {
//       for (let i = 0; i < foodOrderItems.length; i++) {
//         const foodName = foodOrderItems[i].name;
//         console.log(foodName);
//         const foodNumber = foodOrderItems[i].quantity;
//         const foodTable = foodOrderItems[i].table;
//         const response = await axios.post(
//           "http://localhost:8080/ordersRoutes/orders",
//           {
//             // orderItem: drinkOrderItems.map(item => ({ ...item, name: item.name })),
//             quantity: foodNumber,
//             name: foodName,
//             table_number: `3`,

//             // order: {orderItems}
//           }
//         );
//         console.log("Order confirmed", response.data);
//         navigate("/");
//       }
//       // const response = await axios.post("http://localhost:8080/ordersRoutes/orders", {
//       //     // orderItem: drinkOrderItems.map(item => ({ ...item, name: item.name })),
//       //     quantity: selectedDrinkOption,
//       //     name: "{item.name}"

//       //     // order: {orderItems}
//       // })
//       // console.log("Order confirmed", response.data);
//     } catch (error) {
//       console.error("Failed to confirm order", error);
//     }
//     // if (drinkOrderItems) {
//     //     try {
//     //         const response = await axios.post("http://localhost:8080/ordersRoutes/orders", {
//     //             // Include name along with order data
//     //             orderItem: drinkOrderItems.map(item => ({ ...item, name: item.name })),
//     //             quantity: selectedDrinkOption
//     //         })
//     //         console.log("Order confirmed", response.data);
//     //     } catch (error) {
//     //        console.error("Failed to confirm order", error);
//     //     }
//     // } else {
//     //     console.error("drinkOrderItems is undefined");
//     // }
//   };

//   return (
//     <div>
//       This is the Confirmation Page!
//       <form>
//         <h2>Your order</h2>
//         <ul>
//           <li>
//             {foodOrderItems && foodOrderItems.length > 0 ? (
//               foodOrderItems.map((item, index) => (
//                 <p key={index} onClick={submitHandler}>
//                   Order placed for {item.name}, quantity {selectedFoodOption},
//                   {/* {totalDrinkOrder} */}
//                 </p>
//               ))
//             ) : (
//               <p>No items ordered</p>
//             )}
//             {/* <p>Order placed for (DRINKS) quantity {selectedDrinkOption}</p> */}
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

// export default FoodConfirmationPage;
