import React from 'react';
import c from './Footer.module.css';
import data from '../../data/footer-top-links.json';
import links from '../../data/footer-bottom-links.json';
import { Link } from 'react-router-dom';
import { v4 as uuidv4 } from 'uuid';
import { BsGlobe2 } from 'react-icons/bs';
import { IoMdArrowDropup, IoMdArrowDropdown } from 'react-icons/io';
import logo from '../../assets/images/logo.png';
import flags from '../../data/lang-flags.json';

export const Footer = () => {
  return (
    <>
      <div className={c.topFooter}>
        <div>
          <ul className={c.topFooterLinkWrapper} >
            <li><b>Get to Know Us</b></li>
            {
              data['Get to Know Us'].map(link => <li key={uuidv4()}><Link to='/' className={c.topFooterLink}>{link}</Link></li>)
            }
          </ul>
          <ul className={c.topFooterLinkWrapper} >
            <li><b>Make Money with Us</b></li>
            {
              data['Make Money with Us'].map(link => <li key={uuidv4()}><Link to='/' className={c.topFooterLink}>{link}</Link></li>)
            }
          </ul>
          <ul className={c.topFooterLinkWrapper} >
            <li><b>Amazon Payment Products</b></li>
            {
              data['Amazon Payment Products'].map(link => <li key={uuidv4()}><Link to='/' className={c.topFooterLink}>{link}</Link></li>)
            }
          </ul>
          <ul className={c.topFooterLinkWrapper} >
            <li><b>Let Us Help You</b></li>
            {
              data['Let Us Help You'].map(link => <li key={uuidv4()}><Link to='/' className={c.topFooterLink}>{link}</Link></li>)
            }
          </ul>
        </div>
        <div className={c.topFooterBottom}>
          <div className="footerLogo">
            <div className="header__logo-wrapper">
              <a href="/" className="logo__link">
                <img className="header__logo" src={logo} alt="" />
              </a>
            </div>
          </div>
          <div className={c.footerMainLinksWrapper}>
            <Link to='/' className={c.footerLang}>
              <BsGlobe2 />
              <p>English</p>
              <div>
                <IoMdArrowDropup className={c.footerArrowUp} />
                <IoMdArrowDropdown className={c.footerArrowDown} />

              </div>
            </Link>
            <Link to='/' className={c.footerCost}>$ USD-U.S. Dollar</Link>
            <Link to='/' className={c.footerCost}><img src={flags.en} alt="" />United States</Link>
          </div>
        </div>
      </div>
      <div className={c.bottomFooter}>
        <div className={c.bottomFooterLinksWrapper}>
          {
            links.map(links => <Link key={uuidv4()} to='/'>{links.map(link => <p key={uuidv4()}>{link}</p>)}</Link>)
          }
        </div>
        <div className={c.bottomFooterBottom}>
          <div>
            <Link to='/'>Conditions of Use</Link>
            <Link to='/'>Privacy Notice</Link>
            <Link to='/'>Interest-Based Ads</Link>
          </div>
          <p>© 1996-2022, Amazon.com, Inc. or its affiliates</p>
        </div>
      </div>
    </>
  )
}
