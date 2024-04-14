// import './FoodMenu.scss';
// import { useLocation, Link, useParams } from 'react-router-dom';
// import HomePage from '../HomePage/HomePage';
// import axios from 'axios';
// import { useState, useEffect } from 'react';


// function FoodMenu({ foodMenuItem }) {


//     return (

//         <section>
//             <table>
//                 <thead>
//                     <tr>
//                         <th>ORDER</th>
//                         <th>MEAL</th>
//                         <th>DESCRIPTION</th>
//                         <th>PICTURE</th>
//                         <th>PRICE</th>
//                     </tr>
//                 </thead>
//                 <tbody>
//                     {foodMenuItem.map((food, key) => {
//                         return (
//                             <tr key={key} >
//                                 <td> <img src={food.image} alt="" className='foodMenu__pic' /></td>
//                                 <td>{food.name}</td>
//                                 <td>{food.description}</td>
//                                 <td>{food.price}</td>
//                                 <td><input type="checkbox" name="" id="" />
//                                     {food.ordered}</td>
//                             </tr>
//                         )
//                     })}
//                 </tbody>
//             </table>
//         </section>
//         // <div>
//         //     This is the Food Menu!
//         //     <Link to="/">
//         //         <button>HOME</button>
//         //     </Link>          
//         //         <form>
//         //             <ul>
//         //                 {foodMenuItem?.map((food) => (
//         //                     <li key={`/FoodMenu/${food.id}`} onSubmit={handleFoodForm}>
//         //                         <div className='foodMenu__item-container'>

//         //                             <img src={food.image} alt="" className='foodMenu__pic' />
//         //                             <h3>{food.name}</h3>
//         //                             <h4>{food.description}</h4>
//         //                             <p>{food.price}</p>
//         //                             <input type="checkbox" 
//         //                             // onChange={handleFoodOrder} 
//         //                             name="mycheckbox" value={food.name}/>
//         //                             <label>
//         //                                 <select value={1} onChange={handleFoodDropDown}>
//         //                                     <option value="1">1</option>
//         //                                     <option value="2">2</option>
//         //                                     <option value="3">3</option>
//         //                                     <option value="4">4</option>
//         //                                     <option value="5">5</option>
//         //                                 </select>
//         //                             </label>
//         //                         </div>
//         //                     </li>
//         //                 ))}
//         //             </ul>
//         //         </form>

//         //         <p>Order Item: [] {foodOrderItem}</p>
//         //         <p>Order Item: {orderItem}</p>

//         //         <p>Selected quantity: {selectedFoodOption}</p>

//         //     <Link to="/ConfirmationPage" state={{ selectedFoodOption: selectedFoodOption, orderItem: orderItem }}>
//         //         <button>Confirm</button>
//         //     </Link>
//         //     <Link to="/">
//         //         <button>Cancel</button>
//         //     </Link>
//         // </div>
//     )
// }

// export default FoodMenu;


//THIS IS THE CODE THAT WASN'T WORKING RIGHT

import './FoodMenu.scss';
import { useLocation, Link, useParams } from 'react-router-dom';
import HomePage from '../HomePage/HomePage';
import axios from 'axios';
import { useState, useEffect } from 'react';


function FoodMenu({ foodMenuItem, orderItems, setOrderItems}) {
    console.log(orderItems)

    const [foodQuantities, setFoodQuantities] = useState({});
    const [selectedFoodOption, setSelectedFoodOption] = useState("0");
    const [foodOrderItems, setFoodOrderItems] = useState([]);

    const handleFoodDropDown = (event) => {
        // console.log(event.target.value);
        setSelectedFoodOption(event.target.value);
    };

    const handleFoodQuantityChange = (id, quantity) => {
        setFoodQuantities(prevQuantities => ({
            ...prevQuantities,
            [id]: quantity
        }));
    };

    const getFoodQuantity = (id) => {
        return foodQuantities[id] || "1";
    };

    const handleFoodOrder = (id) => {
        const selectedFood = foodMenuItem.find(item => item.id === id);
        // const updatedFoodOrderItems = [...foodOrderItems];
        const existingFoodIndex = foodMenuItem.findIndex(item => item.id === id);
        if (existingFoodIndex !== -1) {
            foodMenuItem[existingFoodIndex].ordered = true
            foodMenuItem[existingFoodIndex].quantity = selectedFoodOption;
        //    updatedFoodOrderItems.push({ ...selectedFood, quantity: selectedFoodOption });
           setFoodOrderItems(foodMenuItem.filter((item)=> item.ordered === true))
        //    console.log(foodOrderItems);
           
           setOrderItems([...orderItems, selectedFood])
            
        } 
        // console.log(foodMenuItem);
        // let foodOrderedIndex = foodMenuItem.findIndex((item)=> item.id === id )
        // foodMenuItem[foodOrderedIndex].ordered = true
        // setFoodOrderItems(foodMenuItem.filter((item)=> item.ordered === true ))
        // console.log(foodOrderItems)
    };

    const removeFoodOrder = (id)=>{
        let removeFoodOrderedIndex = foodMenuItem.findIndex((item)=> item.id === id )
        foodMenuItem[removeFoodOrderedIndex].ordered = false
        setFoodOrderItems(foodMenuItem.filter((item)=> item.ordered === true ))
        console.log(orderItems)

        let newOrderItems = orderItems.filter((item)=> item.id !== id )
        console.log(newOrderItems)
        setOrderItems(newOrderItems)
    }

    const handleFoodForm = (event) => {
        console.log(event.target.innerText);
    }

    const totalFoodOrder = foodOrderItems.map((item) => (<span>{item.name}</span>))

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
                            <div className='foodMenu__item-container'>

                                <img src={food.image} alt={food.name} className='foodMenu__pic' />
                                <h3>{food.name}</h3>
                                <h4>{food.description}</h4>
                                <p>{food.price}</p>
                                <input type="checkbox" onChange={(event)=> {
                                    console.log(event.target.checked)
                                    if(event.target.checked) {
                                    handleFoodOrder(food.id)
                                    }else {
                                        removeFoodOrder(food.id)
                                    }
                                } }/>
                                <label>
                                    <select 
                                    value={getFoodQuantity(food.id)}
                                    // value={1}
                                    // onChange={handleFoodDropDown}>
                                        onChange={(e) => handleFoodQuantityChange(food.id, e.target.value)}>
                                        <option value="1" id={food.id}>1</option>
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

            <p>Order Item: 
                {totalFoodOrder}
                {/* {foodOrderItems.map((item) => (<span>{item.name}</span>))} */}
                </p>
            <p>Selected quantity: {selectedFoodOption}</p>
            <Link to="/ConfirmationPage"
            state={{ selectedFoodOption: selectedFoodOption, orderItems: foodOrderItems }}
            totalFoodOrder = {totalFoodOrder}
            >
                <button>Confirm</button>
            </Link>
            <Link to="/">
                <button>Cancel</button>
            </Link>
        </div>
    )
}

export default FoodMenu;