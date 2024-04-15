import "./HomePage.scss";
import { Link } from "react-router-dom";
import heropic from "../../assets/heropic1.jpg";

function HomePage() {
  return (
    <div className="homepage">
      <div className="homepage__hero">
        <img src={heropic} alt="beer toasting" className="homepage__heropic" />
        <div className="homepage__buttons-container">
          <Link to="/FoodMenu">
            <button className="homepage__food-button, button">FOOD</button>
          </Link>
          <Link to="/DrinksMenu">
            <button className="homepage__drinks-button, button">DRINKS</button>
          </Link>
        </div>
      </div>
      {/* This is the Home Page! */}
      {/* <img
        src="https://images.unsplash.com/photo-1441985969846-3e7c90531139?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8YmVlcnxlbnwwfDB8MHx8fDA%3D"
        alt="bar"
        className="homepage__background-image"
      /> */}
    </div>
  );
}

export default HomePage;
