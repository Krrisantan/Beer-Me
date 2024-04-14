import './HomePage.scss';
import FoodMenu from '../FoodMenu/FoodMenu';
import { useParams, Link } from "react-router-dom";
import { useState, useEffect } from 'react';
import axios from 'axios';


function HomePage() {

    return (
        <div className='homePage'>
            This is the Home Page!

            <img src="https://images.unsplash.com/photo-1441985969846-3e7c90531139?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8YmVlcnxlbnwwfDB8MHx8fDA%3D" alt="bar" className='homepage__background-image' />

            <Link to="/FoodMenu">
                <button>FOOD</button>
            </Link>
            <Link to="/DrinksMenu">
                <button>DRINKS</button>
            </Link>

        </div>
    )
}

export default HomePage;