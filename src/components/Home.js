import { Link } from "react-router-dom";
import "./Home.css"; // Import the CSS file

const Home = () => {
  return (
    <div className="home-container">
      <h1>Welcome to the Library Management System 📚</h1>
      <p>Manage and explore books efficiently.</p>
      <div className="button-container">
        <Link to="/books">
          <button className="custom-button">View Books</button>
        </Link>
        <Link to="/admin/login">
          <button className="custom-button">Admin Login</button>
        </Link>
      </div>
    </div>
  );
};

export default Home;
