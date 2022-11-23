import React from 'react';
import c from './MiniHeader.module.css';
import { GiHamburgerMenu } from 'react-icons/gi';
import { Link } from 'react-router-dom';

const MiniHeader = ({ setIsSidebarActive }) => {
  return (
    <div className={c.miniHeader}>
      <div className={c.miniHeaderAll} onClick={() => { setIsSidebarActive(true) }}>
        <GiHamburgerMenu className={c.miniHeaderHamburgerMenu} />
        <Link to=''>All</Link>
      </div>
      <nav className={c.miniHeaderNavLink}>
        <Link to=''>Today's Deals</Link>
        <Link to=''>Customer Service</Link>
        <Link to=''>Registry</Link>
        <Link to=''>Gift Cards</Link>
        <Link to=''>Sell</Link>
      </nav>
      <div className={c.miniHeaderShopGifts}>
        <Link to=''>Turn up the cheer, shop gifts now</Link>
      </div>

    </div>
  )
}

export default MiniHeader