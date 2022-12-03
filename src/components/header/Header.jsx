import { useState } from 'react';
import logo from '../../assets/images/logo.png';
import { HiOutlineLocationMarker } from "react-icons/hi";
import { IoMdArrowDropdown } from "react-icons/io";
import { FiSearch } from "react-icons/fi";
import "./Header.css";
import { BsCart2 } from "react-icons/bs";
import { useTranslation } from 'react-i18next';
import { RiArrowUpSFill } from 'react-icons/ri';
import flags from '../../data/lang-flags.json';
import { Link } from 'react-router-dom';

function Header({ setIsNavbarSearchActive }) {
  const [selectedOption, setSelectedOption] = useState("all");
  const [activeLangHover, setactiveLangHover] = useState(false);
  const { i18n } = useTranslation();
  const { t } = useTranslation();
  const changeWebsiteLang = (e) => {
    setactiveLangHover(false);
    i18n.changeLanguage(e || "uz");
  }

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
          <p>{t("header.delivery__label")}</p>
          <b>{t("header.country")}</b>
        </div>
      </div>
      <div className="header__search-wrapper">
        <select className="search__select" style={selectedOption.length <= 7 ? { width: `${selectedOption.length * 14}px` } : { width: `${selectedOption.length * 10}px` }} onChange={(e) => { setSelectedOption(e.target.value) }}>
          <option value="all">{t("header.select__all")}</option>
          <option value="laptops">{t("header.select__laptops")}</option>
          <option value="personal care">{t("header.select__personal")}</option>
          <option value="toys & babies">{t("header.select__toys")}</option>
        </select>
        <input type="text" className="search__input" onBlur={() => { setIsNavbarSearchActive(false) }} onFocus={() => { setIsNavbarSearchActive(true) }} />
        <button>
          <FiSearch />
        </button>
      </div>
      <div className="header__lang-wrapper" onMouseLeave={() => setactiveLangHover(false)} onMouseEnter={() => setactiveLangHover(true)}>
        <img src={flags[window.localStorage.getItem('lang')]} alt="" />
        <strong>{window.localStorage.getItem('lang') ? window.localStorage.getItem('lang').toUpperCase() : 'UZ'}</strong>
        <IoMdArrowDropdown className='header__lang-nawarrow'></IoMdArrowDropdown>
        <div className={activeLangHover ? "header__lang-bar" : "header__lang-bar-hidden"}>
          <RiArrowUpSFill className='header__lang-arrow-icon' />
          <ul className='header__lang-select'>
            <li onClick={() => changeWebsiteLang('en')}>English - EN</li>
            <li onClick={() => changeWebsiteLang('ru')}>Russian - RU</li>
            <li onClick={() => changeWebsiteLang('uz')}>Uzbek - UZ</li>
          </ul>
        </div>
      </div>
      <div className='header__signin-wrapper'>
        <Link to="/login">
          <small className='header__small'>{t("header.sing__in")}</small>
          <div className="header__signin-accountlist">
            <b className='header__bold'>{t("header.account__list")}</b>
            <IoMdArrowDropdown className='header__signin-nawarrrow'></IoMdArrowDropdown>
          </div>
        </Link>
      </div>
      <div className="header__order-wrapper">
        <small className='header__small'>{t("header.returns")}</small>
        <b className='header__bold'>{t("header.orders")}</b>
      </div>
      <div className="header__cart-wrapper">
        <div className="header__cart-items">
          <BsCart2 className='header__cart-icon'></BsCart2>
          <b>0</b>
        </div>
        <b className='header__bold'>{t("header.cart")}</b>
      </div>

    </header >
  );
}

export default Header;
