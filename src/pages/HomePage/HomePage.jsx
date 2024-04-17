import "./HomePage.scss";
import { Link } from "react-router-dom";
import heropic from "../../assets/heropic1.jpg";

function HomePage() {
  return (
    <div className="homepage">
      <div className="homepage__hero">
        <img src={heropic} alt="beer toasting" className="homepage__heropic" />
        <div className="homepage__buttons-container">
          <Link to="/FoodDrinksMenu">
            <button className="homepage__button">MENU</button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default HomePage;
