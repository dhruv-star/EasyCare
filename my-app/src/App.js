// import { BrowserRouter } from "react-router-dom";
import Navbar from "./NavBar";
import "./App.css";
import { FaDog, FaUser, FaHeart, FaMicrophone } from "react-icons/fa";
import { GiArchiveResearch } from "react-icons/gi";
import { useState } from "react";
import SearchPage from "./SearchPage";
function App() {
  const [showSearch, setShowSearch] = useState(false);

  const handleSearchClick = () => {
    setShowSearch(true);
  };
  return (
    <div className="app">
      <Navbar />
      {!showSearch && <h1 className="welcome-text">Welcome to EasyCare!</h1>}
      <>
        {showSearch ? null : (
          <div className="button-container">
            <button className="square-button top-left">
              <FaUser />
              <p>User Setting</p>
            </button>

            <button className="square-button top-right">
              <FaDog />
              <p>Dog Info</p>
            </button>

            <button className="square-button bottom-left">
              <FaHeart />
              <p>Favourite</p>
            </button>

            <button className="square-button bottom-right">
              <FaMicrophone />
              <p>Voice Command</p>
            </button>

            <button className="search-button" onClick={handleSearchClick}>
              <GiArchiveResearch />
              <p>Search and Book</p>
            </button>
          </div>
        )}
        {showSearch && <SearchPage />}
      </>
    </div>
  );
}

export default App;
