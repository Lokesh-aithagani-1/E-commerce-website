import React from 'react';
import './Header.css';
import { NavLink } from 'react-router-dom';
import SearchIcon from '@mui/icons-material/Search';
import ShoppingBasketIcon from '@mui/icons-material/ShoppingBasket';
import { useStateValue } from "./StateProvider";
import { auth } from './firebase';

function Header() {

    const [{basket, user}, dispatch] = useStateValue();

    const handleAuthentication = () => {
        if(user) {
            auth.signOut();
        }
    }

  return (
    <div className='header'>
        <NavLink to="/">
            <img className='header__logo' src='https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwww.logolynx.com%2Fimages%2Flogolynx%2F56%2F56afea50b83164e3e272d4ebeccd94fb.png&f=1&nofb=1'/>
        </NavLink>

        <div className='header__search'>
           <input
           className='header__searchInput' type='text' placeholder='Search....'/> 
           <SearchIcon className='header__searchIcon' />
        </div>

        <div className='header__nav'>
            <NavLink to={!user && '/login'}>
            <div onClick={handleAuthentication} className='header__option'>
                <span className='header__optionLineOne'>Hello {!user ? 'Guest' : user.email} </span>
                <span className='header__optionLineTwo'>{user ? 'Sign Out' : 'Sign In'}</span>
            </div>
            </NavLink> 

            <NavLink to='/orders'>
                <div className='header__option'>
                    <span className='header__optionLineOne'>Returns</span>
                    <span className='header__optionLineTwo'>& Orders</span>
                </div> 
            </NavLink>
            
            <NavLink to="/checkout">
                <div className='header__optionBasket'>
                    <ShoppingBasketIcon />
                    <span className='header__optionLineTwo header__basketCount'>{basket?.length}</span>
                </div>
            </NavLink>
        </div>
    </div>
  )
}

export default Header