import  Brand  from './assets/icons/Donkey_in_Clovelly,_North_Devon,_England.jpeg';
import { NavLink } from 'react-router-dom'
import { FaHome, FaBell } from 'react-icons/fa';
import './NavBar.css'

const NavBar = () => {
    return (
      <nav>
        <div>
        <img src={Brand} alt="App Logo" /> 
        </div>
        <div className="company-name">Easy Care</div>
        <div>
          <ul>
            <li>
              <a href="/home"><FaHome /> Home</a>
            </li>
            <li>
              <a href="/notification"><FaBell /> Notification </a>
            </li>
          </ul>
        </div>
      </nav>
    )
  }
  
  export default NavBar
  