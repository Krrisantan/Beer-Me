import  axios from 'axios';
import './ConfirmationPage';
import './ConfirmationPage.scss'
import { Link, useLocation } from 'react-router-dom';
import { useState, useEffect } from 'react';


function ConfirmationPage({orderItems}) {
    console.log(orderItems)
    const location = useLocation();
    const {selectedDrinkOption, drinkOrderItems } = location.state;
    console.log(selectedDrinkOption);

    const totalDrinkOrder = new URLSearchParams(location.search).get("totalDrinkOrder");

    // const {selectedFoodOption,orderItem} = location.state;
    // console.log(selectedFoodOption);

const submitHandler = async (e) => {
    e.preventDefault();
    console.log('Food should be added');
    // const getFoodMenuItem = async () => {
        try {
            const response = await axios.post("http://localhost:8080/ordersRoutes/orders", {
                orderItem: drinkOrderItems,
                quantity: selectedDrinkOption
                // order: {orderItems}
            })
            console.log("Order confirmed", response.data);
        } catch (error) {
           console.error("Failed to confirm order", error); 
        }
    }


    return (
        <div>
This is the Confirmation Page!

<form>
    <h2>Your order</h2>
    <ul>
        <li>
            {orderItems && orderItems.length > 0 ? (
                orderItems.map((item, index) => (
                    <p key={index}> 
    Order placed for {item.name}, quantity {selectedDrinkOption}, {totalDrinkOrder}
                    </p>
                ))
            ) : (
                <p>No items ordered</p>
            )}
{/* <p>Order placed for (DRINKS) quantity {selectedDrinkOption}</p> */}

        </li>
    </ul>
</form>

<Link to="/">
               <button type='submit'
                onClick={submitHandler}
                >CONFIRM</button>
                </Link>
<Link to="/">
               <button>CANCEL</button>
                </Link>


        </div>
    )
}

export default ConfirmationPage;