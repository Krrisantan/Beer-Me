import "./App.scss";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import HomePage from "./pages/HomePage/HomePage";
import FoodDrinksMenu from "./pages/FoodDrinksMenu/FoodDrinksMenu";
import ConfirmationPage from "./pages/ConfirmationPage/ConfirmationPage";
import { useEffect, useState } from "react";
import axios from "axios";

function App() {
  const [foodDrinksMenuItem, setFoodDrinksMenuItem] = useState([]);
  const [orderItems, setOrderItems] = useState([]);

  useEffect(() => {
    const getFoodDrinksMenuItem = async () => {
      try {
        const response = await axios.get(
          "http://localhost:8888/foodDrinksRoutes"
        );
        const foodDrinksData = response.data;
        setFoodDrinksMenuItem(foodDrinksData);
      } catch (error) {
        console.error("Failed to fetch food menu list: ", error);
      }
    };
    getFoodDrinksMenuItem();
  }, []);

  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route
            path="/FoodDrinksMenu"
            element={
              <FoodDrinksMenu
                foodDrinksMenuItem={foodDrinksMenuItem}
                setOrderItems={setOrderItems}
                orderItems={orderItems}
              />
            }
          />
          <Route
            path="/ConfirmationPage"
            element={<ConfirmationPage orderItems={orderItems} />}
          />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
