import React from "react";
import './Header.css';
import SearchIcon from '@mui/icons-material/Search';
import BasketIcon from '@mui/icons-material/ShoppingBasket'
import { Link } from "react-router-dom";
import { useStateValue } from "./StateProvider";
import { auth } from "./firebase";
const Header = () => {
  const [{ basket, user }, dispatch] = useStateValue();
  const handleAuthenticaton = () => {
    if (user) {
      auth.signOut();
    }
  }
  return(
<div className="head">
 <Link to='/'> <img src="https://logos-world.net/wp-content/uploads/2020/04/Amazon-Emblem.jpg" alt="" /></Link>
  <div className="search-box">
   <input type="text" />
   <SearchIcon className="search-icon"/>
  </div>
  <div className="options">
    <div  className="nav-options">
        
       <Link to={!user && '/login'}>
          <div onClick={handleAuthenticaton} className="header__option">
            <span className="line1">Hello {!user ? 'Guest' : user.email}</span> <br />
            <span className="names">{user ? 'Sign Out' : 'Sign In'}</span>
          </div>
        </Link>
    </div>

    <div className="nav-options"> <Link to='/orders'>
          <div className="header__option">
            <span className="line1">Returns</span> <br />
            <span className="names">& Orders</span>
          </div>
        </Link>
    </div>
    <div className="nav-options"> 
     <div >your</div>
     <span className="names">Prime</span> 
    </div>
    <div className="nav-options2">
    <Link to="/checkout">
          
            <BasketIcon />
            <span className="order-number">
              {basket?.length}
            </span>
          
        </Link>
    </div>
 </div>
</div>);
};

export default Header;
