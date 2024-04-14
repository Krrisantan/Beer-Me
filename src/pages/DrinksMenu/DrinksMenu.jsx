import './DrinksMenu.scss';
import { Link, useParams } from 'react-router-dom';
import axios from 'axios';
import { useState, useEffect } from 'react';
import ConfirmationPage from '../ConfirmationPage/ConfirmationPage';


function DrinksMenu({ drinkMenuItem, orderItems, setOrderItems}) {

    // const drinkConfirmation = (e) => {
    //     e.preventDefault();
    //     console.log('You got some drinks');
    // }
    const [drinkQuantities, setDrinkQuantities] = useState({});
    const [selectedDrinkOption, setSelectedDrinkOption] = useState("0");
    const [drinkOrderItems, setDrinkOrderItems] = useState([]);
// my attempt 
    // const [totalDrinkOrder, setTotalDrinkOrder] = useState([])

    const handleDrinkDropDown = (event) => {
        setSelectedDrinkOption(event.target.value);
    };
    
    
    const handleDrinkQuantityChange = (id, quantity) => {
        setDrinkQuantities(prevQuantities => ({
            ...prevQuantities,
            [id]: quantity
        }));
    };

    const getDrinkQuantity = (id) => {
        return drinkQuantities[id] || "1";
    };

    // const handleDrinkOrder = (id) => {
    //     console.log(drinkMenuItem)
    //     let drinkOrderedIndex = drinkMenuItem.findIndex((item)=> item.id === id )
    //     drinkMenuItem[drinkOrderedIndex].ordered = true
    //     // orderedItem.ordered = true
    //     setDrinkOrderItems(drinkMenuItem.filter((item)=> item.ordered === true ))
    //     console.log(drinkOrderItems)
    // }

// const handleDrinkOrder = (id) => {
//     const selectedDrink = drinkMenuItem.find(item => item.id === id);
//     const existingDrinkIndex = drinkOrderItems.findIndex(item => item.id === id);
//     if (existingDrinkIndex !== -1) {
//         const updatedDrinkOrderItems = [...drinkOrderItems];
//     } else {
//         const updatedDrinkOrderItems = [...drinkOrderItems, {...selectedDrink, quantity: selectedDrinkOption }];
//         setDrinkOrderItems(updatedDrinkOrderItems)
//     }
// };


const handleDrinkOrder = (id) => {
    const selectedDrink = drinkMenuItem.find(item => item.id === id);
   
    const existingIndex = drinkMenuItem.findIndex(item => item.id === id);
    if (existingIndex !== -1) {
        drinkMenuItem[existingIndex].ordered = true
        drinkMenuItem[existingIndex].quantity = selectedDrinkOption;

        setDrinkOrderItems(drinkMenuItem.filter((item)=> item.ordered === true))
        setOrderItems([...orderItems, selectedDrink])
        console.log(orderItems)
    }
};


    const removeDrinkOrder = (id)=>{
        let removeDrinkOrderedIndex = drinkMenuItem.findIndex((item)=> item.id === id )
        drinkMenuItem[removeDrinkOrderedIndex].ordered = false
        setDrinkOrderItems(drinkMenuItem.filter((item)=> item.ordered === true ))
        console.log(orderItems)
     
        let newOrderItems = orderItems.filter((item)=> item.id !== id )
            setOrderItems(newOrderItems)
        
    }

    // const [drinkOrderItem, setDrinkOrderItem] = useState('')

    const handleDrinksForm = (event) => {
        console.log(event.target.innerText);
        // setDrinkOrderItem(event.target.innerText)
    }
// my attempt
// const getTotalDrinkOrder = () => {
//     drinkOrderItems.map((item) => (<span>{item.name}</span>));
//     return totalDrinkOrder;
// }

const totalDrinkOrder = 
    drinkOrderItems.map((item) => (<span>{item.name}</span>))

// console.log(totalDrinkOrder);
    
    return (
        <div>
            This is the Drinks Menu!
            <Link to="/">
                <button>HOME</button>
            </Link>
            <form>
                <ul>
                    {drinkMenuItem?.map((drink) => (
                        <li key={`/DrinksMenu/${drink.id}`} onSubmit={handleDrinksForm} >
                            <div className='drinksMenu__item-container'>
                                <img src={drink.image} alt={drink.name} className='drinkMenu__pic' />
                                <h3>{drink.name}</h3>                   
                                <p>{drink.price}</p>
                                <input type="checkbox" onChange={(event)=> {
                                    console.log(event.target.checked)
                                    if(event.target.checked) {
                                    handleDrinkOrder(drink.id)
                                    }else {
                                     removeDrinkOrder(drink.id)
                                    }
                                } }/>
                              
                                <label>
                                    <select 
                                    value={getDrinkQuantity(drink.id)} 
                                    onChange={(e) => handleDrinkQuantityChange(drink.id, e.target.value)}>
                                    {/* <select value={1} onChange={handleDrinkDropDown}> */}
                                        <option value="1" id={drink.id}>1</option>
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
                
                {totalDrinkOrder}
                {/* {drinkOrderItems.map((item) => (<span>{item.name}</span>))} */}
            </p>
            <p>Selected quantity: {selectedDrinkOption} </p>
            <Link to="/ConfirmationPage" 
            state={{ selectedDrinkOption: selectedDrinkOption, orderItems: drinkOrderItems }}
            totalDrinkOrder = {totalDrinkOrder}
                 >
                {/* <button onClick={drinkConfirmation}>Confirm</button> */}
                <button >Confirm</button>
            </Link>

            <Link to="/">
                <button>Cancel</button>
            </Link>
        </div>
    )
}

export default DrinksMenu;