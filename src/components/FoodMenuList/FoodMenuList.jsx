import './FoodMenuList.scss';
import FoodMenu from '../FoodMenu/FoodMenu';
import { useParams, Link } from "react-router-dom";
import { useState, useEffect } from 'react';
import axios from 'axios';

function FoodMenuList() {

    const [foodMenuItem, setFoodMenuItem] = useState([]);

    useEffect(() => {
        const getFoodMenuItem = async () => {
            try {
                const response = await axios.get("http://localhost:8080/foodRoutes")
                const foodData = response.data;
                setFoodMenuItem(foodData);
            } catch (error) {
                console.error("Failed to fetch food menu list: ", error);
            }
        }
        getFoodMenuItem();
    }, []);

    return (
        <div>
                <ul>
                    {foodMenuItem.map((food) => (
                        <li key={`/FoodMenu/${food.id}`}>
                            <div>
                                <h3>{food.name}</h3>
                                <p>{food.price}</p>
                            </div>

                        </li>
                    ))}
                </ul>
            </div>
    )
}

export default FoodMenuList;