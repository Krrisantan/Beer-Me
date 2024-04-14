import './App.scss';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { Link } from 'react-router-dom';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import HomePage from './pages/HomePage/HomePage';
import DrinksMenu from './pages/DrinksMenu/DrinksMenu';
import FoodMenu from './pages/FoodMenu/FoodMenu';
import ConfirmationPage from './pages/ConfirmationPage/ConfirmationPage';
import { useEffect, useState } from 'react';
import axios from 'axios';

function App() {

  const [foodMenuItem, setFoodMenuItem] = useState([]);
  const [orderItems, setOrderItems] = useState([])
  
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


  const [drinkMenuItem, setDrinkMenuItem] = useState([]);
  
  useEffect(() => {
      const getDrinkMenuItem = async () => {
          try {
              const response = await axios.get("http://localhost:8080/drinksRoutes")
              const drinkData = response.data;
              setDrinkMenuItem(drinkData);
          } catch (error) {
              console.error("Failed to fetch drinks menu list: ", error);
          }
      }
      getDrinkMenuItem();
  }, []);

  // THIS is an ADDITON a la BOBO




  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/DrinksMenu" element={<DrinksMenu drinkMenuItem={drinkMenuItem} setOrderItems={setOrderItems} orderItems={orderItems}/>} />
          <Route path="/FoodMenu" element={<FoodMenu foodMenuItem={foodMenuItem} setOrderItems={setOrderItems}orderItems={orderItems}/>} />
          <Route path="/ConfirmationPage" element={<ConfirmationPage orderItems={orderItems} />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
