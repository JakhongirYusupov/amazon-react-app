import React from 'react';
import c from './MiniHeader.module.css';
import { GiHamburgerMenu } from 'react-icons/gi';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

const MiniHeader = ({ setIsSidebarActive }) => {
  const { t } = useTranslation();
  return (
    <div className={c.miniHeader}>
      <div className={c.miniHeaderAll} onClick={() => { setIsSidebarActive(true) }}>
        <GiHamburgerMenu className={c.miniHeaderHamburgerMenu} />
        <Link to=''>{t("header.select__all")}</Link>
      </div>
      <nav className={c.miniHeaderNavLink}>
        <Link to=''>{t("miniHeader.today__deals")}</Link>
        <Link to=''>{t("miniHeader.custom__service")}</Link>
        <Link to=''>{t("miniHeader.registry")}</Link>
        <Link to=''>{t("miniHeader.gift")}</Link>
        <Link to=''>{t("miniHeader.sell")}</Link>
      </nav>
      <div className={c.miniHeaderShopGifts}>
        <Link to=''>{t("miniHeader.turn__upp")}</Link>
      </div>

    </div>
  )
}

export default MiniHeader