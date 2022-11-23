import { useState } from 'react';
import logo from '../../assets/images/logo.png';
import { HiOutlineLocationMarker } from "react-icons/hi";
import { IoMdArrowDropdown } from "react-icons/io";
import { FiSearch } from "react-icons/fi";
import "./Header.css";
import flag from "../../assets/images/americaFlag.webp";
import { BsCart2 } from "react-icons/bs";

function Header({ setIsNavbarSearchActive }) {
  const [selectedOption, setSelectedOption] = useState("all");
  return (
    <header className="main-header">
      <div className="header__logo-wrapper">
        <a href="/" className="logo__link">
          <img className="header__logo" src={logo} alt="" />
        </a>
      </div>
      <div className="header__delivery-address">
        <HiOutlineLocationMarker className="address-icon" />
        <div className="delivery__location">
          <p>Delivery to</p>
          <b>Uzbekistan</b>
        </div>
      </div>
      <div className="header__search-wrapper">
        <select className="search__select" style={selectedOption.length <= 7 ? { width: `${selectedOption.length * 14}px` } : { width: `${selectedOption.length * 10}px` }} onChange={(e) => { setSelectedOption(e.target.value) }}>
          <option value="all">All</option>
          <option value="laptops">Laptops</option>
          <option value="personal care">Personal Care</option>
          <option value="toys & babies">Toys and Babies</option>
        </select>
        <input type="text" className="search__input" onBlur={() => { setIsNavbarSearchActive(false) }} onFocus={() => { setIsNavbarSearchActive(true) }} />
        <button>
          <FiSearch />
        </button>
      </div>
      <div className="header__lang-wrapper">
        <img src={flag} alt="" />
        <strong>EN</strong>
        <IoMdArrowDropdown className='header__lang-nawarrow'></IoMdArrowDropdown>
      </div>
      <div className='header__signin-wrapper'>
        <small className='header__small'>Hello, sign in</small>
        <div className="header__signin-accountlist">
          <b className='header__bold'>Account & Lists</b>
          <IoMdArrowDropdown className='header__signin-nawarrrow'></IoMdArrowDropdown>
        </div>
      </div>
      <div className="header__order-wrapper">
        <small className='header__small'>Returns</small>
        <b className='header__bold'>& Orders</b>
      </div>
      <div className="header__cart-wrapper">
        <div className="header__cart-items">
          <BsCart2 className='header__cart-icon'></BsCart2>
          <b>0</b>
        </div>
        <b className='header__bold'>Cart</b>
      </div>

    </header>
  );
}

export default Header;
